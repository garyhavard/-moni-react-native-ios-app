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

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import wallet2 from "./../../../assets/images/wallet2.png";
import { useSelector, useDispatch } from "react-redux";
import { TextInput } from "react-native";

const win = Dimensions.get("window");
function SendMoniScreen({ navigation }) {
  const theme = useSelector((state) => state.theme.value);
  const [email, setEmail] = useState("");

  return (
    <View style={theme === "dark" ? styles.container : styles.containerDark}>
      <View style={styles.topSection}>
        <Pressable
          style={styles.arrowWrap}
          onPress={() => navigation.navigate("transaction-screen")}
        >
          <AntDesign
            name="arrowleft"
            size={win.width / 15}
            color={theme === "dark" ? "#FFF" : "#000"}
          />
        </Pressable>
        <Text style={theme === "dark" ? styles.heading : styles.headingDark}>
          Send Moni
        </Text>
        <View style={styles.empty}></View>
      </View>
      <View
        style={theme === "dark" ? styles.addressWrap : styles.addressWrapDark}
      >
        <Text
          style={theme === "dark" ? styles.addressText : styles.addressTextDark}
        >
          Recipient Address
        </Text>
        <View style={styles.addressInner}>
          <MaterialCommunityIcons
            name="line-scan"
            size={win.width / 16}
            color="#FE3F47"
          />
          <Text style={styles.addressInnerText}>PASTE</Text>
        </View>
      </View>
      <Text style={theme === "dark" ? styles.OR : styles.ORDark}>-OR-</Text>
      <View style={theme === "dark" ? styles.tagWrap : styles.tagWrapDark}>
        <Text
          style={theme === "dark" ? styles.addressText : styles.addressTextDark}
        >
          Moni.tag
        </Text>
        <View style={styles.addressInner}>
          {/* <Text
            style={
              theme === "dark" ? styles.moniTagText : styles.moniTagTextDark
            }
          >
            username@sign
          </Text> */}
          <TextInput
            placeholder="username@sign"
            textContentType={"emailAddress"}
            value={email}
            onChangeText={setEmail}
            style={
              theme === "dark" ? styles.moniTagText : styles.moniTagTextDark
            }
            placeholderTextColor="grey"
          />
        </View>
      </View>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("transfer-money")}
      >
        <Text style={styles.btnText}>Continue</Text>
      </Pressable>
      <Text
        style={theme === "dark" ? styles.subHeading : styles.subHeadingDark}
      >
        Asset
      </Text>
      <View style={theme === "dark" ? styles.assetWrap : styles.assetWrapDark}>
        <View style={styles.assetInner}>
          <Image source={wallet2} style={styles.currImg} />
          <View style={styles.assetInfo}>
            <Text
              style={
                theme === "dark" ? styles.currHeading : styles.currHeadingDark
              }
            >
              MONI
            </Text>
            <Text style={styles.currAmount}>₵1,000</Text>
          </View>
        </View>
        <View style={styles.addressInner}>
          <Feather
            name="arrow-down-circle"
            size={win.width / 16}
            color="#FE3F47"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //////////////////
  container: {
    backgroundColor: "#FFF",
    height: win.height + win.height / 19,
    width: win.width,
  },
  containerDark: {
    backgroundColor: "#FFF",
    height: win.height + win.height / 19,
    width: win.width,
    backgroundColor: "#222222",
  },
  /////////////////////

  topSection: {
    flexDirection: "row",
    paddingTop: win.height / 17,
    paddingBottom: win.height / 30,
    justifyContent: "space-between",
    marginHorizontal: win.width / 20,
    alignItems: "center",
  },
  arrowWrap: {
    backgroundColor: "#FE3F47",
    width: win.width / 10,
    height: win.width / 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  empty: {
    width: win.width / 15,
  },

  /////////////////////
  heading: {
    fontWeight: "bold",
    fontSize: win.width / 20,
    textAlign: "center",
  },
  headingDark: {
    fontWeight: "bold",
    fontSize: win.width / 20,
    textAlign: "center",
    color: "#fff",
  },
  ///////////////////////

  /////////////////////
  addressWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: win.height / 15,
    marginHorizontal: win.width / 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#fff",
    padding: win.width / 30,
    borderRadius: 10,
    alignItems: "center",
    marginTop: win.height / 30,
  },
  addressWrapDark: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: win.height / 15,
    marginHorizontal: win.width / 20,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#2C2B30",
    padding: win.width / 30,
    borderRadius: 10,
    alignItems: "center",
    marginTop: win.height / 30,
  },
  //////////////////////////

  addressInner: {
    flexDirection: "row",
    alignItems: "center",
  },

  ///////////////
  addressText: {
    fontSize: win.width / 28,
  },
  addressTextDark: {
    fontSize: win.width / 28,
    color: "#fff",
  },
  /////////////////

  addressInnerText: {
    color: "#FE3F47",
    fontSize: win.width / 30,
    marginLeft: win.width / 40,
  },

  ////////////////////////////
  OR: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: win.width / 25,
    marginVertical: win.height / 40,
  },
  ORDark: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: win.width / 25,
    marginVertical: win.height / 40,
    color: "#fff",
  },
  /////////////////////////////

  /////////////////////////////
  tagWrap: {
    flexDirection: "row",
    // justifyContent: "space-between",
    height: win.height / 15,
    marginHorizontal: win.width / 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#fff",
    padding: win.width / 30,
    borderRadius: 10,
    alignItems: "center",
  },
  tagWrapDark: {
    flexDirection: "row",
    // justifyContent: "space-between",
    height: win.height / 15,
    marginHorizontal: win.width / 20,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#2C2B30",
    padding: win.width / 30,
    borderRadius: 10,
    alignItems: "center",
  },
  /////////////////////////////

  /////////////////////////////
  moniTagText: {
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    color: "#FE3F47",
    marginLeft: win.width / 30,
  },
  moniTagTextDark: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#fff",
    color: "lightgray",
    marginLeft: win.width / 30,
  },
  //////////////////////////////

  btnText: {
    color: "#fff",
    fontSize: win.height / 40,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#FE3F47",
    marginHorizontal: win.width / 4,
    borderRadius: 10,
    paddingVertical: win.height / 80,
    marginVertical: win.height / 20,
  },

  ////////////////////////////
  subHeading: {
    textAlign: "center",
    fontSize: win.width / 18,
  },
  subHeadingDark: {
    textAlign: "center",
    fontSize: win.width / 18,
    color: "#fff",
  },
  ///////////////////////////

  /////////////////////////////
  assetWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: win.height / 15,
    marginHorizontal: win.width / 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#F9DAE4",
    padding: win.width / 30,
    borderRadius: 10,
    marginTop: win.height / 30,
    alignItems: "center",
  },
  assetWrapDark: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: win.height / 15,
    marginHorizontal: win.width / 20,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#2C2B30",
    padding: win.width / 30,
    borderRadius: 10,
    marginTop: win.height / 30,
    alignItems: "center",
  },
  //////////////////////////////

  currImg: {
    height: win.height / 24,
    width: win.height / 24,
  },
  assetInner: {
    flexDirection: "row",
    alignItems: "center",
  },

  ///////////////////////////
  currHeading: {
    fontSize: win.width / 30,
    fontWeight: "bold",
  },
  currHeadingDark: {
    fontSize: win.width / 30,
    fontWeight: "bold",
    color: "#fff",
  },
  //////////////////////////

  currAmount: {
    fontSize: win.width / 32,
    color: "#777777",
  },
  assetInfo: {
    marginLeft: win.width / 40,
  },
});

export default SendMoniScreen;
