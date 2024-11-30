import React,{ useState }from 'react';
import {Text,View,Image,SafeAreaView,TextInput,KeyboardAvoidingView,TouchableOpacity,Platform,TouchableWithoutFeedback,Keyboard,Button} from 'react-native';
import SplashStyle from '@/styles/splash';
import { Link } from 'expo-router';
import DatePicker from '@react-native-community/datetimepicker';
import {launchImageLibrary, ImageLibraryOptions} from 'react-native-image-picker';

const Details = () => {
    const [_date, setDate] = useState(1732755300000);

    const [avatarSource, setAvatarSource] = useState({});

    async function chooseImage(){
      
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            quality: 1,
        };

        await launchImageLibrary(options, (response) => {

            if (response.didCancel) {

                console.log('User cancelled image picker');

            } else if (response.errorCode) {

                console.log('ImagePicker Error: ', response.errorMessage);

            } else {

                const source = { 
                    uri: response.assets,
                };

                setAvatarSource(source);
            }
        });
    };
    
    return(
        <SafeAreaView style={SplashStyle.SplashSafeView}>
    
            <View style={SplashStyle.SplashView}>
    
            <View style={SplashStyle.SplashImageCov}>
                <Image style={SplashStyle.SplashImage} source={require('../assets/vouch/vouch.png')}/>
            </View>
    
            <View style={SplashStyle.SplashTextCov}>
                <Text style={SplashStyle.SplashTextCovCap}>Personal Details</Text>
                <Text style={SplashStyle.SplashTextCovScap}>As stated on your official ID. We'll need your name to verify your identity</Text>
            </View>
    
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={SplashStyle.SplashKeyboard}>

                    <View style={SplashStyle.SplashLeftCol}>
                        <Button title="Upload Profile Photo" onPress={()=> {chooseImage()}} />
                        {Object.keys(avatarSource).length > 0 && <Image source={avatarSource} style={{ width: 200, height: 200 }} />}
                    </View>
                    <View style={SplashStyle.SplashLeftCol}>
                        <Text style={SplashStyle.SplashLeftColScap}>Legal First Name</Text>
                        <TextInput style={SplashStyle.SplashLeftColInp} placeholder='John' placeholderTextColor='#7b7b7b'/>
                    </View>

                    <View style={SplashStyle.SplashLeftCol}>
                        <Text style={SplashStyle.SplashLeftColScap}>Legal Last Name</Text>
                        <TextInput style={SplashStyle.SplashLeftColInp} placeholder='Doe' placeholderTextColor='#7b7b7b'/>
                    </View>

                    <View style={SplashStyle.SplashLeftCol}>
                        <Text style={SplashStyle.SplashLeftColScap}>Date of Birth</Text>
                        <DatePicker style={SplashStyle.SplashLeftColDate} mode="date" value={new Date} onChange={(_newdate)=>{setDate(_newdate.nativeEvent.timestamp)}} textColor='#c6c6c6' accentColor='#c6c6c6' />
                    </View>
        
        
                    <TouchableOpacity style={SplashStyle.SplashTouchable}>
                        <Link style={SplashStyle.SplashTouchableLink} href={'/account'}>Continue</Link>
                    </TouchableOpacity>
        
        
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
    
            </View>
    
        </SafeAreaView>
    );
}
export default React.memo(Details);