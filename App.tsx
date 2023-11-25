/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import type {PropsWithChildren} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import SplashScreen from './Screens/Splash';
import Home from './Screens/Home';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Viewcart from './Screens/Viewcart';
import Menu from './Screens/Menu';
import Splash_1 from './Screens/Splash_1';
import Splash from './Screens/Splash';
import QRCodeScanner from './Screens/Scanner'
import Scanner1 from './Screens/Scanner1';
import Splash_2 from './Screens/Splash_2';
import CheckOut from './Screens/CheckOut';
import GenerateBill from './Screens/GenerateBill';
// import CameraWrapper from './Screens/CamWrapper';



type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}



const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return(
    <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#cdddf7', // Set your desired header color
      },
      headerTintColor: '#000', // Set text color for header titles
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25, // Adjust font size if needed
      },
      headerTitle: 'ScanCart',
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen name='SplashScreen' component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='Splash_1' component={Splash_1} options={{headerShown:false}}/>
      <Stack.Screen name = 'Menu' component={Menu} options={{headerShown:false}}/>
      <Stack.Screen name = 'Scanner1' component={Scanner1} options={{headerShown:false}}/>
      <Stack.Screen name='Splash_2' component={Splash_2}/>
      <Stack.Screen name='CheckOut' component={CheckOut} options={{headerShown:false}}/>
      <Stack.Screen name='GenerateBill' component={GenerateBill} options={{headerShown:false}}/>
      {/* <Stack.Screen name = 'CamWrapper' component={CameraWrapper}/> */}
      <Stack.Screen name = 'Viewcart' component={Viewcart}/>
      {/* <Stack.Screen name='QRCodeScanner' component={QRCodeScanner}/> */}
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
