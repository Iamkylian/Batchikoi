import { StyleSheet, View, Text, Button, Image, ScrollView, Animated } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Setting from "./Setting";
import Profile from "./Profile";
import Theme from "./Theme";
import TopTheme from "../components/TopTheme";


interface RouterProps {
  navigation: NavigationProp<any, any>;
}

//<Button onPress={() => navigation.navigate("")} title="Open page" />

const HomePage = ({ navigation }: RouterProps) => {
  return (
      <View style={{ flex: 1, backgroundColor: "#E6E5DE" }}>
        <View style={styles.pageContainer}>
          <View style={styles.titleHome}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "#7787D1" }}>
              Welcome to Batchikoi
            </Text>
            <Text style={{ fontSize: 20, color: "#748c94" }}>
              The best way to learn and share
            </Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.cardConteiner}>
              <Image></Image>
            </View>
          </ScrollView>

        </View>
      </View>
  );
};

const tabs = [
  {
    name: "Decouverte",
    screen: HomePage,
  },
  {
    name: "Theme",
    screen: Theme,
  },
  {
    name: "Social",
    screen: Setting,
  },
  {
    name: "Profile",
    screen: Profile,
  },
  {
    name: "Setting",
    screen: Setting,
  },
];

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (

    <>

    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.navBar,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Decouverte"
        component={HomePage}
        options={{
          headerShown: false,
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
          headerShown: false,
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
          headerShown: false,
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
          headerShown: false,
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
          headerShown: false,
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

    <Animated.View style={styles.indicator} />
    </>

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

  indicator: {
    position: "absolute",
    width: 20,
    height: 2,
    left: 48.5,
    bottom: 22,
    backgroundColor: "#7787D1",
    zIndex: 100,
  },

  pageContainer: {
    flex: 1,
    //justifyContent: "center",
    marginHorizontal: 15,
  },

  titleHome: {
    color: "red",
    justifyContent: "center",
    top: 50,
    left: 15,
  },

  cardConteiner: {

  }

});
