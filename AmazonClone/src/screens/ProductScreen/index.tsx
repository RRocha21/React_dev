import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import {useRoute, useNavigation} from '@react-navigation/native'

import { DataStore } from '@aws-amplify/datastore';
import { Product } from '../../models';
import { CartProduct } from '../../models';
import '@azure/core-asynciterator-polyfill'
import { Auth } from 'aws-amplify';
import {Picker} from '@react-native-picker/picker';

import styles from './styles';

// import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';


const ProductScreen = () => {
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [selectedOption, setSelectedOption] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const route = useRoute();
    const navigation = useNavigation();
    
    useEffect(() => {
        if (!route.params) {
            if (!route.params?.id) {
            return;
            }
        }
        // DataStore.query(Product, route.params.id).then(setProduct);
        const fetchProducts = async () => {
            const result = await DataStore.query(Product, route.params.id);
            setProduct(result);
            setSelectedOption(result.options[0]);
        };
        fetchProducts();
      }, [route.params]);

    if (!product) {
        return <Text>Product Not Found</Text>
    }
        
    const onAddToCart = async () => {
        const userData = await Auth.currentAuthenticatedUser();
        if (!userData || !product) {
            return;
        }

        const newCartProduct = new CartProduct({
            userSub: userData.attributes.sub,
            quantity,
            option: selectedOption || null,
            productId: product.id,
            product,
        });

        await DataStore.save(newCartProduct);
        navigation.navigate('shoppingCart');
    }
        


    return (
        <ScrollView>
        <Text style = {styles.title}>{product.title}</Text>

        {/* Image carousel */}
        <ImageCarousel images = {product.images} />

        {/* Option Selector */}
        <View style = {styles.optionContainer}>
            <Picker style = {styles.optionSelector}
                selectedValue = {selectedOption}
                onValueChange = {(itemValue) => setSelectedOption(itemValue)}
            >
                {product.options.map((option, index)=> (
                    <Picker.Item key= {index} label = {option} value = {option} />
                ))}
            </Picker>
        </View>

        {/* Price */}
        <Text style = {styles.price}>
                from ${product.price.toFixed(2)}
                {product.oldPrice && <Text style = {styles.oldPrice}>${product.oldPrice.toFixed(2)}</Text>}
        </Text>

        {/* Product Description */}
        <Text style = {styles.descriptionTitle}>
            Product Description
        </Text>
        <Text style = {styles.description}>
            {product.description}
        </Text>

        {/* Quantity Selector */}
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        {/* Button */}
        <Button 
            text = "Add to Cart"
            onPress = {
                onAddToCart
            }
        />
        <Button 
            text = "Buy Now" 
            onPress = {() => 
                console.warn('Buy Now')
            } 
        />
        </ScrollView>
    )
}

export default ProductScreen