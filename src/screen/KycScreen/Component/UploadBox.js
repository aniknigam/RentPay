//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../common/metrices';
import Colors from '../../../common/Colors';
import { AppImages } from '../../../common/AppImages';

// create a component
const UploadBox = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.boxNameText}>{props.BoxText}</Text>
            <TouchableOpacity onPress={props.onPress}> 
                <Image source={AppImages.upload} resizeMode='contain' style={styles.image} />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(50),
        marginHorizontal: responsiveWidth(16),
        backgroundColor: Colors.white,
        elevation: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(15)
    },
    boxNameText: {
        fontSize: responsiveFontSize(16),
        fontWeight: '600',
        color: Colors.black
    },
    image: {
        height: responsiveHeight(30),
        width: responsiveWidth(30)
    }
});

//make this component available to the app
export default UploadBox;
