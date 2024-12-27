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
import DateTimePicker from "@react-native-community/datetimepicker";
// import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNuber, setPhoneNumber] = useState("");
  const [passcode, setPasscode] = useState("");
  const [bvn, setBvn] = useState("");
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [error, setError] = useState("");

    // const navigation = useNavigation();

  const handleDateChange = (event: any, date?: Date) => {
    const currentDate = date || dob;
    setShowDatePicker(Platform.OS === "ios");
    setDob(currentDate);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };
  const formatDate = (date: string | number | Date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSignUp = async () => {
    console.log(email, firstName, lastName, phoneNuber, passcode, bvn, dob);

    if (
      !email ||
      !firstName ||
      !lastName ||
      !phoneNuber ||
      !passcode ||
      !bvn ||
      !dob
    ) {
      console.log("Please Fill all input");

      setError("Please Fill all input");
      return;
    }

    try {
      const response = await fetch(
        "https://vouch-backend.onrender.com/api/v1/users/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone_number: phoneNuber,
            email,
            passcode,
            first_name: firstName,
            last_name: lastName,
            bvn_number: bvn,
            date_of_birth: formatDate(dob),
          }),
        }
      );

      const responseData = await response.json();
      console.log("data",responseData);
      console.log("submitted");

      if (response.ok) {
        // navigation.navigate("Home" as never);
    
        
        // Alert.alert("Success", "Account created successfully!");
      } else {
        // Extract the error message for `phone_number` if it exists
        const phoneNumberError =
          responseData.phone_number && responseData.phone_number[0];
         const emailError =
           responseData.email && responseData.email[0];
        const errorMessage =
          phoneNumberError || emailError ||
          responseData.error ||
          "Something went wrong. Please try again.";
        setError(errorMessage);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to create an account. Please check your connection.");
      // Alert.alert(
      //   "Error",
      //   "Failed to create an account. Please check your connection."
      // );
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
              <View style={SplashStyle.SplashLeftCol}>
                <Text style={SplashStyle.SplashLeftColScap}>Date of Birth</Text>
                <TouchableOpacity onPress={showDatePickerModal}>
                  <TextInput
                    style={SplashStyle.SplashLeftColInp}
                    placeholder="YYYY-MM-DD"
                    placeholderTextColor="#7b7b7b"
                    value={dob.toISOString().split("T")[0]}
                    editable={false}
                  />
                </TouchableOpacity>
                {showDatePicker && (
                  <DateTimePicker
                    value={dob}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                  />
                )}
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
