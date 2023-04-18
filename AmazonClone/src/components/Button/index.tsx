import { Pressable, Text, StyleSheet } from 'react-native'
import React from 'react'

interface ButtonProps {
    text: string,
    onPress?: () => void,
    containerStyles?: object,
}

const Button = ({text, onPress, containerStyles}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style = {[styles.root, containerStyles]}>
        <Text style = {styles.text}>{text}</Text>
    </Pressable>

  )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#e3e3e3',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10,
        borderWidth: 1,
        borderColor: '#d9d9d9',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0f0f0f',
    },
})

export default Button