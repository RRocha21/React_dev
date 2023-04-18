import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';

import products from '../../data/cart';

const ShoppingCartScreen = () => {

  const totalPrice = products.reduce((summedPrice, product) => 
    summedPrice + product.item.price * product.quantity,
  0);

  const navigation = useNavigation();

  const onCheckout = () => {
    navigation.navigate('AddressDetails');
  }

  return (
    <View style = {styles.page}>
      {/* Render Product Component */}

      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item}/>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
          <Text style = {{fontSize:18, fontWeight: 'bold', textAlign: 'left', marginLeft: 10}}> Subtotal ({products.length} items):   
            <Text style = {{fontSize:18, color: '#e47911'}}>
              {' '} ${totalPrice.toFixed(2)}
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
