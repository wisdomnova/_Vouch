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
  ActivityIndicator,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import SplashStyle from "@/styles/splash";
import { Link, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import React from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  
  const router = useRouter();

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts and check AsyncStorage for user_id
        await Font.loadAsync(Entypo.font);
        const storedUserId = await AsyncStorage.getItem("user_id");
        if (storedUserId) {
          // Redirect to home if user_id exists
          router.push("/(account)/home");
        }
      } catch (e) {
        router.push("/");
        console.warn("Error during initialization:", e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const handleSignUp = async () => {
    setIsLoading(true);

    if (!email || !pin) {
      setError("Please fill all input fields.");
      setIsLoading(false);
      Alert.alert("Error", "Email and PIN are required.");
      return;
    }

    try {
      const response = await fetch(
        "https://vouch-backend.onrender.com/api/v1/token/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken":
              "RyYNNuHKYbrkizreRp6YKMo0xOYnvpOrUGRK2508gsMis7V47ZRKGnOXdEHCxySi",
          },
          body: JSON.stringify({ login: email, password: pin }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Something went wrong.");
      }

      const responseData = await response.json();
      const userData = jwtDecode<{ user_id: string }>(responseData.access);

      await AsyncStorage.setItem("user_id", userData.user_id);
      router.push("/home");
    } catch (error: any) {
      console.error("Sign-Up Error:", error.message);
      setError(error.message || "Failed to sign in. Please try again.");
      Alert.alert(
        "Error",
        error.message || "Connection issue. Please try again."
      );
    } finally {
      setIsLoading(false);
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
              <Text style={SplashStyle.SplashLeftColScap}>Email</Text>
              <TextInput
                style={SplashStyle.SplashLeftColInp}
                placeholder="user@example.com"
                placeholderTextColor="#7b7b7b"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={SplashStyle.SplashLeftCol}>
              <Text style={SplashStyle.SplashLeftColScap}>Passcode*</Text>
              <TextInput
                style={SplashStyle.SplashLeftColInp}
                placeholder="******"
                placeholderTextColor="#7b7b7b"
                textContentType="password"
                value={pin}
                onChangeText={(text) => setPin(text)}
              />
            </View>
            {error ? <Text style={SplashStyle.error}>{error}</Text> : null}
            {!isLoading ? (
              <TouchableOpacity
                style={SplashStyle.SplashTouchable}
                onPress={handleSignUp}
              >
                <Text style={SplashStyle.SplashTouchableLink}>Sign In</Text>
              </TouchableOpacity>
            ) : (
              <ActivityIndicator size="large" color="#6200ea" />
            )}

            <Link style={SplashStyle.SplashLink} href={"/signup"}>
              Don't have an account? Sign Up
            </Link>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}
