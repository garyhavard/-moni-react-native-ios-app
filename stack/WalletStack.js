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

import WalletScreen from "./../screens/appScreens/walletScreens/WalletScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionScreen from "../screens/appScreens/walletScreens/TransactionScreen";
import TransactionList from "../screens/appScreens/walletScreens/TransactionList";
import RecieveMoniScreen from "../screens/appScreens/walletScreens/RecieveMoniScreen";
import SendMoniScreen from "../screens/appScreens/walletScreens/SendMoniScreen";
import BuyAndSell from "../screens/appScreens/walletScreens/BuyAndSell";
import TransferMoney from "../screens/appScreens/walletScreens/TransferMoney";

const Stack = createNativeStackNavigator();

const win = Dimensions.get("window");
function WalletStack({ navigation }) {
  const [loading, setLoading] = useState(false);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="wallet-screen" component={WalletScreen} />
      <Stack.Screen name="transaction-screen" component={TransactionScreen} />
      <Stack.Screen name="transaction-list" component={TransactionList} />
      <Stack.Screen name="recieve-moni" component={RecieveMoniScreen} />
      <Stack.Screen name="send-moni" component={SendMoniScreen} />
      <Stack.Screen name="buyandsell" component={BuyAndSell} />
      <Stack.Screen name="transfer-money" component={TransferMoney} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default WalletStack;
