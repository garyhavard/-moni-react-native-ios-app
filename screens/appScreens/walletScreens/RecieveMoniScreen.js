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

import qrImg from "./../../../assets/images/qrImg.png";
import qrImgDark from "./../../../assets/images/qrImgDark.png";
import labelImage from "./../../../assets/images/label.png";
import GroupImage from "./../../../assets/images/Group.png";
import ShareImage from "./../../../assets/images/Share.png";
import { useSelector, useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const win = Dimensions.get("window");
function RecieveMoniScreen({ navigation }) {
  const theme = useSelector((state) => state.theme.value);
  const [activeTab, setActiveTab] = useState("copy");

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
            color={theme === "dark" ? "#FFF" : "black"}
          />
        </Pressable>
        <Text style={theme === "dark" ? styles.heading : styles.headingDark}>
          Recieve Moni
        </Text>
        <View style={styles.empty}></View>
      </View>
      <View style={styles.imgWrap}>
        <Image
          source={theme === "dark" ? qrImg : qrImgDark}
          style={styles.imgStyle}
        />
      </View>
      <View style={styles.optWrap}>
        <Pressable
          style={styles.optWrapInner}
          onPress={() => setActiveTab("copy")}
        >
          <View
            style={
              activeTab === "copy" ? styles.imageWrapActive : styles.imageWrap
            }
          >
            <View>
              <Feather
                name="copy"
                size={win.width / 14}
                color={activeTab === "copy" ? "#fff" : "#FE3F47"}
              />
            </View>
          </View>
          <Text style={theme === "dark" ? styles.optText : styles.optTextDark}>
            Copy
          </Text>
        </Pressable>
        <Pressable
          style={styles.optWrapInner}
          onPress={() => setActiveTab("setamount")}
        >
          <View
            style={
              activeTab === "setamount"
                ? styles.imageWrapActive
                : styles.imageWrap
            }
          >
            <View>
              <MaterialIcons
                name="label-outline"
                size={win.width / 14}
                color={activeTab === "setamount" ? "#fff" : "#FE3F47"}
              />
            </View>
          </View>
          <Text style={theme === "dark" ? styles.optText : styles.optTextDark}>
            Set Amount
          </Text>
        </Pressable>
        <Pressable
          style={styles.optWrapInner}
          onPress={() => setActiveTab("share")}
        >
          <View
            style={
              activeTab === "share" ? styles.imageWrapActive : styles.imageWrap
            }
          >
            <View>
              <Entypo
                name="share"
                size={win.width / 14}
                color={activeTab === "share" ? "#fff" : "#FE3F47"}
              />
            </View>
          </View>
          <Text style={theme === "dark" ? styles.optText : styles.optTextDark}>
            Share
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ////////////////////////////
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
  ///////////////////////////////////

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

  //////////////////////
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
  //////////////////////////

  imgWrap: {
    height: win.width / 1.1,
    width: win.width,
    marginTop: win.height / 25,
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    height: win.width / 1.2,
    width: win.width / 1.4,
    resizeMode: "stretch",
  },

  optWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: win.width / 10,
    marginTop: win.height / 20,
  },

  ////////////////////////
  imageWrap: {
    backgroundColor: "#F9DAE4",
    height: win.width / 6,
    width: win.width / 6,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapActive: {
    backgroundColor: "#FE3F47",
    height: win.width / 6,
    width: win.width / 6,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  //////////////////////////

  /////////////////
  optText: {
    textAlign: "center",
    fontSize: win.width / 35,
    fontWeight: "bold",
    marginTop: win.height / 100,
  },
  optTextDark: {
    textAlign: "center",
    fontSize: win.width / 35,
    fontWeight: "bold",
    marginTop: win.height / 100,
    color: "#fff",
  },
  ///////////////////////
});

export default RecieveMoniScreen;
