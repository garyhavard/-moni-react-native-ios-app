import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';

import SwapScreen from "./../screens/appScreens/swapScreens/SwapScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


const win = Dimensions.get("window");
function SwapStack({ navigation }) {

    const [loading, setLoading] = useState(false)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="swap-screen" component={SwapScreen} />


        </Stack.Navigator>
    )

}


const styles = StyleSheet.create({


})

export default SwapStack