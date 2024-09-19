//import liraries
import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../common/metrices';
import OTPTextView from 'react-native-otp-textinput';
import Colors from '../../common/Colors';
import ScreenHeader from '../../component/ScreenHeader/ScreenHeader';
import CommonButton from '../../component/CommonButton/CommonButton';

// create a component
const EnterOtpScreen = () => {

    let otpInput = useRef(null);
    return (
        <SafeAreaView style={styles.container}>
            <ScreenHeader
                headText={'OTP Verification'}
                bodyText={`OTP (One Time Password) has been sent to this number 6392856900`}
            />

            <View style={styles.numberContainer}>
                <Text style={styles.numberStyle}>{'6392856900'}</Text>
                <TouchableOpacity>
                    <View style={styles.changeButton}>
                        <Text style={styles.buttonText}>{'Change'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.Ocontainer}>
                <OTPTextView
                    ref={otpInput}
                    // handleTextChange={handleTextChange}
                    inputCount={4}
                    containerStyle={styles.otpContainer}
                    textInputStyle={styles.otpInput}
                    inputCellLength={1}
                    tintColor={Colors.brandColor}
                    offTintColor={'grey'}
                />
            </View>
            <View style={{ marginTop: responsiveHeight(20) }}>
                <CommonButton
                    buttonText={'Submit'}
                />
            </View>

            <View style={{justifyContent:'center',alignItems:'center',marginTop:responsiveHeight(20)}}>
                <TouchableOpacity>
                    <View style={styles.resendOtpStyle}>
                        <Text style={styles.buttonText}>{'Resend Otp'}</Text>
                    </View>
                </TouchableOpacity> 
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: Colors.white,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    otpInput: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'grey',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        height: responsiveHeight(46),
        width: responsiveWidth(45),
        paddingVertical: 0, // Remove vertical padding
        paddingHorizontal: 0, // Remove horizontal padding,
        borderBottomWidth: 1
    },
    Ocontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: responsiveHeight(20),
    },
    changeButton: {
        height: responsiveHeight(30),
        width: responsiveWidth(80),
        backgroundColor: Colors.brandColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    buttonText: {
        color: Colors.white,
        fontWeight: '600'
    },
    numberStyle: {
        color: Colors.black,
        fontWeight: '600',
        fontSize: responsiveFontSize(14)
    },
    numberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor:'red',
        marginHorizontal: responsiveWidth(60),

    },
    resendOtpStyle:{
        height: responsiveHeight(30),
        width: responsiveWidth(140),
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    }
});

//make this component available to the app
export default EnterOtpScreen;
