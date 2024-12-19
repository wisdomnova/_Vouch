import React, { useEffect, useState } from "react";
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
  Alert,
} from "react-native";
import SplashStyle from "@/styles/splash";
import { Link } from "expo-router";
// import axios from "axios"; // Import axios for API calls

const SignUp = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");

  // Function to handle API call
  const handleSignUp = async () => {
    if (!mobileNumber) {
      Alert.alert("Error", "Please enter a valid mobile number");
      return;
    }

    try {
      const response = await fetch(
        "https://vouch-backend.onrender.com/api/v1/users/request_phone_verification/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone_number: mobileNumber }),
        }
      );

      const responseData = await response.json(); // Parse the response JSON
      console.log(responseData);

      if (response.ok) {
        Alert.alert("Success", "Account created successfully!");
      } else {
        const errorMessage =
          responseData.error || "Something went wrong. Please try again."; // Use API-provided message if available
        // Alert.alert("Error", errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Error",
        "Failed to create an account. Please check your connection."
      );
    }
  };

  return (
    <SafeAreaView style={SplashStyle.SplashSafeView}>
      <View style={SplashStyle.SplashView}>
        <View style={SplashStyle.SplashImageCov}>
          <Image
            style={SplashStyle.SplashImage}
            source={require("../assets/vouch/vouch.png")}
          />
        </View>

        <View style={SplashStyle.SplashTextCov}>
          <Text style={SplashStyle.SplashTextCovCap}>Create an account</Text>
          <Text style={SplashStyle.SplashTextCovScap}>
            Fill in your detail to create an account
          </Text>
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={SplashStyle.SplashKeyboard}
          >
            <View style={SplashStyle.SplashLeftCol}>
              <Text style={SplashStyle.SplashLeftColScap}>Mobile Number</Text>
              <TextInput
                style={SplashStyle.SplashLeftColInp}
                placeholder="+234 (XXX XXX XXXX)"
                placeholderTextColor="#7b7b7b"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={(text) => setMobileNumber(text)}
              />
            </View>

            {error ? <Text style={SplashStyle.error}>{error}</Text> : null}

            <TouchableOpacity
              style={SplashStyle.SplashTouchable}
              onPress={handleSignUp}
            >
              <Text style={SplashStyle.SplashTouchableLink}>Continue</Text>
            </TouchableOpacity>

            <Link style={SplashStyle.SplashLink} href={"/"}>
              Already have an account? Sign In
            </Link>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SignUp);
