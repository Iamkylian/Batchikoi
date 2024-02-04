import { StyleSheet, View, Text, Button, Image } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfigFile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Setting from "./Setting";
import Profile from "./Profile";
import Theme from "./Theme";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HomePage = ({ navigation }: RouterProps) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate("")} title="Open page" />
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.navBar,

      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navBarView}>
              <Image
                source={require("../../assets/icons/house-solid.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#7787D1" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#7787D1" : "#748c94",
                  fontSize: 13,
                  top: 3,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Theme"
        component={Theme}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navBarView}>
              <Image
                source={require("../../assets/icons/fan-solid.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#7787D1" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#7787D1" : "#748c94",
                  fontSize: 13,
                  top: 3,
                }}
              >
                Theme
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Social"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navBarView}>
              <Image
                source={require("../../assets/icons/circle-nodes-solid.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#7787D1" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#7787D1" : "#748c94",
                  fontSize: 13,
                  top: 3,
                }}
              >
                Social
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navBarView}>
              <Image
                source={require("../../assets/icons/user-solid.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#7787D1" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#7787D1" : "#748c94",
                  fontSize: 13,
                  top: 3,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navBarView}>
              <Image
                source={require("../../assets/icons/gear-solid.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#7787D1" : "#748c94",
                  shadowColor: "#7787D1",
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.5,
                }}
              />
              <Text
                style={{
                  color: focused ? "#7787D1" : "#748c94",
                  fontSize: 13,
                  top: 3,
                }}
              >
                Setting
              </Text>
            </View>
          ),
        }}
      />


    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    height: 90,
    shadowColor: "#7787D1",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  navBarView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});