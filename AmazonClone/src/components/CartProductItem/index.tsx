import { View, Text, Image } from 'react-native'
import React, {useState} from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import QuantitySelector from '../QuantitySelector';

interface CartProductItemProps {
  cartItem: {
    id: string,
    quantity: number,
    option?: string,
    item: {
        id: string,
        title: string,
        image: string,
        avgRating: number,
        ratings: number,
        price: number,
        oldPrice?: number,
    },
  },
}

const ProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, option, item, id} = cartItem;
  const [quantity, setQuantity] = useState(quantityProp);

  return (
      <View style = {styles.root}>
        <View>

          <Image style= {styles.image} 
            source = {{uri: item.image}} 
          />
          
          <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
        </View>
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
              <Text style = {styles.ratingsText}>{item.avgRating} ({item.ratings})</Text>
           </View>
            
           <Text style = {styles.price}>
            ${item.price}
           </Text>

           <Text style = {styles.option}>
            Option: {option}
           </Text>


        </View>
      </View>
  )
}

export default ProductItem;