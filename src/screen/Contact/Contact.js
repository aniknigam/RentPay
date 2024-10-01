import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, PermissionsAndroid, Platform, StyleSheet } from 'react-native';
import Contacts from 'react-native-contacts';
// create a component
const Contact = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        if (Platform.OS === 'android') {
            requestContactsPermission();
        } else {
            loadContacts();
        }
    }, []);

    const requestContactsPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    title: "Contacts Permission",
                    message: "This app needs access to your contacts.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                loadContacts();
            } else {
                console.log("Contacts permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const loadContacts = () => {
        Contacts.getAll()
            .then(contacts => {
                console.log('contacts==>', contacts)
                setContacts(contacts);
            })
            .catch(err => {
                console.log("Error loading contacts: ", err);
            });
    };
 

    console.log(contacts)
    console.log('hello')
    return (
        <View style={{ flex: 1, padding: 20 }}>
          <Button title="Load Contacts" onPress={loadContacts} />
          {/* <FlatList
            data={contacts}
            keyExtractor={(item) => item.recordID}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 18 }}>{item.givenName} {item.familyName}</Text>
                {item.phoneNumbers.map(phone => (
                  <Text key={phone.id}>Phone: {phone.number}</Text>
                ))}
              </View>
            )}
          /> */}
        </View>
      );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Contact;
