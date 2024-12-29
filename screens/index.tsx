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
import { useNavigation } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

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
    setIsLoading(true);
    console.log({ login: email, password: pin });

    if (!email || !pin) {
      setError("Please fill all input fields.");
      setIsLoading(false)
      Alert.alert("Error", "Email and PIN are required.");
      return;
    }

    try {
      const response = await fetch(
        "https://vouch-backend.onrender.com/api/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ login: email, password: pin }),
        }
      );

      const contentType = response.headers.get("Content-Type");
      let responseData;

      // if (contentType && contentType.includes("application/json")) {
      //   responseData = await response.json();
      // } else {
      //   responseData = await response.text(); // Fallback for non-JSON responses
      //   throw new Error(`Unexpected response: ${responseData}`);
      // }

      if (!response.ok) {
        console.log(response);
      }

      console.log("Sign-Up Success:", responseData);

      router.push("/home");
      // navigation.navigate("home" as never);
    } catch (error: any) {
      console.error("Sign-Up Error:", error.message);
      setError(
        error.message || "Failed to create an account. Please try again."
      );
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
                <Text style={SplashStyle.SplashLeftColScap}>Email</Text>
                <TextInput
                  style={SplashStyle.SplashLeftColInp}
                  placeholder="user@example.com"
                  placeholderTextColor="#7b7b7b"
                  // keyboardType="text"
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
                  <Text
                    style={SplashStyle.SplashTouchableLink}
                    // href={"/(account)/home"}
                  >
                    {" "}
                    Sign In
                  </Text>
                </TouchableOpacity>
              ) : (
                <ActivityIndicator size="large" color="#6200ea" />
              )}

              <Link style={SplashStyle.SplashLink} href={"/signup"}>
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
