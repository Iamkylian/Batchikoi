import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import HomePage from './app/screens/HomePage';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from './FirebaseConfigFile';
import Register from './app/screens/Register';

const Stack = createNativeStackNavigator();

const insideSatck = createNativeStackNavigator();

function InsideLayout() {
  return (
    <insideSatck.Navigator>
      <insideSatck.Screen name='HomePage' component={HomePage} options={{ headerShown: false }} />
    </insideSatck.Navigator>
  );
}

export default function App() {

  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('User : ' + user);
      setUser(user);
    });
  }, []);

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='Login'>

        {user ? (
          <Stack.Screen name='InsideLayout' component={InsideLayout} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        )}

        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}
