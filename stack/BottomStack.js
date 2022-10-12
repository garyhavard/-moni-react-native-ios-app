import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import SplashScreen from "./../screens/authScreens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OtpScreen from "../screens/authScreens/OtpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import WalletStack from "./WalletStack";
import SwapStack from "./SwapStack";
import PaymentStack from "./PaymentStack";
import UserStack from "./UserStack";
import circle from "./../assets/images/circle.png";
import EmptyScreen from "../screens/appScreens/EmptyScreen";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const win = Dimensions.get("window");
{
  /* <Image source={circle} style={styles.circleStyling} /> */
}

function BottomStack() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const [themeColor, setThemeColor] = useState("#F8F8F8");
  useEffect(() => {
    if (theme === "light") {
      setThemeColor("#2C2B30");
    } else {
      setThemeColor("#F8F8F8");
    }
  }, [theme]);
  // let themeColor = "#F8F8F8";
  // theme === "dark" ? themeColor = "#F8F8F8" : "#2C2B30"
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: themeColor },
      }}
    >
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#FFF",
          },

          // headerTitle: (props) => (
          //     <View style={styles.headerWrap}>
          //         <AntDesign name="plus" size={24} color="white" onPress={() => navigation.navigate("MainScreen")} />
          //         <View style={{width:win.width/15}}></View>
          //         <Image source={smallLogo} />
          //         <Feather name="settings" size={24} color="white" onPress={() => navigation.navigate("Settings")} />
          //     </View>
          // ),
          tabBarIcon: ({ focused, color, size }) => (
            // <MaterialIcons name="local-offer" size={28} color={focused ? "#0F3749" : "#CDCDCD"} />
            <AntDesign
              name="wallet"
              size={win.height / 30}
              color={focused ? "#FE3F47" : "#CDCDCD"}
            />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "#FE3F47" : color,
                fontSize: 10,
                paddingBottom: win.height / 200,
              }}
            >
              Wallet
            </Text>
          ),
        }}
        name="Wallet"
        component={WalletStack}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#FFF",
          },
          // headerTitle: (props) => (
          //     <View style={styles.headerWrap}>
          //         <AntDesign name="plus" size={24} color="white" onPress={() => navigation.navigate("MainScreen")} />
          //         <View style={{width:win.width/15}}></View>
          //         <Image source={smallLogo} />
          //         <Feather name="settings" size={24} color="white" onPress={() => navigation.navigate("Settings")} />
          //     </View>
          // ),
          tabBarIcon: ({ focused, color, size }) => (
            // <MaterialIcons name="local-offer" size={28} color={focused ? "#0F3749" : "#CDCDCD"} />
            <Entypo
              name="swap"
              size={win.height / 30}
              color={focused ? "#FE3F47" : "#CDCDCD"}
            />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "#FE3F47" : color,
                fontSize: 10,
                paddingBottom: win.height / 200,
              }}
            >
              Swap
            </Text>
          ),
        }}
        name="Swap"
        component={SwapStack}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#FFF",
          },

          tabBarIcon: ({ focused, color, size }) => (
            // <MaterialIcons name="local-offer" size={28} color={focused ? "#0F3749" : "#CDCDCD"} />
            // <Entypo name="swap" size={win.height / 30} color={focused ? "#FE3F47" : "#CDCDCD"} />
            <Image source={circle} style={styles.circleStyle} />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "#F8F8F8" : "#F8F8F8",
                fontSize: 10,
                paddingBottom: win.height / 200,
              }}
            ></Text>
          ),
        }}
        name="empty"
        component={EmptyScreen}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#FFF",
          },
          // headerTitle: (props) => (
          //     <View style={styles.headerWrap}>
          //         <AntDesign name="plus" size={24} color="white" onPress={() => navigation.navigate("MainScreen")} />
          //         <View style={{width:win.width/15}}></View>
          //         <Image source={smallLogo} />
          //         <Feather name="settings" size={24} color="white" onPress={() => navigation.navigate("Settings")} />
          //     </View>
          // ),
          tabBarIcon: ({ focused, color, size }) => (
            // <MaterialIcons name="local-offer" size={28} color={focused ? "#0F3749" : "#CDCDCD"} />
            <MaterialIcons
              name="payment"
              size={win.height / 30}
              color={focused ? "#FE3F47" : "#CDCDCD"}
            />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "#FE3F47" : color,
                fontSize: 10,
                paddingBottom: win.height / 200,
              }}
            >
              Cards
            </Text>
          ),
        }}
        name="Payment"
        component={PaymentStack}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#FFF",
          },
          // headerTitle: (props) => (
          //     <View style={styles.headerWrap}>
          //         <AntDesign name="plus" size={24} color="white" onPress={() => navigation.navigate("MainScreen")} />
          //         <View style={{width:win.width/15}}></View>
          //         <Image source={smallLogo} />
          //         <Feather name="settings" size={24} color="white" onPress={() => navigation.navigate("Settings")} />
          //     </View>
          // ),
          tabBarIcon: ({ focused, color, size }) => (
            // <MaterialIcons name="local-offer" size={28} color={focused ? "#0F3749" : "#CDCDCD"} />
            <AntDesign
              name="user"
              size={win.height / 30}
              color={focused ? "#FE3F47" : "#CDCDCD"}
            />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "#FE3F47" : color,
                fontSize: 10,
                paddingBottom: win.height / 200,
              }}
            >
              User
            </Text>
          ),
        }}
        name="User"
        component={UserStack}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  circleStyle: {
    zIndex: 1000,
    marginBottom: win.height / 20,
    height: win.height / 12,
    width: win.height / 12,
  },
});

export default BottomStack;
