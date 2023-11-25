import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const Home = ({navigation}) => {
  const [pin, setPin] = useState('');

  const handlePinEntry = (value) => {
    setPin(value);
  };

  const handleVerifyPin = () => {
    if (pin === '12345') {
      // Navigate to another page
      navigation.navigate('Menu');
    } else {
      Alert.alert('Incorrect PIN. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#c2d3ed' }}>
      <Text style={styles.headLine}>Enter PIN</Text>
      <TextInput
        placeholder="Enter 5 Digit PIN.."
        style={{ fontSize: 18, color: '#000000', width: 200, height: 50, borderWidth: 2, borderRadius: 8,  borderColor: '#000000', backgroundColor: '#fff' }}
        keyboardType="numeric"
        secureTextEntry={true}
        onChangeText={(value) => handlePinEntry(value)}
      />
      <TouchableOpacity
        style={styles.textBox}
        onPress={handleVerifyPin}
      >
        <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headLine:{
    fontSize: 40,
    color: '#000000'
  },
  textBox:{
    borderColor: 'black',
    width: 200,
    height: 50,
    backgroundColor: '#532c7a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 15
  }
});
export default Home;
