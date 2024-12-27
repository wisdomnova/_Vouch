import React from "react";
import { Text, TextInput, View, StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import HomeStyle from "@/styles/home";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";

const Home = () => {
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
                <Text style={HomeStyle.HomeViewTopFlexCap}>Hi, John Doe</Text>
              </View>
              <View style={HomeStyle.HomeViewTopFlexR}>
                <Entypo name="bell" size={21} color="#363636" />
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
                      John Doe
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
