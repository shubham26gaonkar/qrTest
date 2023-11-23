import { View, Text, StyleSheet, Image } from 'react-native'
import React,{useEffect} from 'react'

const Splash_1 = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Menu')
    }, 1000); // Delay for 3 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./verified.png')} style={styles.image} />
      {/* <ActivityIndicator size="large" color="#0000FF" style={styles.loader} /> */}
      {/* <Text style={styles.title}>Welcome to QR Scanner App</Text> */}
      {/* <Text style={styles.message}>...</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image : {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
})
export default Splash_1