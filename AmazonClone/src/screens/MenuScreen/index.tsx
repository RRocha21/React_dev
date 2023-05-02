import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native'
import Button from '../../components/Button'



const MenuScreen = () => {
  const {signOut} = useAuthenticator()
  return (
    <SafeAreaView>
        <Button onPress={signOut} text = "Sign Out">
        </Button>
    </SafeAreaView>
  )
}

export default MenuScreen