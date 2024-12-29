import SplashStyle from "@/styles/splash";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const NotificationContainer = () => {
  const notifications = [
    {
      name: "John Doe",
      date: "5/11/2024 10:57AM",
      amount: "₦2,000",
      type: "Credit",
      status: "",
      color: "green",
    },
    {
      name: "Anna Doe",
      date: "6/10/2024 7:20AM",
      amount: "₦4,000",
      type: "Loan",
      status: "Cleared",
      color: "green",
    },
    {
      name: "Micheal Doe",
      date: "6/10/2024 7:20AM",
      amount: "-₦7,000",
      type: "Loan",
      status: "Outstanding",
      color: "red",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={SplashStyle.SplashTopLeftView}>
        <Link href={"/home"}>
          <Entypo name="chevron-left" size={35} color="black" />
        </Link>
      </View>
      <Text style={styles.header}>Notifications</Text>

      <ScrollView>
        {notifications.map((notification, index) => (
          <View
            key={index}
            style={[styles.card, { borderLeftColor: notification.color }]}
          >
            <View style={styles.iconContainer}>
              <View
                style={[styles.icon, { backgroundColor: notification.color }]}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{notification.name}</Text>
              <Text style={styles.date}>{notification.date}</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>{notification.amount}</Text>
              <Text style={[styles.status, { color: notification.color }]}>
                {notification.status || notification.type}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    width:"100%",
    flex: 1,
    // backgroundColor: "red",
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 5,
  },
  iconContainer: {
    marginRight: 16,
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: "#888",
  },
  amountContainer: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  status: {
    fontSize: 14,
    marginTop: 4,
  },
});
export default React.memo(NotificationContainer);
// export default NotificationContainer;
