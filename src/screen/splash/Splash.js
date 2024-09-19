import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AppImages } from '../../common/AppImages';
import { Colors } from '../../common/Colors';
import { responsiveHeight, responsiveWidth } from '../../common/metrices';
import { mystyle } from '../../common/mystyles';


const Splash = () => {
    return (
        <View style={[mystyle.center, styles.container]}>
           <Image source={AppImages.logo} resizeMode='contain' style={styles.logo}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    logo: {
        height:responsiveHeight(200),
        width:responsiveWidth(200)
    }
});

export default Splash;
