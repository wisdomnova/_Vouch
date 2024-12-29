import React from 'react';
import { useState } from 'react';
import {Text,View,Image,SafeAreaView,TextInput,KeyboardAvoidingView,TouchableOpacity,Platform,TouchableWithoutFeedback,Keyboard} from 'react-native';
import SplashStyle from '@/styles/splash';
import { Link } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const Topay = () => {
    return(
        <SafeAreaView style={SplashStyle.SplashSafeView}>
    
            <View style={SplashStyle.SplashView}>

               

                <View style={SplashStyle.SplashHistory20}></View>
                <View style={SplashStyle.SplashTextCov}>
                    <Text style={SplashStyle.SplashTextCovCap}>Transactions History</Text>
                </View>

                <View style={SplashStyle.SplashHistoryOvflw}>

                    <Link href={'/transactions'}>
                        <View style={SplashStyle.SplashHistoryCard}>
                            <View style={SplashStyle.SplashHistoryCardLt}> 
                                <View style={SplashStyle.SplashHistoryCardIco}>
                                    <AntDesign name="arrowdown" size={25} color="green" />
                                </View>
                                <View style={SplashStyle.SplashHistoryCardCol}>
                                    <Text style={SplashStyle.SplashHistoryCardColCap}>John Doe</Text>
                                    <Text style={SplashStyle.SplashHistoryCardColSCap}>5/11/2024 10:57AM</Text>
                                </View>
                            </View>
                            <View style={SplashStyle.SplashHistoryCardRt}>
                                <Text style={SplashStyle.SplashHistoryCardRtSCap}>Credited</Text>
                                <Text style={SplashStyle.SplashHistoryCardRtCap_G}>₦2,000</Text>
                            </View>
                        </View>
                    </Link>

                    <Link href={'/transactions'}>
                        <View style={SplashStyle.SplashHistoryCard}>
                            <View style={SplashStyle.SplashHistoryCardLt}> 
                                <View style={SplashStyle.SplashHistoryCardIco}>
                                    <AntDesign name="arrowup" size={25} color="red" />
                                </View>
                                <View style={SplashStyle.SplashHistoryCardCol}>
                                    <Text style={SplashStyle.SplashHistoryCardColCap}>Anna Doe</Text>
                                    <Text style={SplashStyle.SplashHistoryCardColSCap}>6/10/2024 7:20AM</Text>
                                </View>
                            </View>
                            <View style={SplashStyle.SplashHistoryCardRt}>
                                <Text style={SplashStyle.SplashHistoryCardRtSCap_R}>Loan</Text>
                                <Text style={SplashStyle.SplashHistoryCardRtCap}>₦4,000</Text>
                                <Text style={SplashStyle.SplashHistoryCardRtSCap_G}>Cleared</Text>
                            </View>
                        </View>
                    </Link>

                    <Link href={'/transactions'}>
                        <View style={SplashStyle.SplashHistoryCard}>
                            <View style={SplashStyle.SplashHistoryCardLt}> 
                                <View style={SplashStyle.SplashHistoryCardIco}>
                                    <AntDesign name="arrowup" size={25} color="red" />
                                </View>
                                <View style={SplashStyle.SplashHistoryCardCol}>
                                    <Text style={SplashStyle.SplashHistoryCardColCap}>Micheal Doe</Text>
                                    <Text style={SplashStyle.SplashHistoryCardColSCap}>6/10/2024 7:20AM</Text>
                                </View>
                            </View>
                            <View style={SplashStyle.SplashHistoryCardRt}>
                                <Text style={SplashStyle.SplashHistoryCardRtSCap_R}>Loan</Text>
                                <Text style={SplashStyle.SplashHistoryCardRtCap}>- ₦7,000</Text>
                                <Text style={SplashStyle.SplashHistoryCardRtSCap_R}>Outstanding</Text>
                            </View>
                        </View>
                    </Link>

                </View>
            </View>
    
        </SafeAreaView>
    );
}
export default React.memo(Topay);