import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

import PaymentScreen from "./../screens/appScreens/paymentScreens/PaymentScreen";
import CardActivity from "../screens/appScreens/paymentScreens/CardActivity";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const win = Dimensions.get("window");
function PaymentStack({ navigation }) {
  const [loading, setLoading] = useState(false);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="card-screen" component={PaymentScreen} />
      <Stack.Screen name="card-activity" component={CardActivity} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default PaymentStack;
