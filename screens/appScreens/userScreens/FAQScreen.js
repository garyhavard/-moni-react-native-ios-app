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
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

const win = Dimensions.get("window");
function FAQScreen({ navigation }) {
  const theme = useSelector((state) => state.theme.value);

  return (
    <View style={theme === "dark" ? styles.container : styles.containerDark}>
      <View style={styles.topSection}>
        <Pressable
          style={styles.arrowWrap}
          onPress={() => navigation.navigate("user-screen")}
        >
          <AntDesign
            name="arrowleft"
            size={win.width / 15}
            color={theme === "dark" ? "#FFF" : "#000"}
          />
        </Pressable>
        <Text style={theme === "dark" ? styles.heading : styles.headingDark}>
          FAQ
        </Text>
        <View style={styles.empty}></View>
      </View>
      <View style={theme === "dark" ? styles.card : styles.cardDark}>
        <Text style={theme === "dark" ? styles.cardText : styles.cardTextDark}>
          What is Moni ?
        </Text>
      </View>
      <View style={theme === "dark" ? styles.card : styles.cardDark}>
        <Text style={theme === "dark" ? styles.cardText : styles.cardTextDark}>
          How to use Moni ?
        </Text>
      </View>
      <View style={theme === "dark" ? styles.card : styles.cardDark}>
        <Text style={theme === "dark" ? styles.cardText : styles.cardTextDark}>
          Is Moni safe for us ?
        </Text>
      </View>
      <View style={theme === "dark" ? styles.card : styles.cardDark}>
        <Text style={theme === "dark" ? styles.cardText : styles.cardTextDark}>
          How to send a money on Moni ?
        </Text>
      </View>
      <View style={theme === "dark" ? styles.card : styles.cardDark}>
        <Text style={theme === "dark" ? styles.cardText : styles.cardTextDark}>
          How to reset account in Moni ?
        </Text>
      </View>
      <View style={theme === "dark" ? styles.card : styles.cardDark}>
        <Text style={theme === "dark" ? styles.cardText : styles.cardTextDark}>
          Is there any tips for to get used to this app ?
        </Text>
      </View>
      <View style={theme === "dark" ? styles.card : styles.cardDark}>
        <Text style={theme === "dark" ? styles.cardText : styles.cardTextDark}>
          Is Moni free to use ?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //////////////////////////////
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
  //////////////////////////

  topSection: {
    flexDirection: "row",
    paddingTop: win.height / 17,
    paddingBottom: win.height / 30,
    justifyContent: "space-between",
    marginHorizontal: win.width / 20,
    alignItems: "center",
    marginBottom: win.height / 30,
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

  /////////////////////////////
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
  /////////////////////////////

  //////////////////////////
  cardText: {
    color: "#FE3F47",
    fontSize: win.width / 30,
  },
  cardTextDark: {
    color: "#FFF",
    fontSize: win.width / 30,
  },
  //////////////////////////////

  ///////////////////////////////
  card: {
    marginVertical: win.height / 100,
    backgroundColor: "#F9DAE4",
    marginHorizontal: win.width / 15,
    borderRadius: 10,
    padding: win.width / 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
  },
  cardDark: {
    marginVertical: win.height / 100,
    backgroundColor: "#2C2B30",
    marginHorizontal: win.width / 15,
    borderRadius: 10,
    padding: win.width / 25,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
  },
  ///////////////////////////////
});

export default FAQScreen;
