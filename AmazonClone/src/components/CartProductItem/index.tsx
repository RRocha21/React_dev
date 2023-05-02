import { View, Text, Image } from 'react-native'
import React, {useState} from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import QuantitySelector from '../QuantitySelector';

import { DataStore } from '@aws-amplify/datastore';
import { Auth } from 'aws-amplify';
import { CartProduct } from '../../models';


interface CartProductItemProps {
  cartItem: CartProduct;
}


const ProductItem = ({cartItem}: CartProductItemProps) => {
  console.log(cartItem)
  const {product, ...cartProduct} = cartItem;

  const updateQuantity = async (newQuantity: number) => {

    const original = await DataStore.query(CartProduct, cartProduct.id);

    await DataStore.save(
      CartProduct.copyOf(original, updated => {
        updated.quantity = newQuantity;
      })
    );
  }

  return (
      <View style = {styles.root}>
        <View>

          <Image style= {styles.image} 
            source = {{uri: product.image}} 
          />
          
          <QuantitySelector quantity={cartProduct.quantity} setQuantity={(newQuantity: number) => updateQuantity(newQuantity)}/>
        </View>
        <View style = {styles.rightContainer}>
          <Text style = {styles.title} numberOfLines={3}>{product.title}</Text>
           {/* Rating */}
           <View style = {styles.ratingsContainer}>
              {[...Array(5)].map((_, i) => {
                const rating = product.avgRating - i;
                if (rating >= 1) {
                  return (
                    <FontAwesome
                      key={`${product.id}-${i}`}
                      style={{marginRight: 2}}
                      name="star"
                      size={18}
                      color={'#e47911'}
                    />
                  );
                } else if (rating >= 0.5) {
                  return (
                    <FontAwesome
                      key={`${product.id}+${i}`}
                      style={{marginRight: 2}}
                      name="star-half-o"
                      size={18}
                      color={'#e47911'}
                    />
                  );
                } else {
                  return (
                    <FontAwesome
                      key={`${product.id}-${i}`}
                      style={{marginRight: 2}}
                      name="star-o"
                      size={18}
                      color={'#e47911'}
                    />
                  );
                }
              })}
              <Text style = {styles.ratingsText}>{product.avgRating} ({product.ratings})</Text>
           </View>
            
           <Text style = {styles.price}>
            ${product.price}
           </Text>

           <Text>
            Option: {cartProduct.option}
           </Text>


        </View>
      </View>
  )
}

export default ProductItem;