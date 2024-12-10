import React from "react";
import { StyleSheet } from "react-native";
const SplashStyle = StyleSheet.create({
    SplashSafeView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SplashTopLeftView: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingTop: 20,
    },
    SplashView: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    SplashImageCov: {
        width: '100%',
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SplashImage: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
    },
    SplashTextCov: {
        width: '100%',
        height: 'auto',
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        rowGap: 10
    },
    SplashTextMid: {
        width: '100%',
        height: 'auto',
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10
    },
    SplashTextFull: {
        width: '100%',
        height: 'auto',
        flex: 1,
        flexGrow: 1,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10
    },
    SplashTextCovCap: {
        fontWeight: 800,
        fontSize: 30
    },
    SplashTextCovScap: {
        fontWeight: 500,
        fontSize: 15,
        lineHeight: 24,
        color: '#535353',
    },


    SplashKeyboard: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        flexGrow: 1,
        paddingVertical: 20
    },
    SplashLeftCol:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 10,
    },
    SplashLeftColScap: {
        fontSize: 12,
        color: '#163832',
        marginBottom: 5,
        marginLeft: 5,
    },
    SplashLeftColInp: {
        width: '100%',
        height: 50,
        borderWidth: 2,
        borderColor: '#c6c6c6',
        backgroundColor: '#fff',
        fontSize: 14,
        fontWeight: 500,
        color: '#000',
        paddingHorizontal: 20,
        borderRadius: 5
    },
    SplashLeftColDate: {
        width: '100%',
        height: 50,
        marginLeft: -10,
    },

    SplashLeftColLL: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    SplashLeftColSInp:{
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: '#c6c6c6',
        color: '#000',
        backgroundColor: '#fff',
        fontSize: 14,
        fontWeight: 500,
        paddingLeft: 20,
        borderRadius: 5,
        marginHorizontal: 5,
    },

    SplashTouchable: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#163832',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10
        
    },
    SplashTouchableLink: {
        width: '100%',
        paddingVertical: 20,
        color: '#FFF',
        textAlign: 'center',
        fontSize: 15
    },
    SplashLink: {
        marginTop: 10,
        paddingVertical: 20,
        color: '#163832',
        textAlign: 'center',
        fontSize: 14,
        textDecorationLine: 'underline'
    },
    SplashBackLink: {
        paddingVertical: 0,
        color: '#163832',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 500,
        marginLeft: 10,
        textDecorationLine: 'underline'
    },



    SplashHistory20: {
        width: '100%',
        height: 20,
    },
    SplashHistoryOvflw: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        flexGrow: 1,
        overflow: 'scroll',
        marginTop: 20,
        rowGap: 10
    },
    SplashHistoryCard: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#f1f1f1',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 20,
        borderRadius: 10,
    },
    SplashHistoryCardLt: {
        width: '70%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: 15
    },
    SplashHistoryCardIco: {
        width: 50,
        height: 50,
        // backgroundColor: '#163832',
        backgroundColor: '#fbfbfb',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    SplashHistoryCardIco_R: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    SplashHistoryCardIco_G: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },


    SplashHistoryCardRt: {
        width: '30%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        rowGap: 8
    },
    SplashHistoryCardRtCap: {
        fontSize: 15,
        fontWeight: 700,
        color: '#163832',
    },
    SplashHistoryCardRtCap_G: {
        fontSize: 15,
        fontWeight: 800,
        color: 'green',
    },
    SplashHistoryCardRtCap_B: {
        fontSize: 15,
        fontWeight: 800,
        color: 'brown',
    },
    SplashHistoryCardRtCap_R: {
        fontSize: 15,
        fontWeight: 800,
        color: 'red',
    },
    SplashHistoryCardRtSCap: {
        fontSize: 13,
        fontWeight: 600,
        color: '#163832',
    },
    SplashHistoryCardRtSCap_R: {
        fontSize: 13,
        fontWeight: 600,
        color: 'red',
    },
    SplashHistoryCardRtSCap_G: {
        fontSize: 13,
        fontWeight: 600,
        color: 'green',
    },

    SplashHistoryCardCol: {
        width: 'auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        rowGap: 5
    },
    SplashHistoryCardColCap: {
        fontSize: 16,
        fontWeight: 800,
        color: '#163832',
    },
    SplashHistoryCardColSCap: {
        fontSize: 14,
        fontWeight: 500,
        color: '#163832',
    },
    SplashHistoryIcoView: {
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 5
    },



});
export default SplashStyle;