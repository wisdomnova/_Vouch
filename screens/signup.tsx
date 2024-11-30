import React from 'react';
import {Text,View, Image,SafeAreaView,TextInput,KeyboardAvoidingView,TouchableOpacity,Platform,TouchableWithoutFeedback,Keyboard} from 'react-native';
import SplashStyle from '@/styles/splash';
import { Link } from 'expo-router';

const SignUp = () =>{
    return(
        <SafeAreaView style={SplashStyle.SplashSafeView}>

        <View style={SplashStyle.SplashView}>

          <View style={SplashStyle.SplashImageCov}>
            <Image style={SplashStyle.SplashImage} source={require('../assets/vouch/vouch.png')}/>
          </View>

          <View style={SplashStyle.SplashTextCov}>
            <Text style={SplashStyle.SplashTextCovCap}>Create an account</Text>
            <Text style={SplashStyle.SplashTextCovScap}>Fill in your detail to create an account</Text>
          </View>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={SplashStyle.SplashKeyboard}>

                <View style={SplashStyle.SplashLeftCol}>
                    <Text style={SplashStyle.SplashLeftColScap}>Mobile Number</Text>
                    <TextInput style={SplashStyle.SplashLeftColInp} placeholder='+234 (XXX XXX XXXX)' placeholderTextColor='#7b7b7b'/>
                </View>


                <TouchableOpacity style={SplashStyle.SplashTouchable}>
                <Link style={SplashStyle.SplashTouchableLink} href={'/otp'}>Continue</Link>
                </TouchableOpacity>

                <Link style={SplashStyle.SplashLink} href={'/'}> Already have an account? Sign In</Link>

            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>


        </View>

      </SafeAreaView>
    )
}
export default React.memo(SignUp);