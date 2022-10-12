import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Switch,
} from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

import Rectangle from "./../../../assets/images/Rectangle.png";
import { Feather } from "@expo/vector-icons";
import currency1 from "./../../../assets/images/curreny1.png";
import currency2 from "./../../../assets/images/curreny2.png";
import WalletImg from "./../../../assets/images/Wallet-amico.png";
import wallet1 from "./../../../assets/images/wallet1.png";
import wallet2 from "./../../../assets/images/wallet2.png";
import wallet3 from "./../../../assets/images/wallet3.png";
import wallet4 from "./../../../assets/images/wallet4.png";
import wallet5 from "./../../../assets/images/wallet5.png";
import wallet6 from "./../../../assets/images/wallet6.png";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "./../../../redux/slice/themeSlice";

const DATA = [
  {
    id: 1,
    amount: "₵10,000",
    type: "BTC",
    quantity: "0.000046",
    value: "₵163,874.13",
    img: wallet5,
  },
  {
    id: 2,
    amount: "₵2,000",
    type: "ETH",
    quantity: " 0.001",
    value: "₵9,610",
    img: wallet6,
  },
  {
    id: 3,
    amount: "₵2,000",
    type: "GDC",
    quantity: "2,000",
    value: "1 ETH",
    img: wallet1,
  },
  {
    id: 4,
    amount: "₵2,000",
    type: "MONI",
    quantity: "500",
    value: "₵2",
    img: wallet2,
  },
  {
    id: 5,
    amount: "₵0",
    type: "XRP",
    quantity: "0",
    value: "₵2.72",
    img: wallet4,
  },
  {
    id: 6,
    amount: "₵0",
    type: "ADA",
    quantity: "0",
    value: "₵3.85",
    img: wallet3,
  },
];

const win = Dimensions.get("window");
function WalletScreen({ navigation }) {
  const theme = useSelector((state) => state.theme.value);

  const dispatch = useDispatch();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [activeTab, setActiveTab] = useState("assets");

  const renderItem = ({ item }) => (
    <Pressable
      style={!isEnabled ? styles.flatWrap : styles.flatWrapDark}
      onPress={() => navigation.navigate("transaction-screen")}
    >
      <View style={styles.topflatWrap}>
        <Image source={item.img} style={styles.flatImg} />
        <View>
          <Text style={styles.typeStyle}>{item.type}</Text>
          <Text
            style={!isEnabled ? styles.amountStyle : styles.amountStyleDark}
          >
            {item.amount}
          </Text>
        </View>
      </View>
      <View style={styles.topflatWrap}>
        <Text style={styles.quantityStyle}>Quantity</Text>
        <Text
          style={!isEnabled ? styles.quantityStyle2 : styles.quantityStyle2Dark}
        >
          {item.quantity}
        </Text>
      </View>
      <View style={styles.topflatWrap}>
        <Text style={styles.valueStyle}>1 {item.type}</Text>
        <Text style={!isEnabled ? styles.valueStyle2 : styles.valueStyle2Dark}>
          {item.value}
        </Text>
      </View>
    </Pressable>
  );

  const handleTheme = () => {
    if (isEnabled) {
      dispatch(setTheme("light"));
    } else {
      dispatch(setTheme("dark"));
    }
  };
  useEffect(() => {
    handleTheme();
  }, [isEnabled]);
  return (
    <View style={!isEnabled ? styles.container : styles.containerDark}>
      <View style={styles.welcomeWrap}>
        <Text style={!isEnabled ? styles.welcomeText : styles.welcomeTextDark}>
          Welcome
        </Text>
      </View>
      <View style={styles.infoWrap}>
        <Text style={!isEnabled ? styles.userName : styles.userNameDark}>
          kofi Mensah
        </Text>
        <View style={styles.infoInner}>
          <Switch
            trackColor={{ false: "#A7AFB7", true: "#A7AFB7" }}
            thumbColor={isEnabled ? "#FFF" : "#AF0021"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
            value={isEnabled}
          />

          <Feather
            name="settings"
            style={{ marginLeft: win.width / 50 }}
            size={win.width / 15}
            color={!isEnabled ? "black" : "white"}
          />
        </View>
      </View>
      <View style={styles.imageWrap}>
        <Image source={Rectangle} style={styles.rectBackground} />
        <View style={styles.innerWallet}>
          <View>
            <Text style={styles.walletHeading}>Wallet Balance</Text>
            <Text style={styles.walletSubHeading}>
              <Image source={currency1} />
              15,000
            </Text>
            <Text style={styles.walletText}>
              +<Image source={currency2} />
              40
            </Text>
          </View>
          <Image
            source={WalletImg}
            style={{ height: win.width / 2.6, width: win.width / 2.6 }}
          />
        </View>
      </View>
      <View style={!isEnabled ? styles.headingsWrap : styles.headingsWrapDark}>
        <View style={styles.tabWrap}>
          <Pressable onPress={() => setActiveTab("assets")}>
            <Text
              style={!isEnabled ? styles.headingOpt1 : styles.headingOptDark1}
            >
              ASSETS
            </Text>
          </Pressable>
          {activeTab === "assets" && (
            <View
              style={theme === "dark" ? styles.activeLight : styles.activeDark}
            ></View>
          )}
        </View>
        <View style={styles.tabWrap}>
          <Pressable onPress={() => setActiveTab("staking")}>
            <Text
              style={!isEnabled ? styles.headingOpt2 : styles.headingOptDark2}
            >
              STAKING
            </Text>
          </Pressable>
          {activeTab === "staking" && (
            <View
              style={theme === "dark" ? styles.activeLight : styles.activeDark}
            ></View>
          )}
        </View>
        <View style={styles.tabWrap}>
          <Pressable onPress={() => setActiveTab("nft")}>
            <Text
              style={!isEnabled ? styles.headingOpt3 : styles.headingOptDark3}
            >
              NFT’S
            </Text>
          </Pressable>
          {activeTab === "nft" && (
            <View
              style={theme === "dark" ? styles.activeLight : styles.activeDark}
            ></View>
          )}
        </View>
      </View>

      {activeTab === "assets" && (
        <View style={styles.flatlistWrap}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
          />
        </View>
      )}
      {activeTab === "staking" && (
        <View
          style={theme === "dark" ? styles.stakingWrap : styles.stakingWrapDark}
        >
          <Text style={styles.stakingText}>Staking not enabled yet..</Text>
        </View>
      )}
      {activeTab === "nft" && (
        <View style={theme === "dark" ? styles.nftWrap : styles.nftWrapDark}>
          <Text style={styles.nftText}>No NFT's available</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ///////////////////
  container: {
    backgroundColor: "#fff",
    height: win.height + win.height / 19,
    width: win.width,
    flex: 1,
  },
  containerDark: {
    backgroundColor: "#222222",
    height: win.height + win.height / 19,
    width: win.width,
    flex: 1,
  },
  //////////////////
  welcomeWrap: {
    paddingTop: win.height / 20,
    paddingHorizontal: win.width / 35,
  },
  ////////////////
  welcomeText: {
    color: "#181818",
    fontSize: win.width / 25,
  },
  welcomeTextDark: {
    color: "#F9DAE4",
    fontSize: win.width / 25,
  },
  //////////////////

  /////////////////////
  userName: {
    fontSize: win.height / 35,
    fontWeight: "bold",
  },
  userNameDark: {
    fontSize: win.height / 35,
    fontWeight: "bold",
    color: "#fff",
  },
  ////////////////////////
  infoWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: win.width / 35,
    alignItems: "center",
  },
  infoInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  rectBackground: {
    width: "100%",
    // height: "100%",
    position: "absolute",
  },
  imageWrap: {
    marginVertical: win.height / 35,
    marginHorizontal: win.width / 35,
    alignItems: "center",
    // borderRadius: 5,
    // borderWidth: 1,
    height: win.height / 5,
    alignItems: "center",
    justifyContent: "center",
  },
  innerWallet: {
    flexDirection: "row",
    justifyContent: "space-between",

    width: win.width / 1.15,
    height: win.height / 5.3,
    alignItems: "center",
  },
  walletHeading: {
    fontSize: win.width / 18,
    color: "#fff",
  },
  walletSubHeading: {
    color: "#fff",
  },
  walletText: {
    color: "#00BE33",
  },
  ///////////////////////////////
  headingsWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    marginHorizontal: win.width / 10,
    borderBottomColor: "#F9DAE4",
    // paddingBottom: win.height / 200,
  },
  headingsWrapDark: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    marginHorizontal: win.width / 10,
    borderBottomColor: "#BD0029",
    // paddingBottom: win.height / 200
  },
  ////////////////////////////////

  //////////////////////
  headingOpt1: {
    fontWeight: "bold",
    fontSize: win.height / 55,
    paddingBottom: win.height / 200,
  },
  headingOptDark1: {
    fontWeight: "bold",
    fontSize: win.height / 55,
    color: "#fff",
    paddingBottom: win.height / 200,
  },
  headingOpt2: {
    fontWeight: "bold",
    fontSize: win.height / 55,
    paddingBottom: win.height / 200,
  },
  headingOptDark2: {
    fontWeight: "bold",
    fontSize: win.height / 55,
    color: "#fff",
    paddingBottom: win.height / 200,
  },
  headingOpt3: {
    fontWeight: "bold",
    fontSize: win.height / 55,
    paddingBottom: win.height / 200,
  },
  headingOptDark3: {
    fontWeight: "bold",
    fontSize: win.height / 55,
    color: "#fff",
    paddingBottom: win.height / 200,
  },
  //////////////////////////

  /////////////////////
  activeLight: {
    height: 1.5,
    width: win.width / 4,
    backgroundColor: "#AF0021",
    borderRadius: 10,
    marginBottom: -1,
  },
  activeDark: {
    height: 1.5,
    width: win.width / 4,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: -1,
  },
  //////////////////////

  tabWrap: {
    alignItems: "center",

    width: win.width / 4,
  },

  flatImg: {
    width: win.width / 10,
    height: win.width / 10,
  },

  //////////////////////////
  flatWrap: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#fff",

    width: win.width / 2.3,
    borderRadius: 10,
    height: win.height / 7.5,
    marginVertical: win.height / 100,
    justifyContent: "space-evenly",
  },
  flatWrapDark: {
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#2C2B30",

    width: win.width / 2.3,
    borderRadius: 10,
    height: win.height / 7.5,
    marginVertical: win.height / 100,
    justifyContent: "space-evenly",
  },
  ////////////////////////
  topflatWrap: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  flatlistWrap: {
    width: win.width,
    marginTop: win.height / 70,
  },
  typeStyle: {
    fontSize: win.height / 65,
    color: "#777777",
    fontWeight: "bold",
  },

  ////////////////////
  amountStyle: {
    fontSize: win.height / 80,
    color: "#1B1711",
  },
  amountStyleDark: {
    fontSize: win.height / 80,
    color: "#FFF",
  },
  /////////////

  quantityStyle: {
    color: "#777777",
    fontSize: win.height / 60,
  },

  //////////////////////////
  quantityStyle2: {
    color: "#000000",
    fontSize: win.width / 30,
  },
  quantityStyle2Dark: {
    color: "#FFF",
    fontSize: win.width / 30,
  },
  ///////////////////////////////

  valueStyle: {
    color: "#777777",
    fontSize: win.width / 30,
  },

  //////////////////////
  valueStyle2: {
    color: "#000000",
    fontSize: win.width / 30,
  },
  valueStyle2Dark: {
    color: "#FFF",
    fontSize: win.width / 30,
  },
  ///////////////////////

  stakingWrap: {
    backgroundColor: "#F8F8F8",
    marginTop: win.height / 6,
    height: win.height / 6,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: win.width / 8,
  },
  stakingWrapDark: {
    backgroundColor: "#2C2B30",
    marginTop: win.height / 6,
    height: win.height / 6,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: win.width / 8,
  },

  stakingText: {
    fontSize: win.height / 40,
    fontWeight: "bold",
    color: "#B70024",
  },

  nftWrap: {
    backgroundColor: "#F8F8F8",
    marginTop: win.height / 6,
    height: win.height / 6,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: win.width / 8,
  },
  nftWrapDark: {
    backgroundColor: "#2C2B30",
    marginTop: win.height / 6,
    height: win.height / 6,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: win.width / 8,
  },
  nftText: {
    fontSize: win.height / 40,
    fontWeight: "bold",
    color: "#B70024",
  },
});

export default WalletScreen;
