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
import moniLogo from "./../../assets/images/moniLogo.png";

const win = Dimensions.get("window");
function SplashScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      // setLoading(false)
      navigation.navigate("frontlogin");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(161, 49, 49, 1)", "rgba(60, 5, 5, 1)"]}
        style={styles.background}
      />
      <View style={styles.innerContainer}>
        <Image source={moniLogo} />
        {/* {loading && <ActivityIndicator size="large" color="#fff" />} */}
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
    justifyContent: "space-evenly",
    height: win.height / 1.2,
  },
});

export default SplashScreen;
