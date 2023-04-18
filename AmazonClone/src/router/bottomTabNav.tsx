import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';

import Entypo from 'react-native-vector-icons/Entypo';

import HomeScreen from '../screens/HomeScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';


const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator 
        screenOptions  = {{
            tabBarShowLabel: false, 
            tabBarActiveTintColor: '#e47911'
        }} 
    >
        <Tab.Screen 
            name="Home" 
            component={HomeStack} 
            options={{
                tabBarIcon: ({color, size}) => (
                    <Entypo name="home" color={color} size={size} />
                ),
                headerShown: false
            }}
        />
        <Tab.Screen 
            name="Profile" 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({color, size}) => (
                    <Entypo name="user" color={color} size={size} />
                )
            }}
        />
        <Tab.Screen 
            name="Shopping Cart" 
            component={ShoppingCartStack} 
            options={{
                tabBarIcon: ({color, size}) => (
                    <Entypo name="shopping-cart" color={color} size={size} />
                ),
                headerShown: false
            }}
        />
        <Tab.Screen 
            name="More" 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({color, size}) => (
                    <Entypo name="menu" color={color} size={size} />
                ),
                headerShown: false
            }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNav