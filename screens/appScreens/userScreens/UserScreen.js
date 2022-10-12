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

import V1 from "./../../../assets/images/V1.png";
import V2 from "./../../../assets/images/V2.png";
import V3 from "./../../../assets/images/V3.png";
import V4 from "./../../../assets/images/V4.png";
import V5 from "./../../../assets/images/V5.png";
import V6 from "./../../../assets/images/V6.png";
import V7 from "./../../../assets/images/V7.png";
import { BottomSheet } from "react-native-btr";
import { useSelector, useDispatch } from "react-redux";

const win = Dimensions.get("window");
function UserScreen({ navigation }) {
  const theme = useSelector((state) => state.theme.value);
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  return (
    <View style={theme === "dark" ? styles.container : styles.containerDark}>
      <Text style={theme === "dark" ? styles.heading : styles.headingDark}>
        Profile Settings
      </Text>
      <View style={styles.card}>
        <Text style={styles.text}>Name: Kofi Mensah</Text>
        <Text style={styles.text}>Phone Number: +233 273526191</Text>
        <Text style={styles.text}>Email: Kofi.mensah2299@gmail.com</Text>
        <Text style={styles.text}>Verification Status: Approved</Text>
        <Text style={styles.text}>Member Since: 2020</Text>
      </View>
      <Pressable
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
        onPress={() => navigation.navigate("security-screen")}
      >
        <Image source={V7} style={styles.vImage} />
        <View>
          <Text
            style={theme === "dark" ? styles.bottomText : styles.bottomTextDark}
          >
            Security
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
        onPress={() => navigation.navigate("preference-screen")}
      >
        <Image source={V6} style={styles.vImage} />
        <View>
          <Text
            style={theme === "dark" ? styles.bottomText : styles.bottomTextDark}
          >
            Preference
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
        onPress={() => navigation.navigate("wallet-backup")}
      >
        <Image source={V5} style={styles.vImage} />
        <View>
          <Text
            style={theme === "dark" ? styles.bottomText : styles.bottomTextDark}
          >
            Wallet Backup
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
        onPress={() => navigation.navigate("id-verification")}
      >
        <Image source={V2} style={styles.vImage} />
        <View>
          <Text
            style={theme === "dark" ? styles.bottomText : styles.bottomTextDark}
          >
            ID Verification
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
        onPress={() => navigation.navigate("refer-screen")}
      >
        <Image source={V4} style={styles.vImage} />
        <View>
          <Text
            style={theme === "dark" ? styles.bottomText : styles.bottomTextDark}
          >
            Refer & Earn
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
        onPress={() => navigation.navigate("faq-screen")}
      >
        <Image source={V1} style={styles.vImage} />
        <View>
          <Text
            style={theme === "dark" ? styles.bottomText : styles.bottomTextDark}
          >
            FAQ
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
        onPress={toggleBottomNavigationView}
      >
        <Image source={V3} style={styles.vImage} />
        <Text
          style={theme === "dark" ? styles.bottomText : styles.bottomTextDark}
        >
          Log Out
        </Text>
      </Pressable>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View
          style={theme === "dark" ? styles.bottomView : styles.bottomViewDark}
        >
          <Pressable style={styles.cancelBtnWrap}>
            <Text style={styles.cancelBtn} onPress={toggleBottomNavigationView}>
              Cancel
            </Text>
          </Pressable>
          <Pressable
            style={styles.logBtnWrap}
            onPress={() => navigation.navigate("frontlogin")}
          >
            <Text style={styles.logBtn}>Yes, Logout</Text>
          </Pressable>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  ////////////////////////
  container: {
    backgroundColor: "#FFF",
    height: win.height + win.height / 19,
    width: win.width,
  },
  containerDark: {
    backgroundColor: "#222222",
    height: win.height + win.height / 19,
    width: win.width,
  },

  ///////////////////////

  ////////////////////
  heading: {
    fontWeight: "bold",
    fontSize: win.width / 20,
    textAlign: "center",
    paddingTop: win.height / 16,
  },
  headingDark: {
    fontWeight: "bold",
    fontSize: win.width / 20,
    textAlign: "center",
    paddingTop: win.height / 16,
    color: "#fff",
  },
  ///////////////////

  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#fff",
    backgroundColor: "#FE3F47",
    borderRadius: 10,
    height: win.height / 4,
    justifyContent: "space-evenly",
    paddingHorizontal: win.width / 40,
    marginHorizontal: win.width / 25,
    marginTop: win.height / 40,
    marginBottom: win.height / 80,
  },
  text: {
    color: "#FFF",
    fontSize: win.width / 28,
  },
  vImage: {
    marginHorizontal: win.width / 50,
  },

  /////////////////////////
  bottomCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#fff",

    flexDirection: "row",

    borderRadius: 10,
    alignItems: "center",
    paddingVertical: win.height / 80,
    marginHorizontal: win.width / 25,
    marginVertical: win.height / 120,
  },
  bottomCardDark: {
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#2C2B30",

    flexDirection: "row",

    borderRadius: 10,
    alignItems: "center",
    paddingVertical: win.height / 80,
    marginHorizontal: win.width / 25,
    marginVertical: win.height / 120,
  },

  /////////////////////////////

  ///////////////////////////////
  bottomText: {
    color: "#000000",
    fontSize: win.height / 55,
    fontWeight: "bold",
  },
  bottomTextDark: {
    color: "#FFF",
    fontSize: win.height / 55,
    fontWeight: "bold",
  },
  ////////////////////////////

  /////////////////////////
  bottomView: {
    backgroundColor: "#FFF",
    height: win.height / 7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bottomViewDark: {
    backgroundColor: "#2C2B30",
    height: win.height / 7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  /////////////////////////

  cancelBtn: {
    color: "#A13131",
    textAlign: "center",
    fontSize: win.height / 50,
  },
  logBtn: {
    color: "#F9DAE4",
    textAlign: "center",
    fontSize: win.height / 50,
  },
  cancelBtnWrap: {
    backgroundColor: "#F9DAE4",
    width: win.width / 3.5,
    paddingVertical: win.height / 70,
    borderRadius: 10,
  },
  logBtnWrap: {
    backgroundColor: "#FE3F47",
    width: win.width / 3.5,
    paddingVertical: win.height / 70,
    borderRadius: 10,
  },
});

export default UserScreen;
