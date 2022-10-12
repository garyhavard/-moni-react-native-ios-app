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
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

const win = Dimensions.get("window");
function BackupWalletScreen({ navigation }) {
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
          Backup your wallet
        </Text>
        <View style={styles.empty}></View>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>
          Your secret recovery pharse is used to recover your crypto if you lose
          your phone or switch to a diffrent wallet
        </Text>
        <Text style={styles.text}>
          Save these 12 words in a secure location, such as a password manager,
          & never share them with anyone.
        </Text>
      </View>
      <View style={theme === "dark" ? styles.card2 : styles.card2Dark}>
        <Text style={theme === "dark" ? styles.text2 : styles.text2Dark}>
          come album issue abandome only artwork diesel elephent job rebel match
          offer
        </Text>
      </View>
      <View style={styles.btn1}>
        <Text style={styles.btn1text}>Back up on Google Drive</Text>
      </View>
      <View style={styles.btn2}>
        <Text style={styles.btn2text}>Back up manually</Text>
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
  ///////////////////////////

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

  /////////////////////
  card2: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#fff",
    marginHorizontal: win.width / 25,
    borderRadius: 10,
    borderColor: "lightgrey",
    padding: win.width / 30,
    marginVertical: win.height / 30,
  },
  card2Dark: {
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#2C2B30",
    marginHorizontal: win.width / 25,
    borderRadius: 10,
    borderColor: "lightgrey",
    padding: win.width / 30,
    marginVertical: win.height / 30,
  },
  ////////////////////////////

  text: {
    color: "#FFF",
    fontSize: win.width / 28,
  },

  ////////////////////////////
  text2: {
    color: "#FE3F47",
    fontSize: win.width / 28,
  },
  text2Dark: {
    color: "#FFF",
    fontSize: win.width / 28,
  },
  //////////////////////////

  btn1: {
    backgroundColor: "#FE3F47",
    // height: win.height / 15,
    // width: win.width / 1.2,
    marginHorizontal: win.width / 5,
    borderRadius: win.width / 40,
    alignItems: "center",
    justifyContent: "center",
  },

  btn1text: {
    color: "#FFF",
    padding: win.width / 20,
    fontSize: win.width / 26,
  },

  btn2: {
    backgroundColor: "#F9DAE4",
    // height: win.height / 15,
    // width: win.width / 1.2,
    marginHorizontal: win.width / 5,
    borderRadius: win.width / 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: win.height / 25,
  },
  btn2text: {
    color: "#FE3F47",
    padding: win.width / 20,
    fontSize: win.width / 25,
  },
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

  //////////////////////////////
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
});

export default BackupWalletScreen;
