import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/authScreens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FrontLogin from "./screens/authScreens/FrontLogin";
import AuthStack from "./stack/AuthStack";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="authstack" component={AuthStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
