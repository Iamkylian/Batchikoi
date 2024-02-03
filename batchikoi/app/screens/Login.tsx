import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, ImageBackground, KeyboardAvoidingView, TouchableOpacityBase, TouchableOpacity } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfigFile";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { NavigationProp } from "@react-navigation/native";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Login = ({ navigation }: RouterProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Logged in successfully !");
    } catch (error: any) {
      console.log(error);
      alert("Sign In failed " + error.message);
    } finally {
      setLoading(false);
    }
  };

// source={require('../../assets/login/loginBackground.jpg')}

  return (
    <ImageBackground  style={styles.background}> 
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding">
            <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput value={password} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)} secureTextEntry={true}></TextInput>
                {loading ? (
                    <ActivityIndicator size="large" color="blue" /> 
                    ) : (
                    <>
                        <Button title="Login" onPress={signIn} />
                        <Text style={styles.or}> or </Text>
                        <Text style={styles.registerText}>New to the app ?<Text onPress={ () => navigation.navigate('Register')} style={styles.register}> Create account</Text> </Text>
                        
                    </>
                )}

            </KeyboardAvoidingView>
            
        </View>
    </ImageBackground>
  );
};

export default Login;

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

    button: { // ne marche pas
        padding: 10,
        backgroundColor: "blue",
        borderRadius: 15,
    },

    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    or : { 
        textAlign: "center",
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 15,
    },

    registerText: {
        textAlign: "center",
    },

    register: {
        color: "blue",
    }

});
