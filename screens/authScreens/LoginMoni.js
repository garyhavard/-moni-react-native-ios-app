import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import CountryCode from "../../components/CountryCode";
import { Snackbar } from "react-native-paper";
const win = Dimensions.get("window");

function LoginMoni({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const [showPhone, setShowPhone] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [displayMsg, setDisplayMsg] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (emailRegex.test(email)) {
      if (password.length > 6) {
        navigation.navigate("homescreen");
      } else {
        setVisible(true);
        setDisplayMsg("Password should be greater than 6 digits");
      }
    } else {
      setVisible(true);
      setDisplayMsg("Please enter valid Email Address");
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(161, 49, 49, 1)", "rgba(60, 5, 5, 1)"]}
        style={styles.background}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Moni Account Login </Text>

        <View style={styles.toggleWrap}>
          <Pressable
            style={showEmail ? styles.toggleOneActive : styles.toggleOne}
            onPress={() => setShowEmail(true)}
          >
            <Text style={styles.toogleText}>Email Address</Text>
          </Pressable>
          <Pressable
            style={showEmail ? styles.toggleTwo : styles.toggleTwoActive}
            onPress={() => setShowEmail(false)}
          >
            <Text style={styles.toogleText}>Phone Number</Text>
          </Pressable>
        </View>

        {showEmail && (
          <View style={styles.fieldCont}>
            <Text style={styles.label}>Email Address</Text>
            <Pressable style={styles.optCont}>
              <TextInput
                placeholder="Enter Email Address"
                value={email}
                onChangeText={setEmail}
                style={{ width: win.width / 1.5, color: "#FFF" }}
                placeholderTextColor="#FF6366"
              />
              {/* <Image source={eyeImg} /> */}
              <MaterialIcons
                name="email"
                size={win.width / 18}
                color="#F9DAE4"
              />
            </Pressable>
          </View>
        )}
        {!showEmail && (
          <View style={styles.fieldCont}>
            <Text style={styles.label}>Phone Number</Text>
            <Pressable style={styles.optContContry}>
              {/* <Image source={ghanaFlag} /> */}
              {/* <Text style={styles.flagText}>+233</Text> */}
              {/* <TextInput placeholder="" /> */}
              {/* <Image source={eyeImg} /> */}

              <CountryCode />

              <View></View>
            </Pressable>
          </View>
        )}
        <View style={styles.fieldCont}>
          <Text style={styles.label}>Password</Text>
          <Pressable style={styles.optCont}>
            <TextInput
              placeholder="Enter Password"
              value={password}
              onChangeText={setPassword}
              style={{ width: win.width / 1.5, color: "#FFFFFF" }}
              // secureTextEntry={true}
              placeholderTextColor="#FF6366"
            />
            {/* <Image source={eyeImg} /> */}
            <AntDesign name="eye" size={win.width / 18} color="#F9DAE4" />
          </Pressable>
        </View>

        <View style={styles.BtnCont}>
          <Pressable style={styles.Btn} onPress={() => handleLogin()}>
            <Text style={styles.BtnText}>Log in</Text>
          </Pressable>
        </View>

        <View style={styles.textWrap}>
          {/* <CheckBox
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
                        onPress={() => { }}
                    /> */}
          <Pressable onPress={() => navigation.navigate("forgotpassword")}>
            <Text style={styles.textLink}>Forgot password?</Text>
          </Pressable>
        </View>
        {loading && <ActivityIndicator size="large" color="#fff" />}
      </View>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        style={{ backgroundColor: "crimson", marginBottom: win.height / 20 }}
      >
        {displayMsg}
      </Snackbar>
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
  optCont2: {
    backgroundColor: "#F9DAE4",
    height: win.height / 15,
    width: win.width / 1.2,

    alignItems: "center",
    marginVertical: win.height / 90,
    borderRadius: win.width / 40,
    flexDirection: "row",
    paddingHorizontal: win.width / 50,
  },
  optText: {
    color: "#FE3F47",
    marginLeft: 15,
  },
  text: {
    color: "#F9DAE4",
    textAlign: "center",
  },
  textLink: {
    color: "#F9DAE4",
    marginLeft: 10,
    textAlign: "center",
  },
  textWrap: {
    flexDirection: "row",
    marginVertical: win.height / 40,
    // textAlign: "center"
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#F9DAE4",
  },
  BtnCont: {
    marginTop: win.height / 30,
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
  toggleWrap: {
    flexDirection: "row",
    marginVertical: win.height / 30,
    height: win.height / 15,
  },
  toggleOne: {
    // backgroundColor: "#FE3F47",
    height: win.height / 15,
    justifyContent: "center",
    paddingHorizontal: win.width / 40,
    borderRadius: 10,
  },
  toggleOneActive: {
    backgroundColor: "#FE3F47",
    height: win.height / 15,
    justifyContent: "center",
    paddingHorizontal: win.width / 40,
    borderRadius: 10,
  },
  toggleTwo: {
    // backgroundColor: "#FE3F47",
    height: win.height / 15,
    justifyContent: "center",
    paddingHorizontal: win.width / 40,
    borderRadius: 10,
  },
  toggleTwoActive: {
    backgroundColor: "#FE3F47",
    height: win.height / 15,
    justifyContent: "center",
    paddingHorizontal: win.width / 40,
    borderRadius: 10,
  },
  toogleText: {
    color: "#F9DAE4",
  },
  optContContry: {
    backgroundColor: "#FF6366",
    height: win.height / 15,
    width: win.width / 1.2,
    // justifyContent: "space-between",
    alignItems: "center",
    marginVertical: win.height / 150,
    borderRadius: win.width / 40,
    flexDirection: "row",
    paddingHorizontal: win.width / 50,
  },
  flagText: {
    color: "#fff",
    marginLeft: 5,
  },
});

export default LoginMoni;
