//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../common/metrices';
import { Colors } from '../../common/Colors';

// create a component
const CommonButton = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.buttonTextStyle}>{props.buttonText}</Text>
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(60),
        marginHorizontal: responsiveWidth(16),
        backgroundColor: '#553687',
        borderRadius: 12,
        justifyContent:'center',
        alignItems:'center',
        // marginVertical:responsiveHeight(16)
    },
    buttonTextStyle: {
        fontSize:responsiveFontSize(18),
        fontWeight:'600',
        color:'white'
    }
});

//make this component available to the app
export default CommonButton;
