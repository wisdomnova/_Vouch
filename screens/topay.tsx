import React from 'react';
import { useState } from 'react';
import {Text,View,Image,SafeAreaView,TextInput,KeyboardAvoidingView,TouchableOpacity,Platform,TouchableWithoutFeedback,Keyboard} from 'react-native';
import SplashStyle from '@/styles/splash';
import { Link } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

const Topay = () => {
    return(
        <SafeAreaView style={SplashStyle.SplashSafeView}>
    
            <View style={SplashStyle.SplashView}>
    
            <View style={SplashStyle.SplashTopLeftView}>
                <Link href={'/home'}>
                    <Entypo name="chevron-left" size={35} color="black" />
                </Link>
            </View>

            <View style={SplashStyle.SplashImageCov}>
                <Image style={SplashStyle.SplashImage} source={require('../assets/vouch/vouch.png')}/>
            </View>
    
            <View style={SplashStyle.SplashTextCov}>
                <Text style={SplashStyle.SplashTextCovCap}>Vouch To Pay</Text>
                <Text style={SplashStyle.SplashTextCovScap}>Fill in the details to initiate payment</Text>
            </View>
    

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={SplashStyle.SplashKeyboard}>

                    <View style={SplashStyle.SplashLeftCol}>
                        <Text style={SplashStyle.SplashLeftColScap}>Salary Account Number</Text>
                        <TextInput style={SplashStyle.SplashLeftColInp} placeholder='XXXXXXXXXX' placeholderTextColor='#7b7b7b'/>
                    </View>

                    <View style={SplashStyle.SplashLeftCol}>
                        <Text style={SplashStyle.SplashLeftColScap}>Vouch Token</Text>
                        <TextInput style={SplashStyle.SplashLeftColInp} placeholder='****' placeholderTextColor='#7b7b7b'/>
                    </View>

                    <View style={SplashStyle.SplashLeftCol}>
                        <Text style={SplashStyle.SplashLeftColScap}>Amount</Text>
                        <TextInput style={SplashStyle.SplashLeftColInp} placeholder='__ __' placeholderTextColor='#7b7b7b'/>
                    </View>
        
        
                    <TouchableOpacity style={SplashStyle.SplashTouchable}>
                        <Link style={SplashStyle.SplashTouchableLink} href={'/merchant'}>Proceed</Link>
                    </TouchableOpacity>
        
        
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
    
            </View>
    
        </SafeAreaView>
    );
}
export default React.memo(Topay);