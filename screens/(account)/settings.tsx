import React from "react";
import { Text,TextInput,View,SafeAreaView } from "react-native";
import HomeStyle from "@/styles/home";
const Home = () => {
    return(
        <SafeAreaView style={HomeStyle.HomeSafeView}>
            <View style={HomeStyle.HomeView}>
                <Text></Text>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Home);