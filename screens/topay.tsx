import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  FlatList,
  TouchableHighlight,
} from "react-native";
import SplashStyle from "@/styles/splash";
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import fetchBanks from "./components/fetchAllBanks";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Topay = () => {
  const [banks, setBanks] = useState<{ code: string; name: string }[]>([]);
  const [filteredBanks, setFilteredBanks] = useState<
    { code: string; name: string }[]
  >([]);
  const [selectedBank, setSelectedBank] = useState("");
  const [recipientBank, setRecipientBank] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState<"user" | "recipient">(
    "user"
  );

  
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const getUserToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem("user_token");
      return userToken ? JSON.parse(userToken) : null;
    } catch (error) {
      console.error("Error fetching user token:", error);
      return null;
    }
  };

  // Fetch bank data
  useEffect(() => {
    fetchBanks(setBanks, setFilteredBanks);
    fetchBankLinked()
  }, []);

  const fetchBankLinked = async () => {
    // setLoading(true);
    try {
      const user = await getUserToken();
      
      if (!user) {
        console.error("User token not found");
        return;
      }

      const response = await fetch(
        "https://vouch-backend.onrender.com/api/v1/banks/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,

          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch linked banks: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Linked banks:", data);
    } catch (error) {
      console.error("Error fetching linked banks:", error);
    } finally {
      // setLoading(false);
    }
  };

  // Filter banks based on search text
  const handleSearch = (text: string): void => {
    setSearchText(text);
    if (text === "") {
      setFilteredBanks(banks);
    } else {
      const filtered = banks.filter((bank) =>
        bank.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredBanks(filtered);
    }
  };

  const openDropdown = (type: "user" | "recipient") => {
    setCurrentDropdown(type);
    setSearchText("");
    setFilteredBanks(banks);
    setIsModalVisible(true);
  };

  const selectBank = (bankCode: string) => {
    if (currentDropdown === "user") {
      setSelectedBank(bankCode);
    } else {
      setRecipientBank(bankCode);
    }
    setIsModalVisible(false);
  };

  const handleSubmit = () => {
    console.log("Selected Bank:", selectedBank);
    console.log("Recipient Bank:", recipientBank);
    console.log("Account Number:", accountNumber);
    console.log("Amount:", amount);
  };

  return (
    <SafeAreaView style={SplashStyle.SplashSafeView}>
      <View style={SplashStyle.SplashView}>
        <View style={SplashStyle.SplashTopLeftView}>
          <Link href={"/home"}>
            <Entypo name="chevron-left" size={35} color="black" />
          </Link>
        </View>

        <View style={SplashStyle.SplashImageCov}>
          <Image
            style={SplashStyle.SplashImage}
            source={require("../assets/vouch/vouch.png")}
          />
        </View>

        <View style={SplashStyle.SplashTextCov}>
          <Text style={SplashStyle.SplashTextCovCap}>Vouch To Pay</Text>
          <Text style={SplashStyle.SplashTextCovScap}>
            Fill in the details to initiate payment
          </Text>
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={SplashStyle.SplashKeyboard}
          >
            {/* User Bank Dropdown */}
            <View style={SplashStyle.SplashLeftCol}>
              <Text style={SplashStyle.SplashLeftColScap}>
                Select Your Bank
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  borderWidth: 2,
                  borderColor: "#ddd",
                  borderRadius: 5,
                  width: "100%",
                }}
                onPress={() => openDropdown("user")}
              >
                <Text style={{ color: "#7b7b7b" }}>
                  {selectedBank
                    ? banks.find((bank) => bank.code === selectedBank)?.name ||
                      "Select Bank"
                    : "Select Bank"}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Recipient Bank Dropdown */}
            <View style={SplashStyle.SplashLeftCol}>
              <Text style={SplashStyle.SplashLeftColScap}>Recipient Bank</Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  borderWidth: 2,
                  borderColor: "#ddd",
                  borderRadius: 5,
                  width: "100%",
                }}
                onPress={() => openDropdown("recipient")}
              >
                <Text style={{ color: "#7b7b7b" }}>
                  {recipientBank
                    ? banks.find((bank) => bank.code === recipientBank)?.name ||
                      "Select Bank"
                    : "Select Bank"}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Other Input Fields */}
            <View style={SplashStyle.SplashLeftCol}>
              <Text style={SplashStyle.SplashLeftColScap}>
                Recipient Account Number
              </Text>
              <TextInput
                style={SplashStyle.SplashLeftColInp}
                placeholder="0023456767"
                placeholderTextColor="#7b7b7b"
                value={accountNumber}
                onChangeText={setAccountNumber}
              />
            </View>

            <View style={SplashStyle.SplashLeftCol}>
              <Text style={SplashStyle.SplashLeftColScap}>
                Amount Requested
              </Text>
              <TextInput
                style={SplashStyle.SplashLeftColInp}
                placeholder="#90000"
                placeholderTextColor="#7b7b7b"
                value={amount}
                onChangeText={setAmount}
              />
            </View>

            <TouchableOpacity
              style={SplashStyle.SplashTouchable}
              onPress={handleSubmit}
            >
              <Text style={SplashStyle.SplashTouchableLink}>
                Vouch to00 Pay
              </Text>
              {/* <Link style={SplashStyle.SplashTouchableLink} href={"/merchant"}>
                Proceed
              </Link> */}
            </TouchableOpacity>

            {/* Modal for Dropdown */}
            <Modal
              visible={isModalVisible}
              animationType="slide"
              transparent={true}
            >
              <View style={SplashStyle.ModalOverlay}>
                <View style={SplashStyle.ModalContainer}>
                  <TextInput
                    style={SplashStyle.SearchInput}
                    placeholder="Search Bank"
                    value={searchText}
                    onChangeText={handleSearch}
                  />
                  <FlatList
                    data={filteredBanks}
                    keyExtractor={(item) => item.code}
                    renderItem={({ item }) => (
                      <TouchableHighlight
                        underlayColor="#ddd"
                        onPress={() => selectBank(item.code)}
                      >
                        <Text style={SplashStyle.BankItem}>{item.name}</Text>
                      </TouchableHighlight>
                    )}
                  />
                  <TouchableOpacity
                    style={SplashStyle.CloseButton}
                    onPress={() => setIsModalVisible(false)}
                  >
                    <Text>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Topay);
