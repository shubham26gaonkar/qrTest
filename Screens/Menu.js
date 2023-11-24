import React, { useEffect } from 'react';
import { View, Text, StyleSheet ,Button, TouchableOpacity} from 'react-native';

export default function Menu ({navigation}) {
 

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.title} 
        onPress={()=>{navigation.navigate('QRCodeScanner')}}>
        <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>Add To Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.title} 
        onPress={()=>{navigation.navigate('Viewcart')}}>
        <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>View Cart</Text>
      </TouchableOpacity>

      {/* <Button title="add to cart" onPress={()=>{
        navigation.navigate('ViewCart')
      }}/> */}
      {/* <Button title="View cart"/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bec6f7',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 250,
    backgroundColor: '#0c13cf',
    borderRadius: 10,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#ccc',
  },
});

