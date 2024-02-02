import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfigFile";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
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
      <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput value={password} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)} secureTextEntry={true}></TextInput>
        {loading ? (
            <ActivityIndicator size="large" color="blue" /> 
            ) : (
            <>
                <Button title="Login" onPress={signIn} />
                <Button title="Create account" onPress={signUp}/>
            </>
        )}
    </View>
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

});
