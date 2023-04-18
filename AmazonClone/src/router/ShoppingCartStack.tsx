import { } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import BottomTabNav from './bottomTabNav'
import ShoppingCartScreen from '../screens/ShoppingCartScreen'
import AddressScreen from '../screens/AddressScreen'

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ShoppingCart" 
        component={ShoppingCartScreen} 
        options={{
          title: 'Shopping Cart'
        }}
      />
      <Stack.Screen 
        name="AddressDetails" 
        component={AddressScreen} 
        options={{
          title: 'Address Details'
        }}
      />
    </Stack.Navigator>
  )
}

export default ShoppingCartStack