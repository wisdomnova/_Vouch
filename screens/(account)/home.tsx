import React from 'react';
import { Text,TextInput,View,StatusBar} from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import HomeStyle from "@/styles/home";
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from 'expo-router';

const Home = () => {
    return(
        <>
            <SafeAreaProvider>
                <SafeAreaView style={HomeStyle.HomeSafeView}>
                <StatusBar animated={true} backgroundColor={'#163832'} barStyle={'dark-content'} showHideTransition={'fade'} hidden={false} />
                    <View style={HomeStyle.HomeView}>
                        <View style={HomeStyle.HomeViewTopFlex}>
                            <View style={HomeStyle.HomeViewTopFlexL}>
                                <Text style={HomeStyle.HomeViewTopFlexCap}>Good Day, John</Text>
                            </View>
                            <View style={HomeStyle.HomeViewTopFlexR}>
                                <Link href={'/topay'}>
                                    <Entypo name="circle-with-plus" size={30} color="white"/>
                                </Link>
                                <Entypo name="bell" size={30} color="white"/>
                            </View>
                        </View>
                        <View style={HomeStyle.HomeViewFlex}>



                            <View style={HomeStyle.HomeViewCard}>
                                <View style={HomeStyle.HomeViewCardData}>
                                    <View style={HomeStyle.HomeViewCardData_}>
                                        <Text style={HomeStyle.HomeViewCardData_SCap}>Eligible Amount</Text>
                                        <Text style={HomeStyle.HomeViewCardData_Cap}>$35,000.50</Text>
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
                            


                        </View> 
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    )
}
export default React.memo(Home);