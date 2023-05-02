import { View, Text, Image, Pressable} from 'react-native'
import React from 'react'

import {useNavigation} from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface ProductItemProps {
    item: {
        id: string,
        title: string,
        image: string,
        avgRating: number,
        ratings: number,
        price: number,
        oldPrice?: number,
    }
}

const ProductItem = ({item}: ProductItemProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    console.warn(`Item with id ${item.id} pressed`);
    navigation.navigate('ProductDetails', {id: item.id});
  }

  return (
      <Pressable onPress={onPress} style = {styles.root}>
        <Image style= {styles.image} 
          source = {{uri: item.image}} 
        />
        <View style = {styles.rightContainer}>
          <Text style = {styles.title} numberOfLines={3}>{item.title}</Text>
           {/* Rating */}
           <View style = {styles.ratingsContainer}>
              {[...Array(5)].map((_, i) => {
                const rating = item.avgRating - i;
                if (rating >= 1) {
                  return (
                    <FontAwesome
                      key={`${item.id}-${i}`}
                      style={{marginRight: 2}}
                      name="star"
                      size={18}
                      color={'#e47911'}
                    />
                  );
                } else if (rating >= 0.5) {
                  return (
                    <FontAwesome
                      key={`${item.id}+${i}`}
                      style={{marginRight: 2}}
                      name="star-half-o"
                      size={18}
                      color={'#e47911'}
                    />
                  );
                } else {
                  return (
                    <FontAwesome
                      key={`${item.id}-${i}`}
                      style={{marginRight: 2}}
                      name="star-o"
                      size={18}
                      color={'#e47911'}
                    />
                  );
                }
              })}
              <Text style = {styles.ratingsText}>{item.avgRating.toFixed(2)} ({item.ratings})</Text>
           </View>
            
           <Text style = {styles.price}>
            from ${item.price.toFixed(2)}
            {item.oldPrice && <Text style = {styles.oldPrice}>${item.oldPrice.toFixed(2)}</Text>}
           </Text>

        </View>
      </Pressable>
  )
}

export default ProductItem;