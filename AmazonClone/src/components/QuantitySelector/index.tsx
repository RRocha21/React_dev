import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface QuantityProps {
    quantity: number;
    setQuantity: (newQuantity: number) => void;
  }

const QuantitySelector = ({quantity,setQuantity}: QuantityProps) => {
    const onMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
          }
    }
    const onPlus = () => {
        setQuantity(quantity + 1);
    }

  return (
    <View style = {styles.root}>
        <View style = {styles.quantityContainer}>
            <Pressable 
                style = {styles.button}
                onPress={onMinus}
            >
                <Text style = {styles.buttonText}>-</Text>
            </Pressable>
            <Text style = {styles.quantity}>{quantity}</Text>
            <Pressable
                style = {styles.button}
                onPress={onPlus}
            >
                <Text style = {styles.buttonText}>+</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        margin: 10,
        alignItems: 'center',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        width: 130,
        justifyContent: 'space-between',
        borderRadius: 10,
        overflow: 'hidden',
    },
    button: {
        color: '#007eb9',
        width: 35,
        height: 35,
        backgroundColor: '#e3e3e3',
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        fontSize: 18,
        color: '#0f0f0f',
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 18,
        color: '#0f0f0f',
        fontWeight: 'bold',
    },
})


export default QuantitySelector