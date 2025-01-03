import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons"; // Icons from Expo vector icons library
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native"; // Hook from React Navigation
import { Link } from "expo-router";

interface UserDetails {
  first_name: string;
  last_name: string;
}

const Home = () => {
  const [userDetails, setUserDetails] = React.useState<UserDetails | null>(null);
  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        const storedData = await AsyncStorage.getItem("data");
        const parsedData = storedData ? JSON.parse(storedData) : null;
        setUserDetails(parsedData);
        console.log("Data stored:", parsedData);
      };
      fetchData();

      // Optional cleanup function
      return () => {
        console.log("Settings tab unfocused");
      };
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Settings</Text>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // Replace with a valid profile image URL
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>
            {userDetails ? `${userDetails.first_name} ${userDetails.last_name}` : "Loading..."}
          </Text>
          <TouchableOpacity>
            <Link href="/settingsComponent/EditProfileScreen">
            <Text style={styles.editProfileText}>Edit Profile {">"}</Text>
            
            </Link>
          </TouchableOpacity>
        </View>
      </View>

      {/* Account Settings */}
      <TouchableOpacity style={styles.item}>
        <Ionicons name="person-outline" size={24} color="#555" />
        <Text style={styles.itemText}>Account Settings</Text>
      </TouchableOpacity>

      {/* Preferences Section */}
      <Text style={styles.sectionTitle}>Preferences</Text>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="notifications-outline" size={24} color="#555" />
        <Text style={styles.itemText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="color-palette-outline" size={24} color="#555" />
        <Text style={styles.itemText}>Appearance</Text>
      </TouchableOpacity>

      {/* Resources Section */}
      <Text style={styles.sectionTitle}>Resources</Text>
      <TouchableOpacity style={styles.item}>
        <Feather name="message-circle" size={24} color="#555" />
        <Text style={styles.itemText}>Contact Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="star-outline" size={24} color="#555" />
        <Text style={styles.itemText}>Rate in App Store</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="logo-twitter" size={24} color="#555" />
        <Text style={styles.itemText}>Follow @Vouch</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="server-outline" size={24} color="#555" />
        <Text style={styles.itemText}>Data Sources</Text>
      </TouchableOpacity>

      {/* Sign Out */}
      <TouchableOpacity style={styles.signOutButton}>
        <Ionicons name="exit-outline" size={24} color="#e63946" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Vouch</Text>
        <Text style={styles.versionText}>Version 2.0.3 (571)</Text>
        <TouchableOpacity>
          <Text style={styles.termsText}>Terms & Privacy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  editProfileText: {
    fontSize: 14,
    color: "#007BFF",
    marginTop: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 16,
    marginLeft: 15,
    color: "#555",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#888",
    marginVertical: 10,
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  signOutText: {
    fontSize: 16,
    marginLeft: 15,
    color: "#e63946",
  },
  footer: {
    alignItems: "center",
    marginVertical: 20,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#888",
  },
  versionText: {
    fontSize: 14,
    color: "#bbb",
  },
  termsText: {
    fontSize: 14,
    color: "#007BFF",
    marginTop: 5,
  },
});

export default React.memo(Home);
