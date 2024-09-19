//import libraries
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// create a component
const CreateProfile = () => {
    const [text, setText] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
                mode="outlined"   // Corrected from 'type' to 'mode'
                style={styles.input}  // Added style for input
                keyboardType="email-address"  // Optional: to show email-specific keyboard
            />
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,  // Optional: Padding to avoid input touching edges
    },
    input: {
        marginBottom: 16,  // Optional: Add margin below input
    },
});

//make this component available to the app
export default CreateProfile;
