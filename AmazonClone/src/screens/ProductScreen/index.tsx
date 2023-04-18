import { View, Text, ScrollView } from 'react-native'
import React, {useState} from 'react'
import {useRoute} from '@react-navigation/native'

import {Picker} from '@react-native-picker/picker';

import styles from './styles';

import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';


const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : '');
    const [quantity, setQuantity] = useState(1);

    const route = useRoute();
    console.log(route.params);

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
                from ${product.price}
                {product.oldPrice && <Text style = {styles.oldPrice}>${product.oldPrice}</Text>}
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
            onPress = {() => 
            console.warn('Add to Cart')
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