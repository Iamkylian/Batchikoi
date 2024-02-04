import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfigFile'

const Setting = () => {
  return (
    <View>
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})