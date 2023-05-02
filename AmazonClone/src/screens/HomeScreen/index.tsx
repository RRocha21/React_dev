import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Product } from '../../models';
import '@azure/core-asynciterator-polyfill'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ProductItem from '../../components/ProductItem';

// import products from '../../data/products';

const HomeScreen = ({searchValue}: {searchValue: string}) => {

  const [products, setProducts] = useState<Product[]>([]);
  console.log("passou aqui");
  useEffect(() => {
    DataStore.query(Product).then(setProducts);
    // const fetchProducts = async () => {
    //   const result = await DataStore.query(Product);
    //   setProducts(result);
    // };
    // fetchProducts();
  }, []);

  return (
    <View style = {styles.page}>
      {/* Render Product Component */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item}/>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  }
});

export default HomeScreen;
