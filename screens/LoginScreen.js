import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await axios.post('' , {email, password});
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <View>
      <TextInput placeholder='Email' value={email} onChangeText={setEmail} />
      <TextInput placeholder='Password' value={password} onChangeText={setPassword} />
      <Button title='Login' onPress={login} />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})