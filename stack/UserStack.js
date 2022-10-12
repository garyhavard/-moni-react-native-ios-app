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

import UserScreen from "./../screens/appScreens/userScreens/UserScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecurityScreen from "../screens/appScreens/userScreens/SecurityScreen";
import PreferenceScreen from "../screens/appScreens/userScreens/PreferenceScreen";
import BackupWalletScreen from "../screens/appScreens/userScreens/BackupWalletScreen";
import IDVerificationScreen from "../screens/appScreens/userScreens/IDVerificationScreen";
import ReferScreen from "../screens/appScreens/userScreens/ReferScreen";
import FAQScreen from "../screens/appScreens/userScreens/FAQScreen";

const Stack = createNativeStackNavigator();

const win = Dimensions.get("window");
function UserStack({ navigation }) {
  const [loading, setLoading] = useState(false);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="user-screen" component={UserScreen} />
      <Stack.Screen name="security-screen" component={SecurityScreen} />
      <Stack.Screen name="preference-screen" component={PreferenceScreen} />
      <Stack.Screen name="wallet-backup" component={BackupWalletScreen} />
      <Stack.Screen name="id-verification" component={IDVerificationScreen} />
      <Stack.Screen name="refer-screen" component={ReferScreen} />
      <Stack.Screen name="faq-screen" component={FAQScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default UserStack;
