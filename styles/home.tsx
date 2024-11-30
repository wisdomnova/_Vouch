import React from "react";
import { StyleSheet } from "react-native";
const HomeStyle = StyleSheet.create({
    HomeSafeView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#163832',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    HomeTopLeftView: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingTop: 20,
    },
    HomeView: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#163832',
    },
    HomeViewTopFlex: {
        width: '100%',
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    HomeViewTopFlexL:{
        width: '70%',
        height: '100%',   
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    HomeViewTopFlexR:{
        width: '20%',
        height: '100%',    
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    HomeViewTopFlexCap:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 600
    },
    HomeViewTopFlexRIco: {
        color: '#fff',
        fontSize: 18
    },
    HomeViewFlex: {
        width: '100%',
        height: 'auto',
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#f4f4f4',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 30
    },

    HomeViewCard: {
        width: '85%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderRadius: 10,
    },
    HomeViewCardData: {
        width: '100%',
        height: 100,
        // flex: 1,
        // flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',        
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    HomeViewCardData_: {
        width: '100%',
        height: 'auto',
        flex: 1,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        rowGap: 10,
        paddingLeft: '10%',
    },
    HomeViewCardData__: {
        width: '45%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        rowGap: 10,
        paddingLeft: '5%',
    },
    HomeViewCardData_SCap: {
        fontSize: 17,
        fontWeight: 500,
        color: '#000'
    },
    HomeViewCardData_Cap: {
        fontSize: 25,
        fontWeight: 800,
        color: '#353535'
    },
    HomeViewCardAction: {
        width: '90%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 5,
        borderTopColor: '#e4e4e4',
        borderTopWidth: 1
    },
    HomeViewCardActionLink: {
        width: 'auto',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    HomeViewCardActionCap: {
        fontSize: 14,
        fontWeight: 500,
        color: '#000'
    },
});
export default HomeStyle;