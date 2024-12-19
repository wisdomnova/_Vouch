import { useCallback, useEffect, useState } from "react";
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
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import SplashStyle from "@/styles/splash";
import { Link } from "expo-router";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [pin, setPin] = useState("");

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const handleSignUp = async () => {
    if (!mobileNumber || !pin) {
      Alert.alert("Error", "Please enter a valid mobile number");
      return;
    }

    try {
      const response = await fetch("https://your-swagger-endpoint.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile: mobileNumber }),
      });

      if (response.ok) {
        Alert.alert("Success", "Account created successfully!");
      } else {
        Alert.alert("Error", "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Error",
        "Failed to create an account. Please check your connection."
      );
    }
  };

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (appIsReady) {
    return (
      <SafeAreaView
        style={SplashStyle.SplashSafeView}
        onLayout={onLayoutRootView}
      >
        <View style={SplashStyle.SplashView}>
          <View style={SplashStyle.SplashImageCov}>
            <Image
              style={SplashStyle.SplashImage}
              source={require("../assets/vouch/vouch.png")}
            />
          </View>

          <View style={SplashStyle.SplashTextCov}>
            <Text style={SplashStyle.SplashTextCovCap}>Welcome Back!</Text>
            <Text style={SplashStyle.SplashTextCovScap}>
              Fill in your details to Sign in
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

              <View style={SplashStyle.SplashLeftCol}>
                <Text style={SplashStyle.SplashLeftColScap}>PIN*</Text>
                <TextInput
                  style={SplashStyle.SplashLeftColInp}
                  placeholder="******"
                  placeholderTextColor="#7b7b7b"
                  textContentType="password"
                  value={pin}
                  onChangeText={(text) => setPin(text)}
                />
              </View>

              <TouchableOpacity
                style={SplashStyle.SplashTouchable}
                onPress={handleSignUp}
              >
                <Text
                  style={SplashStyle.SplashTouchableLink}
                  // href={"/(account)/home"}
                >
                  {" "}
                  Sign In
                </Text>
              </TouchableOpacity>

              <Link style={SplashStyle.SplashLink} href={"/details"}>
                {" "}
                Don't have an account? Sign Up
              </Link>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
  }
}
