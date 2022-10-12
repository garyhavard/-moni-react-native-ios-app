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
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { CheckBox } from "react-native-elements";
import splashImg from "./../../assets/images/splashImg.png";
import googleImg from "./../../assets/images/googleImg.png";
import addUserImg from "./../../assets/images/add-userImg.png";
import eyeImg from "./../../assets/images/eye.png";
import ghanaFlag from "./../../assets/images/ghana1.png";
import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import CountryCode from "../../components/CountryCode";
import { Snackbar } from "react-native-paper";

const win = Dimensions.get("window");
function SignupAccount({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const [showPhone, setShowPhone] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [displayMsg, setDisplayMsg] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //   const [showPassword, setShowPassword] = useState(false)

  const handleSignUp = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (emailRegex.test(email)) {
      if (password.length > 6) {
        navigation.navigate("loginMoni");
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
        <Text style={styles.heading}>Create a Personal Account </Text>

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
                placeholder="Enter Email Address "
                value={email}
                onChangeText={setEmail}
                style={{ width: win.width / 1.5, color: "#FFFFFF" }}
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
            {showPassword ? (
              <>
                <TextInput
                  placeholder="Enter Password"
                  value={password}
                  onChangeText={setPassword}
                  style={{ width: win.width / 1.5, color: "#FFFFFF" }}
                  placeholderTextColor="#FF6366"
                  secureTextEntry={false}
                />
                <TouchableOpacity onPress={() => setShowPassword(false)}>
                  <Entypo
                    name="eye-with-line"
                    size={win.width / 18}
                    color="#F9DAE4"
                  />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter Password"
                  style={{ width: win.width / 1.5, color: "#FFFFFF" }}
                  placeholderTextColor="#FF6366"
                  secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => setShowPassword(true)}>
                  <Entypo name="eye" size={win.width / 18} color="#F9DAE4" />
                </TouchableOpacity>
              </>
            )}
          </Pressable>
        </View>
        <View style={styles.fieldCont}>
          <Text style={styles.label}>Confirm Password</Text>
          <Pressable style={styles.optCont}>
            {/* <TextInput
              placeholder="Enter Confirm password "
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
              style={{ width: win.width / 1.5, color: "#FFFFFF" }}
              placeholderTextColor="#FF6366"
            />
            <AntDesign name="eye" size={win.width / 18} color="#F9DAE4" /> */}
            {showPassword ? (
              <>
                <TextInput
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  style={{ width: win.width / 1.5, color: "#FFFFFF" }}
                  placeholderTextColor="#FF6366"
                />
                <TouchableOpacity onPress={() => setShowPassword(false)}>
                  <Entypo
                    name="eye-with-line"
                    size={win.width / 18}
                    color="#F9DAE4"
                  />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TextInput
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  style={{ width: win.width / 1.5, color: "#FFFFFF" }}
                  placeholderTextColor="#FF6366"
                  secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => setShowPassword(true)}>
                  <Entypo name="eye" size={win.width / 18} color="#F9DAE4" />
                </TouchableOpacity>
              </>
            )}
          </Pressable>
        </View>

        <View style={styles.BtnCont}>
          <Pressable style={styles.Btn} onPress={() => handleSignUp()}>
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

  text: {
    color: "#F9DAE4",
  },
  textLink: {
    color: "#FFF",
    marginLeft: 10,
  },
  textWrap: {
    flexDirection: "row",
    marginVertical: win.width / 50,

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
});

export default SignupAccount;
