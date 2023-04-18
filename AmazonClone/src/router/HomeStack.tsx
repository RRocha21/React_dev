import { View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native'
import React, {useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Feather from 'react-native-vector-icons/Feather'



import HomeScreen from '../screens/HomeScreen'
import ProductScreen from '../screens/ProductScreen'


const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

const HeaderComponent = ({searchValue, setSearchValue}: HeaderComponentProps) => {
  return (
    <SafeAreaView style = {styles.root}>
      <View style = {styles.search_container}>
        <Feather name = "search" size = {20} />
        <TextInput 
          style = {styles.search} 
          placeholder = "Search..."
          value = {searchValue}
          onChangeText = {setSearchValue}
        />
      </View>
    </SafeAreaView>
  )
}

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
      <Stack.Navigator
        screenOptions={{
          header : () => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue}/>
        }}
      >
        <Stack.Screen name="HomeScreen" options={{title: 'Home'}}>
          {() => <HomeScreen searchValue={searchValue} />}
        </Stack.Screen>
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductScreen} 
        />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#22e3dd',
  },
  search_container: {
    backgroundColor: 'white',
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  search: {
    height: 40,
    marginLeft: 10,
  }
})

export default HomeStack