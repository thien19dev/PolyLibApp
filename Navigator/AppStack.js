import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListBookScreen from '../screens/BookListScreen';
import CreateBorrowForm from '../screens/CreateBorrowForm';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookList" component={ListBookScreen}/>
      <Stack.Screen name="Borrow Book" component={CreateBorrowForm} />
    </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})