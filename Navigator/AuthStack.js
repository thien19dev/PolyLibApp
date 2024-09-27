import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})