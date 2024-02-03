import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfigFile';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { MenuButton } from '@mui/joy';



const Register = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    const auth = FIREBASE_AUTH;
    
    const signUp = async () => {
        setLoading(true);
        try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        alert("Sign up successfully : check your email !");
        } catch (error: any) {
        console.log(error);
        alert("Sign up failed " + error.message);
        } finally {
        setLoading(false);
        }
    };

  return (

    <View style={styles.container}>

        <KeyboardAvoidingView behavior="padding">
            <TextInput value={username} style={styles.input} placeholder="Username" autoCapitalize="none" onChangeText={(text) => setUsername(text)}></TextInput>
            <TextInput value={firstName} style={styles.input} placeholder="firstName" autoCapitalize="none" onChangeText={(text) => setFirstName(text)}></TextInput>
            <TextInput value={lastName} style={styles.input} placeholder="lastName" autoCapitalize="none" onChangeText={(text) => setLastName(text)}></TextInput>
            <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
            
            <TextInput value={password} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)} secureTextEntry={true}></TextInput>
            <Button title="Sign up" onPress={signUp} />

        </KeyboardAvoidingView>

    </View>
      
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 20,
      },

      input: {
        height: 50,
        marginVertical: 4,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        backgroundColor: "white",
      },
})