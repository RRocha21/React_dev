import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform} from 'react-native'
import React, { useEffect, useState } from 'react'
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import countryList from 'country-list'
import Button from '../../components/Button';

import { DataStore } from '@aws-amplify/datastore';
import { Order, OrderProduct, CartProduct } from '../../models';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createPaymentIntent } from '../../graphql/mutations';

import { useNavigation, useRoute } from '@react-navigation/native';

const countries = countryList.getData();

const AddressScreen = () => {

    const [country, setCountry] = React.useState(countries[0].code);
    const [fullName, setFullName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');

    const [address, setAddress] = React.useState('');
    const [addressError, setaddressError] = React.useState('');

    const [city, setCity] = React.useState('');

    const navigation = useNavigation();

    const route = useRoute();
    const cartTotal = Math.floor(route.params?.totalPrice * 100 || 0);

    useEffect(() => {
        initPaymentSheet();
    }, []);

    const fetchPaymentIntent = async () => {
        const response = await API.graphql(
            graphqlOperation(
                createPaymentIntent ,
                {
                    amount: cartTotal,
                    currency: 'usd',
                }
            )
        );
        console.log(response);
    }

    const initPaymentSheet = async () => {
        await fetchPaymentIntent();
    }

    const saveOrder = async () => {
        // create a new order in the database
        const userData = await Auth.currentAuthenticatedUser();
        

        const newOrder = await DataStore.save(
            new Order({
                userSub: userData.attributes.sub,
                fullName: fullName,
                phoneNumber: phoneNumber,
                address: address,
                city: city,
                country: country,
            })
        );

        // attach all the cart items to the order   

        const cartProducts = await DataStore.query(CartProduct).then(fetchedCartProducts => {
            const filteredCartProducts = fetchedCartProducts.filter(cp => cp.userSub === userData.attributes.sub);
            return filteredCartProducts;
        });
        
        await Promise.all(cartProducts.map(cartProduct => {
            DataStore.save(
                new OrderProduct({
                    quantity: cartProduct.quantity,
                    option: cartProduct.option,
                    productId: cartProduct.productId,
                    orderId: newOrder.id,
                })
            )
        }));

        // delete all the cart items from the database

        await Promise.all(
            cartProducts.map(cartProduct => 
                DataStore.delete(cartProduct)
            )
        );

        // redirect home

        navigation.navigate('Home');
    };

    const onCheckout = () => {

        if (addressError) {
            Alert.alert('Please fix the errors in the form');
            return;
        }

        if (!fullName) {
            Alert.alert('Please enter your full name');
            return;
        } 

        if (!phoneNumber) {
            Alert.alert('Please enter your phone number');
            return;
        }

        if (!address) {
            Alert.alert('Please enter your address');
            return;
        }

        if (!city) {
            Alert.alert('Please enter your city');
            return;
        }
        console.warn('Success');

        saveOrder();
    }

    const validateAddress = () => {
        if (address.length < 5) {
            setaddressError('Address is too short');
        } else {
            setaddressError('');
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
            <ScrollView style = {styles.root}>
                {/* Country */}
                <View style = {styles.row}>
                    <Picker
                        selectedValue={country}
                        onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
                    >
                        {countries.map((country, index: { name: string | undefined; code: any; }) => (
                            <Picker.Item key={`${index}`} label={country.name} value={country.code} />
                        ))}
                    </Picker>
                </View>
                {/* Full Name */}
                <View style = {styles.row}>
                    <Text style = {styles.label}>Full Name (First and Last name)</Text>
                    <TextInput 
                        style = {styles.input} 
                        placeholder='Full Name'
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </View>
                {/* Phone Number */}
                <View style = {styles.row}>
                    <Text style = {styles.label}>Phone Number</Text>
                    <TextInput 
                        style = {styles.input} 
                        placeholder='Phone Number'
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType='phone-pad'
                    />
                </View>
                {/* Address */}
                <View style = {styles.row}>
                    <Text style = {styles.label}>Address</Text>
                    <TextInput 
                        style = {styles.input} 
                        placeholder='Address'
                        value={address}
                        onEndEditing={() => {
                            validateAddress();
                        }}
                        onChangeText={(text) => 
                            {
                                setAddress(text); 
                                setaddressError('');
                            }
                        }
                    />
                    {!!addressError && <Text style={styles.errorLabel}>{addressError}</Text>}
                </View>
                {/* City */}
                <View style = {styles.row}>
                    <Text style = {styles.label}>City</Text>
                    <TextInput 
                        style = {styles.input} 
                        placeholder='City'
                        value={city}
                        onChangeText={setCity}
                    />
                </View>


                <Button 
                    text='Continue' 
                    onPress={onCheckout} 
                    containerStyles = {{ backgroundColor: '#e47911', borderColor: '#c7c7c7', borderWidth: 1}}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddressScreen