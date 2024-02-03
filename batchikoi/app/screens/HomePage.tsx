import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../FirebaseConfigFile'

interface RouterProps {
  navigation: NavigationProp<any, any>
}

const HomePage = ({ navigation }: RouterProps) => {
  return (
    <View>

      <Button onPress={() => navigation.navigate('')} title='Open page' />
      <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logout' />

    </View>
  )
}

export default HomePage