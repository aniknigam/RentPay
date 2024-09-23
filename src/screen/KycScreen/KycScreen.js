import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../common/Colors';
import ScreenHeader from '../../component/ScreenHeader/ScreenHeader';
import { RadioButton, TextInput } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from '../../common/metrices';
import UploadBox from './Component/UploadBox';
import CheckBox from 'react-native-check-box';
import CommonButton from '../../component/CommonButton/CommonButton';

const KycScreen = () => {
    const [aadhar, setAdhar] = useState("");
    const [panNumber, setPanNumber] = useState("");
    const [isChecked, setIsChecked] = useState(false);



    return (
        <SafeAreaView style={styles.container}>
            <ScreenHeader
                headText={'E-KYC Documents'}
            // bodyText={'Please fill all the fields to create an account'}
            />
            <TextInput
                label="Aadhar Number"
                value={aadhar}
                onChangeText={text => setAdhar(text)}
                mode="outlined"
                style={styles.input}
                keyboardType="email-address"
            />
            <TextInput
                label="Pan Number"
                value={aadhar}
                onChangeText={text => setAdhar(text)}
                mode="outlined"
                style={styles.input}
                keyboardType="email-address"
            />
            <UploadBox BoxText={'Upload Aadhar'} />

            <View style={{
                 height:responsiveHeight(50), 
                 backgroundColor: Colors.white,
                //   padding: 10, 
                  marginHorizontal:responsiveWidth(16),
                  borderRadius:5,
                  elevation:5,
                  marginVertical:16,
                  paddingLeft:responsiveWidth(8),
                  paddingRight:responsiveWidth(12)
                  }}>
                <CheckBox
                    style={{ flex: 1, padding: 10 ,}}
                    onClick={() => {
                        setIsChecked(!isChecked);
                    }}
                    isChecked={isChecked}
                    checkBoxColor={Colors.brandColor}
                    leftText={"Have Aggrement ?"}
                    leftTextStyle={{ color: 'black', fontSize: 16, fontWeight: '600' }}
                />
            </View>
            <UploadBox BoxText={'Upload Aggrement'} />

            <View style={{ marginTop: responsiveHeight(40) }}>
                <CommonButton
                    buttonText={'Submit'}
                />
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    input: {
        marginBottom: 16,
        marginHorizontal: responsiveWidth(16)
    },
});

export default KycScreen;
