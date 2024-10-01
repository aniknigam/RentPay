//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../common/metrices';
import { Colors } from '../../common/Colors';

// create a component
const CommonButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={8}>
            <View style={[
                styles.container,
                {
                    backgroundColor: props.backgroundColor ? props.backgroundColor : '#553687',
                    elevation: props.elevation ? props.elevation : 0
                }]}>
                <Text style={[styles.buttonTextStyle, { color: props.color ? props.color : 'white' }]}>{props.buttonText}</Text>
                
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(50),
        marginHorizontal: responsiveWidth(16),
        backgroundColor: '#553687',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical:responsiveHeight(16)
    },
    buttonTextStyle: {
        fontSize: responsiveFontSize(18),
        fontWeight: '600',
        color: 'white'
    }
});

//make this component available to the app
export default CommonButton;
