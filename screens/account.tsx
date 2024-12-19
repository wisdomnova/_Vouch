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
    
            <View style={SplashStyle.SplashTextCov}>
                <Text style={SplashStyle.SplashTextCovCap}>Account Information</Text>
                <Text style={SplashStyle.SplashTextCovScap}>As stated on your official ID. We'll need your BVN and Account Number to verify your Bank account.</Text>
            </View>
    

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={SplashStyle.SplashKeyboard}>

                    <View style={SplashStyle.SplashLeftCol}>
                        <Text style={SplashStyle.SplashLeftColScap}>BVN</Text>
                        <TextInput style={SplashStyle.SplashLeftColInp} placeholder='********' placeholderTextColor='#7b7b7b'/>
                    </View>

                    {/* <View style={SplashStyle.SplashLeftCol}>
                        <Text style={SplashStyle.SplashLeftColScap}>Bank</Text>
                        <TextInput style={SplashStyle.SplashLeftColInp} placeholder='......' placeholderTextColor='#7b7b7b'/>
                    </View> */}
        
        
                    <TouchableOpacity style={SplashStyle.SplashTouchable}>
                        <Link style={SplashStyle.SplashTouchableLink} href={'/password'}>Continue</Link>
                    </TouchableOpacity>
        
        
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
    
            </View>
    
        </SafeAreaView>
    );
}
export default React.memo(Account);