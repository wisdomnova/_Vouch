import React from 'react';
import {Text,View,Image,SafeAreaView,TextInput,KeyboardAvoidingView,TouchableOpacity,Platform,TouchableWithoutFeedback,Keyboard} from 'react-native';
import SplashStyle from '@/styles/splash';
import { Link } from 'expo-router';
const code = [0,1,2,3,4,5];

const OTP = () => {
    return(
        <SafeAreaView style={SplashStyle.SplashSafeView}>
    
            <View style={SplashStyle.SplashView}>
    
            <View style={SplashStyle.SplashImageCov}>
                <Image style={SplashStyle.SplashImage} source={require('../assets/vouch/vouch.png')}/>
            </View>
    
            <View style={SplashStyle.SplashTextCov}>
                <Text style={SplashStyle.SplashTextCovCap}>6-Digit Code</Text>
                <Text style={SplashStyle.SplashTextCovScap}>We've sent an SMS with a confirmation code to your phone number linked to your BVN</Text>
            </View>
    

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={SplashStyle.SplashKeyboard}>
        
                    <View style={SplashStyle.SplashLeftCol}>
                        <Link style={SplashStyle.SplashBackLink} href={'/signup'}>Wrong Mobile Number? Change it here</Link>
                    </View>
        
                    <View style={SplashStyle.SplashLeftCol}>
                        <View style={SplashStyle.SplashLeftColLL}>
                            {code.map((item, index) => (
                                <TextInput keyboardType='numeric' style={SplashStyle.SplashLeftColSInp} key={item} maxLength={1}/>
                            ))}
                        </View>
                    </View>
        
        
                    <TouchableOpacity style={SplashStyle.SplashTouchable}>
                    <Link style={SplashStyle.SplashTouchableLink} href={'/details'}>Continue</Link>
                    </TouchableOpacity>
        
        
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
    
            </View>
    
        </SafeAreaView>
    );
}
export default React.memo(OTP);
