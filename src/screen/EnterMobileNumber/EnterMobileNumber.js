import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput } from 'react-native';
import { responsiveHeight, responsiveWidth } from '../../common/metrices';
import { AppImages } from '../../common/AppImages';
import { Colors } from '../../common/Colors';
import CommonButton from '../../component/CommonButton/CommonButton';
import ScreenHeader from '../../component/ScreenHeader/ScreenHeader';

const EnterMobileNumber = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section1}>
                <Image source={AppImages.logo} resizeMode='contain' style={styles.logo} />
            </View>
            <View style={styles.section2}>
                <ScreenHeader
                    headText={'Welcome'}
                    bodyText={'Please Enter your mobile number to proceed'}
                />
                <View style={styles.textInputContainer}>
                    <View style={styles.InputNumber}><Text style={{
                        color: 'black'
                    }}>{'+91'}</Text></View>
                    <TextInput
                        placeholder='Enter mobile number'
                        style={styles.textINputstyle}
                        keyboardType='numeric'
                        placeholderTextColor={'grey'}
                    />
                </View>


                <View style={{ marginTop: responsiveHeight(20) }}>
                    <CommonButton
                        buttonText={'Submit'}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    section1: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    section2: {
        flex: 1,
        backgroundColor: 'white',
    },
    logo: {
        height: responsiveHeight(300),
        width: responsiveWidth(300)
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginHorizontal: responsiveWidth(16),
        borderRadius: 12,
        marginTop:responsiveHeight(20)
    },
    textINputstyle: {
        flex: 1,
        paddingHorizontal: responsiveWidth(10)
    },
    InputNumber: {
        borderRightWidth: 1,
        paddingHorizontal: responsiveWidth(5)
    }
});

export default EnterMobileNumber;
