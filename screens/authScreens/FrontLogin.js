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
import splashImg from "./../../assets/images/splashImg.png";
import googleImg from "./../../assets/images/googleImg.png";
import addUserImg from "./../../assets/images/add-userImg.png";
import addUserImg2 from "./../../assets/images/add-userImg2.png";

// import { useFonts } from 'expo-font';

const win = Dimensions.get("window");
function FrontLogin({ navigation }) {
  // const [fontsLoaded] = useFonts({
  //     'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  // });
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(161, 49, 49, 1)", "rgba(60, 5, 5, 1)"]}
        style={styles.background}
      />
      <View style={styles.innerContainer}>
        <Image source={splashImg} />
        <Text style={styles.heading}>Welcome to Moni!</Text>

        <Pressable
          style={styles.optCont}
          onPress={() => navigation.navigate("accountSign")}
        >
          <Image source={addUserImg2} />
          <Text style={styles.optText}>Sign up with email or phone</Text>
        </Pressable>
        <View style={styles.textWrap}>
          <Text style={styles.text}>Already registered?</Text>
          <Pressable onPress={() => navigation.navigate("loginMoni")}>
            <Text style={styles.textLink}>Log In</Text>
          </Pressable>
        </View>
        {loading && <ActivityIndicator size="large" color="#fff" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A23131",
    height: win.height + win.height / 19,
    width: win.width,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: win.height / 1.2,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 16.5,
    marginVertical: win.height / 50,
  },
  optCont: {
    backgroundColor: "rgba(161, 49, 49, 1)",
    height: win.height / 15,
    width: win.width / 1.2,
    borderWidth: 2,
    borderColor: "#FF6366",
    alignItems: "center",
    marginVertical: win.height / 50,
    borderRadius: win.width / 40,
    flexDirection: "row",
    paddingHorizontal: win.width / 50,
    // justifyContent: "center"
  },
  optText: {
    // fontWeight: "bold",
    marginLeft: 15,
    color: "#fff",
  },
  text: {
    color: "#FFF",
  },
  textLink: {
    color: "#FF6366",
    marginLeft: 10,
  },
  textWrap: {
    flexDirection: "row",
    marginVertical: win.height / 50,
  },
});

export default FrontLogin;
