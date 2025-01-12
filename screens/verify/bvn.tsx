import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BvnVerificationScreen = () => {
  const [bvn, setBvn] = useState("");
  const [error, setError] = useState("");

  const [accessToken, setAccessToken] = useState<string | null>("");
  const [refreshToken, setRefreshToken] = useState("");

  async function getToken() {
    const token = await AsyncStorage.getItem("user_token");
    if (token) {
      // console.log(token);

      const parsedToken = JSON.parse(token);
      console.log("on modal", parsedToken.refresh);
      setAccessToken(parsedToken.token);
      //   setRefreshToken(parsedToken.refresh);
    } else {
      console.error("Token is null");
    }
  }
  getToken();
  const handleVerify = async () => {
    if (!bvn) {
      setError("Please Enter Bvn");
    }
    if (bvn.length !== 11) {
      setError("BVN must be 11 digits");
      return;
    }

    try {
      console.log("try", accessToken);

      const response = await fetch(
        "https://vouch-backend.onrender.com/api/v1/account/perform_kyc/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ bvn: bvn }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);

        console.log("BVN verified successfully");
      } else {
        const error = await response.json();

        console.log("dddd", error);
      }
    } catch (error) {
      console.log("cccc", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BVN Verification</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your BVN"
        keyboardType="numeric"
        value={bvn}
        onChangeText={setBvn}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Verify" onPress={handleVerify} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  error: {
    color: "red",
    marginBottom: 16,
    textAlign: "center",
  },
});

export default BvnVerificationScreen;
