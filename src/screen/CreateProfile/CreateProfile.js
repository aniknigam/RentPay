//import libraries
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../../component/ScreenHeader/ScreenHeader';
import { responsiveHeight, responsiveWidth } from '../../common/metrices';
import Colors from '../../common/Colors';
import CommonButton from '../../component/CommonButton/CommonButton';
import { AppImages } from '../../common/AppImages';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
const CreateProfile = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);



    const [checked, setChecked] = React.useState('first');

    return (
        <SafeAreaView style={styles.container}>
            <ScreenHeader
                headText={'Create Profile'}
                bodyText={'Please fill all the fields to create an account'}
            />
            <TextInput
                label="First Name"
                value={name}
                onChangeText={text => setName(text)}
                mode="outlined"
                style={styles.input}
            />
            <TextInput
                label="Last Name"
                value={lastName}
                onChangeText={text => setLastName(text)}
                mode="outlined"
                style={styles.input}
            />
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                mode="outlined"
                style={styles.input}
                keyboardType="email-address"
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                mode="outlined"
                style={styles.input}
                secureTextEntry={!showPassword}
                right={
                    <TextInput.Icon
                    icon={showPassword ? "eye-off" : "eye"}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
            />
            <TextInput
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={text => setEmail(text)}
                mode="outlined"
                style={styles.input}
            />

            <View style={styles.radioContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <Text style={{ color: checked === 'first' ? Colors.brandColor : 'black' }}>
                        Tenant
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: responsiveWidth(20) }}>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                    <Text style={{ color: checked === 'second' ? Colors.brandColor : 'black' }}>
                        Owner
                    </Text>
                </View>
            </View>

            <View style={{ marginTop: responsiveHeight(20) }}>
                <CommonButton
                    buttonText={'Submit'}
                />
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // padding: 16,  
    },
    input: {
        marginBottom: 16,
        marginHorizontal: responsiveWidth(16)
    },
    radioContainer: {
        flexDirection: 'row',
        marginHorizontal: responsiveWidth(16)
    },
    passEye:{
        height:responsiveHeight(20),
        width:responsiveWidth(20)
    }
});

//make this component available to the app
export default CreateProfile;
