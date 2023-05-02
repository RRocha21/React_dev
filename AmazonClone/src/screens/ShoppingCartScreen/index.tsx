import {View, Text, Image, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Product, CartProduct} from '../../models';
import { DataStore } from '@aws-amplify/datastore';
import { Auth } from 'aws-amplify';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';

// import products from '../../data/cart';

const ShoppingCartScreen = () => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [productsFetched, setProductsFetched] = useState(false);
  const navigation = useNavigation();

  const fetchCartProducts = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    DataStore.query(CartProduct).then(fetchedCartProducts => {
      const filteredCartProducts = fetchedCartProducts.filter(cp => cp.userSub === userData.attributes.sub);
      setCartProducts(filteredCartProducts);
    });
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  useEffect(() => {
    if (productsFetched || cartProducts.length === 0) {
      return;
    }

    const fetchProducts = async () => {
      console.log("passou 212121")
      const products = await Promise.all(
        cartProducts.map((cartProduct) =>
          DataStore.query(Product, cartProduct.productId)
        )
      );
    
      const updatedCartProducts = cartProducts.map((cartProduct, index) => ({
        ...cartProduct,
        product: products[index],
      }));
      
      setCartProducts(updatedCartProducts);
    
      setProductsFetched(true);
    };

    fetchProducts();
  }, [cartProducts]);

      

  useEffect(() => {
    const subscription = DataStore.observe(CartProduct).subscribe(() => {
        setProductsFetched(false);
        fetchCartProducts();
      }
    );
    return () => subscription.unsubscribe;
  }, []);

  useEffect(() => {
    const subscriptions = cartProducts.map(cp =>
      DataStore.observe(CartProduct, cp.id).subscribe(msg => {
        if (msg.opType === 'UPDATE') {
          setCartProducts(curCartProducts =>
            curCartProducts.map(cp => {
              if (cp.id !== msg.element.id) {
                return cp;
              }
              return {
                ...cp,
                ...msg.element,
              };
            }),
          );
        }
      }),
    );

    return () => {
      subscriptions.forEach(sub => sub.unsubscribe());
    };
  }, [cartProducts]);

  const totalPrice = cartProducts.reduce((summedPrice, product) => 
  summedPrice + (product?.product?.price || 0) * product.quantity,
  0);

  const onCheckout = () => {
    navigation.navigate('AddressDetails', {totalPrice});
  }

  if (cartProducts.filter(cp => !cp.product).length !== 0) {
    return <ActivityIndicator />;
  }

  
      


  return (
    <View style = {styles.page}>
      {/* Render Product Component */}
      <FlatList
        data={cartProducts}
        renderItem={({item}) => <CartProductItem cartItem={item}/>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
          <Text style = {{fontSize:18, fontWeight: 'bold', textAlign: 'left', marginLeft: 10}}> Subtotal ({cartProducts.length} items):   
            <Text style = {{fontSize:18, color: '#e47911'}}>
              {' '}${totalPrice.toFixed(2)}
            </Text> 
          </Text>
          <Button 
             text = "Proceed to Checkout" 
             onPress = {onCheckout}
            containerStyles = {{ backgroundColor: '#f7e300', borderColor: '#c7c7c7', borderWidth: 1}}
          />
        </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  }
});

export default ShoppingCartScreen;
