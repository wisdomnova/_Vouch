import React, { useState } from "react";
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
  Button,
  Alert,
} from "react-native";
import SplashStyle from "@/styles/splash";
import { Link } from "expo-router";
import DatePicker from "@react-native-community/datetimepicker";
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from "react-native-image-picker";

const Details = () => {
  const [_date, setDate] = useState(1732755300000);
  const [error, setError] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [pwd, setPwd] = useState("");

  const [avatarSource, setAvatarSource] = useState({});

  async function chooseImage() {
    const options: ImageLibraryOptions = {
      mediaType: "photo",
      quality: 1,
    };

    await launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorMessage);
      } else {
        const source = {
          uri: response.assets,
        };

        setAvatarSource(source);
      }
    });
  }

  // Function to handle API call
  const handleSignUp = async () => {
    if (!fName || !lName || !pwd) {
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
            first_name: fName,
            last_name: lName,
            password: pwd,
            email: "email@example.com",
            phone_number: "09009009000",
          }),
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
          <Text style={SplashStyle.SplashTextCovCap}>Personal Details</Text>
          <Text style={SplashStyle.SplashTextCovScap}>
            As stated on your official ID. We'll need your name to verify your
            identity
          </Text>
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={SplashStyle.SplashKeyboard}
          >
            {/* <View style={SplashStyle.SplashLeftCol}>
                        <Button title="Upload Profile Photo" onPress={()=> {chooseImage()}} />
                        {Object.keys(avatarSource).length > 0 && <Image source={avatarSource} style={{ width: 200, height: 200 }} />}
                    </View> */}
            <View style={SplashStyle.SplashLeftCol}>
              <Text style={SplashStyle.SplashLeftColScap}>
                Legal First Name
              </Text>
              <TextInput
                style={SplashStyle.SplashLeftColInp}
                placeholder="John"
                placeholderTextColor="#7b7b7b"
                value={fName}
                onChangeText={(text) => setFname(text)}
              />
            </View>

            <View style={SplashStyle.SplashLeftCol}>
              <Text style={SplashStyle.SplashLeftColScap}>Legal Last Name</Text>
              <TextInput
                style={SplashStyle.SplashLeftColInp}
                placeholder="Doe"
                placeholderTextColor="#7b7b7b"
                value={lName}
                onChangeText={(text) => setLname(text)}
              />
            </View>
            <View style={SplashStyle.SplashLeftCol}>
              <Text style={SplashStyle.SplashLeftColScap}>Phone Number</Text>
              <TextInput
                style={SplashStyle.SplashLeftColInp}
                placeholder="+9999999999"
                placeholderTextColor="#7b7b7b"
                value={lName}
                onChangeText={(text) => setLname(text)}
              />
            </View>
            <View style={SplashStyle.SplashLeftCol}>
              <Text style={SplashStyle.SplashLeftColScap}>Password</Text>
              <TextInput
                style={SplashStyle.SplashLeftColInp}
                placeholder="**********"
                placeholderTextColor="#7b7b7b"
                value={pwd}
                onChangeText={(text) => setPwd(text)}
              />
            </View>
            {error ? <Text style={SplashStyle.error}>{error}</Text> : null}
            {/* <View style={SplashStyle.SplashLeftCol}>
                        <Text style={SplashStyle.SplashLeftColScap}>Date of Birth</Text>
                        <DatePicker style={SplashStyle.SplashLeftColDate} mode="date" value={new Date} onChange={(_newdate)=>{setDate(_newdate.nativeEvent.timestamp)}} textColor='#c6c6c6' accentColor='#c6c6c6' />
                    </View> */}

            <TouchableOpacity
              style={SplashStyle.SplashTouchable}
              onPress={handleSignUp}
            >
              <Text style={SplashStyle.SplashTouchableLink}>Continue</Text>
              <Link style={SplashStyle.SplashTouchableLink} href={"/account"}>
                Continue
              </Link>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(Details);
