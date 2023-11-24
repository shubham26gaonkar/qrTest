import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore'

export default function  Viewcart({navigation}) {
   useEffect(()=>{
    getDatabase()
   }, [])

   const getDatabase= async()=>{
    try{
        const data=await firestore()
        .collection('Products')
        .doc('aFvqReBTpeEOIxkvMOgA')
        .get();

        console.log(data.__data)
    }
    catch (err){
        console.log(err)
    }
   }

  return (
    <View style={styles.container}>
      <Text> Items</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#ccc',
  },
});

