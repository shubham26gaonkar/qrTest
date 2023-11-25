import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { items } from './Scanner1'; // Importing items from Scanner1.js

// const CheckOut = () => {

//   const totalPrice = items.reduce((total, item) => total + item.Price, 0);
//   useEffect(() => {
//     console.log(items); // Check if items are properly imported
//   }, []);

//   if (!items || items.length === 0) {
//     return <Text>No items available</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Checkout</Text>
//       {items.map((item) => (
//         <View key={item.id} style={styles.product}>
//           <Text>Product ID: {item.id}</Text>
//           <Text>Name: {item.Product_name}</Text>
//           <Text>Price: ${item.Price}</Text>
//           <View style={styles.separator} />
//         </View>
//       ))}
//       <View style={styles.totalContainer}>
//         <Text style={styles.totalText}>Total: ${totalPrice}</Text>
//         <TouchableOpacity
//           style={styles.generateBillButton}
//           onPress={() => navigation.navigate('GenerateBill')}
//         >
//           <Text style={styles.buttonText}>Generate Bill</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

const CheckOut = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Initialize cartItems with default quantity set to 1
    const defaultItems = items.map(item => ({ ...item, quantity: 1 }));
    setCartItems(defaultItems);
  }, []);

  const updateQuantity = (id, action) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : Math.max(item.quantity - 1, 0),
            }
          : item
      ).filter(item => item.quantity !== 0) // Remove item if quantity reaches 0
    );
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.Price, 0);

  const handleRemoveItem = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <ScrollView style={{backgroundColor: '#cdddf7'}}>

      <View style={styles.container}>
        <Text style={styles.header}>Checkout</Text>
        {cartItems.map(item => (
          <View key={item.id} style={styles.product}>
            <Image style={{width: 90, height: 110, marginRight: 15, marginTop: 15}} source={item.img}/>
            <View>
              <Text style={styles.text}>Product ID: {item.id}</Text>
              <Text style={styles.text}>Name: {item.Product_name}</Text>
              <Text style={styles.text}>Price: ₹{item.Price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrease')}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={{color: '#000', fontSize: 20}}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 'increase')}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{backgroundColor: 'red', width: 70, marginTop: 8, borderRadius: 8, height: 20}} onPress={() => handleRemoveItem(item.id)}>
                <Text style={styles.removeButton}>Remove</Text>
              </TouchableOpacity>
              <View style={styles.separator} />
            </View>
          </View>
        ))}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ₹{totalPrice}</Text>
          <TouchableOpacity
            style={styles.generateBillButton}
            onPress={() => navigation.navigate('GenerateBill', { cartItems })}
          >
            <Text style={styles.buttonText}>Generate Bill</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      
      // justifyContent: 'center',
    },
    header: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    product: {
      flex: 1,
      flexDirection: 'row',
      color: 'black',
      marginBottom: 10,
    },
    text:{
      color: '#000',
      fontSize: 20
    },
    separator: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginVertical: 5,
    },
    totalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      paddingHorizontal: 20,
    },
    totalText: {
      fontSize: 25,
      color: '#000',
      fontWeight: 'bold',
    },
    generateBillButton: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityButton: {
      backgroundColor:'#4c4d4f',
      borderWidth: 1,
      fontSize: 19,
      paddingHorizontal: 8,
      marginHorizontal: 5,
    },
    removeButton: {
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 15,
      marginLeft: 10,
    },
  });
  
  export default CheckOut;