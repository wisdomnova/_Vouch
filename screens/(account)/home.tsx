import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import HomeStyle from "@/styles/home";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import NotificationContainer from "../notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserDetails {
  first_name: string;
  last_name: string;
  // Add other properties as needed
}

const Home = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Get the user ID from storage
        const userId = await AsyncStorage.getItem("user_id");
        console.log("set the id", userId);

        if (!userId) {
          console.error("User ID not found");
          return;
        }

        // Fetch additional user details from your API
        const response = await fetch(
          `https://vouch-backend.onrender.com/api/v1/users/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-CSRFToken":
                "RyYNNuHKYbrkizreRp6YKMo0xOYnvpOrUGRK2508gsMis7V47ZRKGnOXdEHCxySi",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();

        setUserDetails(data);
        await AsyncStorage.setItem("data", JSON.stringify(data));
      } catch (error: any) {
        console.error("Error fetching user details:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading user details...</Text>
      </View>
    );
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={HomeStyle.HomeSafeView}>
          <StatusBar
            animated={true}
            backgroundColor={"#fbfbfb"}
            barStyle={"dark-content"}
            showHideTransition={"fade"}
            hidden={false}
          />
          <View style={HomeStyle.HomeView}>
            <View style={HomeStyle.HomeViewTopFlex}>
              <View style={HomeStyle.HomeViewTopFlexL}>
                <View style={HomeStyle.HomeViewTopFlexImg}></View>
                <Text style={HomeStyle.HomeViewTopFlexCap}>
                  Hi, {userDetails?.first_name + " " + userDetails?.last_name}
                </Text>
              </View>
              <View style={HomeStyle.HomeViewTopFlexR}>
                <Link
                  // style={HomeStyle.HomeViewCardActionLink}
                  href={"/notifications"}
                >
                  <View
                    style={{
                      backgroundColor: "red",
                      width: 20,
                      height: 20,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      5
                    </Text>
                  </View>
                  <Entypo name="bell" size={21} color="#363636" />
                </Link>
              </View>
            </View>
            {/* <View style={HomeStyle.HomeViewTopFlex_Div}></View> */}

            <View style={HomeStyle.HomeViewSubFlex}>
              <View style={HomeStyle.HomeViewSubFlexCol}>
                <Text style={HomeStyle.HomeViewSubFlexCap}>Total Balance</Text>
                <Text style={HomeStyle.HomeViewSubFlexSCap}>₦70,000.00</Text>
              </View>
              <View style={HomeStyle.HomeViewCardAction}>
                <Link
                  style={HomeStyle.HomeViewCardActionLink}
                  href={"/transactions"}
                >
                  <Text style={HomeStyle.HomeViewCardActionCap}>
                    Credit History
                  </Text>
                </Link>
                <Entypo name="chevron-right" size={20} color="black" />
              </View>
            </View>

            <View style={HomeStyle.HomeViewTopFlex_Div}></View>

            <View style={HomeStyle.HomeViewFlex}>
              <View style={HomeStyle.HomeViewDebitCard}>
                <View style={HomeStyle.HomeViewDebitCardRow}>
                  <FontAwesome name="cc-visa" size={30} color="#FFF" />
                  <FontAwesome name="wifi" size={15} color="#FFF" />
                </View>
                <View style={HomeStyle.HomeViewDebitCardCol}>
                  <Text style={HomeStyle.HomeViewDebitCardColCap}>
                    Debit Card
                  </Text>
                  <Text style={HomeStyle.HomeViewDebitCardColSCap}>
                    1234 1234 4567 34567
                  </Text>
                </View>
                <View style={HomeStyle.HomeViewDebitCardRow_Div}></View>
                <View style={HomeStyle.HomeViewDebitCardRow}>
                  <View style={HomeStyle.HomeViewDebitCardRowCol}>
                    <Text style={HomeStyle.HomeViewDebitCardRowCap}>
                      Card Holder Name
                    </Text>
                    <Text style={HomeStyle.HomeViewDebitCardRowSCap}>
                      {userDetails?.first_name + " " + userDetails?.last_name}
                    </Text>
                  </View>
                  <View style={HomeStyle.HomeViewDebitCardRowCol_}>
                    <Text style={HomeStyle.HomeViewDebitCardRowCap}>
                      Exp. Date
                    </Text>
                    <Text style={HomeStyle.HomeViewDebitCardRowSCap}>
                      06/25
                    </Text>
                  </View>
                </View>
              </View>

              {/* <View style={HomeStyle.HomeViewEligBox}>
                <View style={HomeStyle.HomeViewEligBoxCol}>
                  <Text style={HomeStyle.HomeViewEligBoxColCap_G}>
                    Credit Eligibility
                  </Text>
                  <Text style={HomeStyle.HomeViewEligBoxColSCap_G}>
                    ₦50,000
                  </Text>
                </View>
                <View style={HomeStyle.HomeViewEligBoxCol}>
                  <Text style={HomeStyle.HomeViewEligBoxColCap_R}>
                    Outstanding
                  </Text>
                  <Text style={HomeStyle.HomeViewEligBoxColSCap_R}>
                    ₦10,000
                  </Text>
                </View>
              </View> */}

              {/* <View style={HomeStyle.HomeViewEligBox}>
                                <View style={HomeStyle.HomeViewEligBoxCol}>
                                    <Text style={HomeStyle.HomeViewEligBoxColCap_G}>Credit Eligibility</Text>
                                    <Text style={HomeStyle.HomeViewEligBoxColSCap_G}>₦50,000</Text>
                                </View>
                                <View style={HomeStyle.HomeViewEligBoxCol}>
                                    <Text style={HomeStyle.HomeViewEligBoxColCap_R}>Outstanding</Text>
                                    <Text style={HomeStyle.HomeViewEligBoxColSCap_R}>₦10,000</Text>
                                </View>
                            </View> */}

              <Link href={"/topay"} style={HomeStyle.HomeViewToPay}>
                <Text style={HomeStyle.HomeViewToPayText}>Vouch To Pay</Text>
              </Link>
            </View>
            {/* <NotificationContainer/> */}

            {/* <View style={HomeStyle.HomeViewFlex}>
 
                            <View style={HomeStyle.HomeViewCard}>
                                <View style={HomeStyle.HomeViewCardData}>
                                    <View style={HomeStyle.HomeViewCardData_}>
                                        <Text style={HomeStyle.HomeViewCardData_SCap}>Eligible Amount</Text>
                                        <Text style={HomeStyle.HomeViewCardData_Cap}>₦35,000.50</Text>
                                    </View>
                                    <View style={HomeStyle.HomeViewCardData__}>
                                        <Text style={HomeStyle.HomeViewCardData_SCap}>Interest Rate</Text>
                                        <Text style={HomeStyle.HomeViewCardData_Cap}>20%</Text>
                                    </View>
                                </View>
                                <View style={HomeStyle.HomeViewCardAction}>
                                    <Link style={HomeStyle.HomeViewCardActionLink} href={'/transactions'}>
                                        <Text style={HomeStyle.HomeViewCardActionCap}>Transaction History</Text>
                                    </Link>
                                    <Entypo name="chevron-right" size={20} color="black" />
                                </View>
                            </View>

                        </View>  */}
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};
export default React.memo(Home);
