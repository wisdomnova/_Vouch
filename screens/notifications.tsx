import SplashStyle from "@/styles/splash";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const NotificationContainer = () => {
  const notifications = [
    {
      name: "Transfer Successful",
      date: "5/11/2024 10:57AM",
      content:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis reprehenderit quisquam quibusdam, inventore vitae praesentium dicta eos saepe dolores totam excepturi magnam autem, odit molestias. Maiores in fugiat perferendis dolorem.",
      amount: "₦2,000",
      type: "Credit",
      status: "",
      color: "green",
    },

    {
      name: "Loan Created Successfully",
      date: "6/10/2024 7:20AM",
      content:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis reprehenderit quisquam quibusdam, inventore vitae praesentium dicta eos saepe dolores totam excepturi magnam autem, odit molestias. Maiores in fugiat perferendis dolorem.",
      amount: "₦4,000",
      type: "Loan",
      status: "Cleared",
      color: "green",
    },
    {
      name: "Transfer Successful",
      date: "6/10/2024 7:20AM",
      content:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis reprehenderit quisquam quibusdam, inventore vitae praesentium dicta eos saepe dolores totam excepturi magnam autem, odit molestias. Maiores in fugiat perferendis dolorem.",
      amount: "-₦7,000",
      type: "Loan",
      status: "Outstanding",
      color: "green",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={SplashStyle.SplashTopLeftView}>
        <Link href={"/home"}>
          <Entypo name="chevron-left" size={35} color="black" />
        </Link>
        <Text style={styles.header}>Notifications</Text>
      </View>

      <ScrollView>
        {notifications.map((notification, index) => (
          <View
            key={index}
            style={[styles.card, { borderLeftColor: notification.color }]}
          >
            <View style={styles.iconContainer}>
              <View
                style={[styles.icon, { backgroundColor: notification.colo }]}
              >
                <Entypo name="bell" size={21} color="#363636" />
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{notification.name}</Text>
              <Text style={styles.date}>
                {notification.content.length > 50
                  ? `${notification.content.substring(0, 50)}...`
                  : notification.content}
              </Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>{notification.amount}</Text>
              <Text style={[styles.status, { color: "#888" }]}>
                {notification.date || notification.type}
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
    width: "100%",
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
    borderLeftWidth: 2,
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
