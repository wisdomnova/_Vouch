import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import fetchBanks from "../fetchAllBanks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashStyle from "@/styles/splash";
import { Link } from "expo-router";

interface AddBankAccountModalProps {
  visible: boolean;
  onClose: () => void;
}

const AddBankAccountModal: React.FC<AddBankAccountModalProps> = ({
  visible,
  onClose,
}) => {
  const [bankCode, setBankCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [banks, setBanks] = useState<{ code: string; name: string }[]>([]);
  const [filteredBanks, setFilteredBanks] = useState<
    { code: string; name: string }[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [accessToken, setAccessToken] = useState<string | null>("");
  const [refreshToken, setRefreshToken] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  async function getToken() {
    const token = await AsyncStorage.getItem("user_token");
    if (token) {
      // console.log(token);

      const parsedToken = JSON.parse(token);
      console.log("on modal", parsedToken.refresh);
      setAccessToken(parsedToken.token);
      setRefreshToken(parsedToken.refresh);
    } else {
      console.error("Token is null");
    }
  }

  getToken();

  useEffect(() => {
    fetchBanks(setBanks, setFilteredBanks);
  }, []);

  const handleBankSelect = (bank: { code: string; name: string }) => {
    setBankCode(bank.code);
    setSearchQuery(bank.code);
    setDropdownVisible(false); // Hide dropdown after selection
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query === "") {
      setFilteredBanks(banks); // Show all banks if query is empty
    } else {
      const filtered = banks.filter((bank) =>
        bank.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBanks(filtered);
    }
  };

  const handleAddAccount = async () => {
    try {
      const response = await fetch(
        "https://vouch-backend.onrender.com/api/v1/banks/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json", // Make sure the server knows we expect JSON
            Authorization: `Bearer ${accessToken}`,
            "X-CSRFToken":
              "eAEriYYZI8FRZA6R0qdGrvUauERT1SQFhIxoxzhn0p0P98AHg0Ysn6k7auA831Uw", // Include CSRF token
          },
          body: JSON.stringify({
            bank_code: bankCode,
            account_no: accountNumber,
            emp_business_id: businessId,
          }),
        }
      );

      console.log("Request Payload:", {
        bank_code: bankCode,
        account_no: accountNumber,
        emp_business_id: businessId,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        alert("Bank added successfully!");
      } else {
        const error = await response.json();
        // console.error("Error adding bank:", error);
        console.log(error);
        setErrorMsg(error.detail);

        // If Token is Invalid
        if (error.detail === "Given token not valid for any token type") {
          setErrorMsg(error.messages[0].message);
          try {
            const response = await fetch(
              "https://vouch-backend.onrender.com/api/v1/token/refresh/",
              {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify({ refresh: refreshToken }),
              }
            );

            if (response.ok) {
              const result = await response.json();
              console.log("Success:", result);
              // alert("Token refreshed");

              await AsyncStorage.setItem(
                "user_token",
                JSON.stringify({
                  token: result.access,
                  refresh: refreshToken,
                })
              );
            } else {
              const error = await response.json();

              console.log(error);
            }
          } catch (error) {
            console.log(error);
          }
        }

        //    alert("Error: " + error);
      }

      console.log(
        JSON.stringify({
          bank_code: bankCode,
          account_no: accountNumber,
          emp_business_id: businessId,
        })
      );

      //   if (response.ok) {
      //     const result = await response.json();
      //     console.log("Bank added successfully:", result);
      //     alert("Bank added successfully!");
      //   } else {
      //     const error = await response.json();
      //     console.error("Error adding bank:", error);
      //     alert(`Error: ${error.message || "Failed to add bank."}`);
      //   }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error. Please try again.");
    } finally {
      // onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add Bank Account</Text>
          {/* Dropdown with Search Filter */}
          <TextInput
            style={styles.input}
            placeholder="Bank code"
            value={searchQuery}
            onChangeText={handleSearch}
            onFocus={() => setDropdownVisible(true)} // Show dropdown when input is focused
          />
          {dropdownVisible && (
            <>
              <Text style={{ fontWeight: "bold" }}>
                Select Bank to get the Bank Code
              </Text>
              <View style={styles.dropdown}>
                <FlatList
                  data={filteredBanks}
                  keyExtractor={(item) => item.code}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      onPress={() => handleBankSelect(item)}
                    >
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </>
          )}
          {/* Display Selected Bank Code */}
          {/* <TextInput
            style={styles.input}
            placeholder="Bank Code"
            value={bankCode}
            onChangeText={setBankCode}
            editable={false} // Prevent manual editing
          /> */}
          {/* Input for Account Number */}
          <TextInput
            style={styles.input}
            placeholder="Account Number"
            value={accountNumber}
            onChangeText={setAccountNumber}
            keyboardType="number-pad"
          />
          {/* Input for Business ID */}
          <TextInput
            style={styles.input}
            placeholder="Business ID"
            value={businessId}
            onChangeText={setBusinessId}
          />
          {errorMsg ? <Text style={SplashStyle.error}>{errorMsg}</Text> : null}{" "}
          {errorMsg ? (
            <TouchableOpacity>
              <Link href={"/verify/bvn"}>
                <Text>Click here to verify {">"}</Text>
              </Link>
            </TouchableOpacity>
          ) : null}
          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddAccount}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  dropdown: {
    maxHeight: 150,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  addButton: {
    flex: 1,
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default AddBankAccountModal;
