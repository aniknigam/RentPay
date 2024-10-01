import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Splash from './src/screen/splash/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EnterMobileNumber from './src/screen/EnterMobileNumber/EnterMobileNumber';
import EnterOtpScreen from './src/screen/EnterOtpScreen/EnterOtpScreen';
import CreateProfile from './src/screen/CreateProfile/CreateProfile';
import KycScreen from './src/screen/KycScreen/KycScreen';
import Dashboard from './src/screen/Dashboard/Dashboard';
import AddProperty from './src/screen/AddProperly/AddProperty';
import Contact from './src/screen/Contact/Contact';

function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contact
      " screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="EnterMobileNumber" component={EnterMobileNumber} />
        <Stack.Screen name="EnterOtpScreen" component={EnterOtpScreen} />
        <Stack.Screen name="CreateProfile" component={CreateProfile} />
        {/* <Stack.Screen name="KycScreen" component={KycScreen} />   */}
        {/* <Stack.Screen name="Dashboard" component={Dashboard} />   */}
        {/* <Stack.Screen name="AddProperty" component={AddProperty} />
        {/* <Stack.Screen name="Contact" component={Contact} /> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App