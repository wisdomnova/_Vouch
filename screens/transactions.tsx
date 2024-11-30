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

                <View style={SplashStyle.SplashTopLeftView}>
                    <Link href={'/home'}>
                        <Entypo name="chevron-left" size={35} color="black" />
                    </Link>
                </View>

                <View style={SplashStyle.SplashHistory20}></View>
                <View style={SplashStyle.SplashTextCov}>
                    <Text style={SplashStyle.SplashTextCovCap}>Transactions History</Text>
                </View>

                <View style={SplashStyle.SplashHistoryOvflw}>

                    <Link href={'/transactions'}>
                        <View style={SplashStyle.SplashHistoryCard}>
                            <View style={SplashStyle.SplashHistoryCardLt}> 
                                <View style={SplashStyle.SplashHistoryCardIco}>
                                    <AntDesign name="swap" size={25} color="white" />
                                </View>
                                <View style={SplashStyle.SplashHistoryCardCol}>
                                    <Text style={SplashStyle.SplashHistoryCardColCap}>John Doe</Text>
                                    <Text style={SplashStyle.SplashHistoryCardColSCap}>5/11/2024 10:57AM</Text>
                                </View>
                            </View>
                            <View style={SplashStyle.SplashHistoryCardRt}>
                                <Text style={SplashStyle.SplashHistoryCardRtCap_G}>+ $2000</Text>
                                <Text style={SplashStyle.SplashHistoryCardRtSCap}>Added</Text>
                            </View>
                        </View>
                    </Link>

                    <Link href={'/transactions'}>
                        <View style={SplashStyle.SplashHistoryCard}>
                            <View style={SplashStyle.SplashHistoryCardLt}> 
                                <View style={SplashStyle.SplashHistoryCardIco}>
                                    <AntDesign name="swap" size={25} color="white" />
                                </View>
                                <View style={SplashStyle.SplashHistoryCardCol}>
                                    <Text style={SplashStyle.SplashHistoryCardColCap}>Anna Doe</Text>
                                    <Text style={SplashStyle.SplashHistoryCardColSCap}>6/10/2024 7:20AM</Text>
                                </View>
                            </View>
                            <View style={SplashStyle.SplashHistoryCardRt}>
                                <Text style={SplashStyle.SplashHistoryCardRtCap_R}>- $300</Text>
                                <Text style={SplashStyle.SplashHistoryCardRtSCap}>Withdrawn</Text>
                            </View>
                        </View>
                    </Link>

                    <Link href={'/transactions'}>
                        <View style={SplashStyle.SplashHistoryCard}>
                            <View style={SplashStyle.SplashHistoryCardLt}> 
                                <View style={SplashStyle.SplashHistoryCardIco}>
                                    <AntDesign name="swap" size={25} color="white" />
                                </View>
                                <View style={SplashStyle.SplashHistoryCardCol}>
                                    <Text style={SplashStyle.SplashHistoryCardColCap}>Micheal Doe</Text>
                                    <Text style={SplashStyle.SplashHistoryCardColSCap}>3/08/2024 11:07PM</Text>
                                </View>
                            </View>
                            <View style={SplashStyle.SplashHistoryCardRt}>
                                <Text style={SplashStyle.SplashHistoryCardRtCap_G}>+ $100</Text>
                                <Text style={SplashStyle.SplashHistoryCardRtSCap}>Added</Text>
                            </View>
                        </View>
                    </Link>

                </View>
            </View>
    
        </SafeAreaView>
    );
}
export default React.memo(Topay);