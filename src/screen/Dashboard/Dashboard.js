//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Colors from '../../common/Colors';
import { AppImages } from '../../common/AppImages';
import { responsiveHeight, responsiveWidth } from '../../common/metrices';

// create a component
const Dashboard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.addButtonContainer}>
                <Image source={AppImages.add} resizeMode='contain' style={styles.addButton} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    addButton: {
        height: responsiveHeight(40),
        width: responsiveWidth(40),
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    addButtonContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: responsiveWidth(20),
        marginRight: responsiveWidth(20)
    }
});

//make this component available to the app
export default Dashboard;
