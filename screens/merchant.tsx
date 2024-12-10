import React from 'react';
import { useState } from 'react';
import {Text,View,Image,SafeAreaView,TextInput,KeyboardAvoidingView,TouchableOpacity,Platform,TouchableWithoutFeedback,Keyboard} from 'react-native';
import SplashStyle from '@/styles/splash';
import { Link } from 'expo-router';

const Account = () => {
    return(
        <SafeAreaView style={SplashStyle.SplashSafeView}>
    
            <View style={SplashStyle.SplashView}>

                <View style={SplashStyle.SplashImageCov}>
                    <Image style={SplashStyle.SplashImage} source={require('../assets/vouch/vouch.png')}/>
                </View>
        
                <View style={SplashStyle.SplashTextMid}>
                    <Text style={SplashStyle.SplashTextCovCap}>Merchant Paid</Text>
                    <Text style={SplashStyle.SplashTextCovScap}>The Merchant has been paid ₦2,000</Text>
                </View>
        
                <View style={SplashStyle.SplashTextFull}>
                    <Image style={SplashStyle.SplashImage} source={require('../assets/vouch/verify.gif')}/>
                </View>

                <TouchableOpacity style={SplashStyle.SplashTouchable}>
                    <Link style={SplashStyle.SplashTouchableLink} href={'/home'}>Done</Link>
                </TouchableOpacity>
            </View>
    
        </SafeAreaView>
    );
}
export default React.memo(Account);