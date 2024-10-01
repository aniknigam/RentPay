//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Colors from '../../../common/Colors';
import { AppImages } from '../../../common/AppImages';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../common/metrices';

// create a component
const Floor = (props) => {
    return (
        <View style={styles.container}>
            <Image source={AppImages.bed} resizeMode='contain' style={styles.bed} />
            <View style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginLeft: 10,
                flex: 1
            }}>
                <Text style={styles.floorText}>{props.floorNumber}</Text>
                {
                    props.rooms
                        ?
                        <Text style={{ color: 'black' }}>{props.rooms}</Text>
                        :
                        null
                }
                {
                    !props.rooms
                        ?
                        <TouchableHighlight onPress={props.onAddRoomPress}>
                            <Text style={{
                                color: '#553687',
                                fontSize: 14
                            }}>{'Add Rooms'}</Text>
                        </TouchableHighlight>
                        :
                        null
                }
            </View>
            <TouchableOpacity>
                <Text style={styles.cross}>{'✖'}</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        // justifyContent:'space-between',
        alignItems: 'center',
        marginHorizontal: responsiveWidth(7),
        marginVertical: responsiveHeight(10),
        elevation: 2,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10
    },
    bed: {
        width: responsiveWidth(40),
        height: responsiveHeight(40)
    },
    cross: {
        color: Colors.black,
        fontSize: responsiveFontSize(16),
        fontWeight: '600',
        marginLeft: 10
    },
    floorText: {
        color: Colors.black,
        fontSize: responsiveFontSize(16),
        fontWeight: '600',
        // marginLeft: 10
    }
});

//make this component available to the app
export default Floor;
