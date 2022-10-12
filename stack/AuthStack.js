import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./../screens/authScreens/SplashScreen"
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FrontLogin from "./../screens/authScreens/FrontLogin";
import SignupGoogle from "../screens/authScreens/SignupGoogle";
import SignupAccount from "../screens/authScreens/SignupAccount";
import LoginMoni from "../screens/authScreens/LoginMoni";
import ForgotPassword from "../screens/authScreens/ForgotPassword"
import OtpScreen from "../screens/authScreens/OtpScreen";
import ResetPassword from "../screens/authScreens/ResetPassword"
import BottomStack from "./BottomStack";


const Stack = createNativeStackNavigator();


export default function AuthStack({ navigation }) {
    return (


        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="splashscreen" component={SplashScreen} />
            <Stack.Screen name="frontlogin" component={FrontLogin} />
            <Stack.Screen name="googleSign" component={SignupGoogle} />
            <Stack.Screen name="accountSign" component={SignupAccount} />
            <Stack.Screen name="loginMoni" component={LoginMoni} />
            <Stack.Screen name="forgotpassword" component={ForgotPassword} />
            <Stack.Screen name="otpscreen" component={OtpScreen} />
            <Stack.Screen name="resetpassword" component={ResetPassword} />
            <Stack.Screen name="homescreen" component={BottomStack} />
        </Stack.Navigator>


    );
}
