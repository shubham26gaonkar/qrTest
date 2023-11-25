import React, { useEffect } from 'react';
import { View, Text, StyleSheet , Image, ActivityIndicator } from 'react-native';



const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home')
    }, 3000); // Delay for 3 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../Assets/Scan.gif')} style={styles.image} />
      <ActivityIndicator size="large" color="#0000FF" style={styles.loader} />
      {/* <Text style={styles.title}>Welcome to QR Scanner App</Text> */}
      <Text style={styles.message}>Initializing...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8DCFF',
  },
  image : {
    width: '80%',
    height: '80%',
    marginTop: '10%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loader:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  message: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 15
  },
});

export default Splash;
