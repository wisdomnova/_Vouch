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
  ScrollView,
} from "react-native";
import SplashStyle from "@/styles/splash";
import { Link } from "expo-router";
// import axios from "axios"; // Import axios for API calls

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNuber, setPhoneNumber] = useState("");
  const [passcode, setPasscode] = useState("");
  const [bvn, setBvn] = useState("");
  const [error, setError] = useState("");
  // const [email, setEmail] = useState("");
  // const [email, setEmail] = useState("");
  // const [error, setError] = useState("");

  // Function to handle API call
  const handleSignUp = async () => {
    if (!email) {
      setError("Please Fill all input");
      // Alert.alert("Error", "Please enter a valid mobile number");
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
          body: JSON.stringify({ phone_number: email }),
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
            <ScrollView>
              <View style={SplashStyle.SplashLeftCol}>
                <Text style={SplashStyle.SplashLeftColScap}>First Name </Text>
                <TextInput
                  style={SplashStyle.SplashLeftColInp}
                  placeholder="John"
                  placeholderTextColor="#7b7b7b"
                  value={firstName}
                  onChangeText={(text) => setFirstName(text)}
                />
              </View>

              <View style={SplashStyle.SplashLeftCol}>
                <Text style={SplashStyle.SplashLeftColScap}>Last Name</Text>
                <TextInput
                  style={SplashStyle.SplashLeftColInp}
                  placeholder="Doe"
                  placeholderTextColor="#7b7b7b"
                  value={lastName}
                  onChangeText={(text) => setLastName(text)}
                />
              </View>
              <View style={SplashStyle.SplashLeftCol}>
                <Text style={SplashStyle.SplashLeftColScap}>Email</Text>
                <TextInput
                  style={SplashStyle.SplashLeftColInp}
                  placeholder="john@example.com"
                  placeholderTextColor="#7b7b7b"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={SplashStyle.SplashLeftCol}>
                <Text style={SplashStyle.SplashLeftColScap}>Phone Number</Text>
                <TextInput
                  style={SplashStyle.SplashLeftColInp}
                  placeholder="+9999999999"
                  placeholderTextColor="#7b7b7b"
                  value={phoneNuber}
                  onChangeText={(text) => setPhoneNumber(text)}
                />
              </View>
              <View style={SplashStyle.SplashLeftCol}>
                <Text style={SplashStyle.SplashLeftColScap}>BVN</Text>
                <TextInput
                  style={SplashStyle.SplashLeftColInp}
                  placeholder="bvn"
                  placeholderTextColor="#7b7b7b"
                  value={bvn}
                  onChangeText={(text) => setBvn(text)}
                />
              </View>
              <View style={SplashStyle.SplashLeftCol}>
                <Text style={SplashStyle.SplashLeftColScap}>Passcode</Text>
                <TextInput
                  style={SplashStyle.SplashLeftColInp}
                  placeholder="passcode"
                  placeholderTextColor="#7b7b7b"
                  value={passcode}
                  onChangeText={(text) => setPasscode(text)}
                />
              </View>
            </ScrollView>
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
