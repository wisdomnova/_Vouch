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

const Topay = () => {
  const [banks, setBanks] = useState<{ code: string; name: string }[]>([]);
  const [filteredBanks, setFilteredBanks] = useState<
    { code: string; name: string }[]
  >([]);
  const [selectedBank, setSelectedBank] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Fetch bank data
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await fetch(
          "https://vouch-backend.onrender.com/api/v1/banks/get_all_nigerian_bank_codes/"
        );
        const data = await response.json();
        const bankList = Object.entries(data).map(([code, name]) => ({
          code,
          name: name as string,
        }));
        setBanks(bankList);
        setFilteredBanks(bankList);
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };
    fetchBanks();
  }, []);

  // Filter banks based on search text
interface Bank {
    code: string;
    name: string;
}

const handleSearch = (text: string): void => {
    setSearchText(text);
    if (text === "") {
        setFilteredBanks(banks);
    } else {
        const filtered = banks.filter((bank: Bank) =>
            bank.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredBanks(filtered);
    }
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
            {/* Searchable Dropdown */}
            <View style={SplashStyle.SplashLeftCol}>
              <Text style={SplashStyle.SplashLeftColScap}>
                Select Your Bank
              </Text>
              <TouchableOpacity
                style={SplashStyle.SplashLeftColInp}
                onPress={() => setIsModalVisible(true)}
              >
                <Text>
                  {selectedBank
                    ? filteredBanks.find((bank) => bank.code === selectedBank)
                        ?.name || "Select Bank"
                    : "Select Bank"}
                </Text>
              </TouchableOpacity>
            </View>

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
                        onPress={() => {
                          setSelectedBank(item.code);
                          setIsModalVisible(false);
                        }}
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

            <View style={SplashStyle.SplashLeftCol}>
              <Text style={SplashStyle.SplashLeftColScap}>
                Recipient Account Number
              </Text>
              <TextInput
                style={SplashStyle.SplashLeftColInp}
                placeholder="0023456767"
                placeholderTextColor="#7b7b7b"
              />
            </View>

            <View style={SplashStyle.SplashLeftCol}>
              <Text style={SplashStyle.SplashLeftColScap}>Recipient Bank</Text>
              <TextInput
                style={SplashStyle.SplashLeftColInp}
                placeholder="Select Bank"
                placeholderTextColor="#7b7b7b"
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
              />
            </View>

            <TouchableOpacity style={SplashStyle.SplashTouchable}>
              <Link style={SplashStyle.SplashTouchableLink} href={"/merchant"}>
                Proceed
              </Link>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Topay);
