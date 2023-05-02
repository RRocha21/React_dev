/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StatusBar, useColorScheme, Pressable, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import { StripeProvider } from '@stripe/stripe-react-native';

import Router from './src/router';

import { Amplify } from 'aws-amplify';

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
// import '@aws-amplify/ui-react/styles.css';

import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);




function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex : 1,
  };

  return (
    <Authenticator.Provider>
      <Authenticator>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <StripeProvider publishableKey='pk_test_51N2IG4CAAYsE0izb3WMEGFErOA8LQzmWeGeeBvODBVML3vI0qBLYfAOotm5yKOwpEmlkhcQe6uK8s7qEa568Clyf00J7zMDXBI'>
            <Router />
          </StripeProvider>
        </SafeAreaView>
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;
