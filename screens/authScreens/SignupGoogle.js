import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { CheckBox } from "react-native-elements";
// import splashImg from "./../../assets/images/splashImg.png";
import googleImg from "./../../assets/images/googleImg.png";
import addUserImg from "./../../assets/images/add-userImg.png";
import eyeImg from "./../../assets/images/eye.png";

const win = Dimensions.get("window");
function SignupGoogle({ navigation }) {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(161, 49, 49, 1)", "rgba(60, 5, 5, 1)"]}
        style={styles.background}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Sign up with Google </Text>

        <View style={styles.fieldCont}>
          <Text style={styles.label}>Email Address</Text>
          <Pressable style={styles.optCont}>
            <TextInput placeholder="" />
            <Image source={eyeImg} />
          </Pressable>
        </View>
        <View style={styles.fieldCont}>
          <Text style={styles.label}>Phone Number</Text>
          <Pressable style={styles.optCont}>
            <TextInput placeholder="" />
            {/* <Image source={eyeImg} /> */}
            <View></View>
          </Pressable>
        </View>
        <View style={styles.fieldCont}>
          <Text style={styles.label}>Password</Text>
          <Pressable style={styles.optCont}>
            <TextInput placeholder="" />
            <Image source={eyeImg} />
          </Pressable>
        </View>
        <View style={styles.fieldCont}>
          <Text style={styles.label}>Confirm Password</Text>
          <Pressable style={styles.optCont}>
            <TextInput placeholder="" />
            <Image source={eyeImg} />
          </Pressable>
        </View>

        <View style={styles.BtnCont}>
          <Pressable style={styles.Btn}>
            <Text style={styles.BtnText}>Submit</Text>
          </Pressable>
        </View>

        <View style={styles.textWrap}>
          <CheckBox
            title=""
            // center
            // checkedIcon="dot-circle-o"
            // uncheckedIcon="circle-o"
            // textStyle={{
            //     color: "gray",
            //     fontWeight: "normal",
            //     fontSize: win.width / 38,
            // }}
            // containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
            size={win.height / 40}
            // checked={check1}
            onPress={() => {}}
          />
          <Text style={styles.text}>I agree with</Text>
          <Text style={styles.textLink}>Terms and Conditions</Text>
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
    // alignItems: "center",
    justifyContent: "space-around",
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 16.5,
    marginVertical: win.height / 30,
    textAlign: "center",
  },
  fieldCont: {
    marginVertical: win.height / 120,
  },
  optCont: {
    backgroundColor: "#FF6366",
    height: win.height / 15,
    width: win.width / 1.2,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: win.height / 150,
    borderRadius: win.width / 40,
    flexDirection: "row",
    paddingHorizontal: win.width / 50,
  },

  text: {
    color: "#777777",
  },
  textLink: {
    color: "#FFF",
    marginLeft: 10,
  },
  textWrap: {
    flexDirection: "row",
    marginVertical: win.height / 50,

    alignItems: "center",
  },
  label: {
    color: "#F9DAE4",
  },
  BtnCont: {
    marginTop: win.height / 20,
  },
  Btn: {
    backgroundColor: "#F9DAE4",
    height: win.height / 15,
    width: win.width / 1.2,
    borderRadius: win.width / 40,
    alignItems: "center",
    justifyContent: "center",
  },
  BtnText: {
    color: "#FE3F47",
  },
});

export default SignupGoogle;
