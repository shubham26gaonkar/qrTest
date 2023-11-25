import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { PDFDocument, PDFPage } from 'react-native-pdf-lib'; // Import necessary components

const GenerateBill = ({ route, navigation }) => {
    const { cartItems } = route.params;
  
    const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.Price, 0);
    
    // const downloadPDF = async () => {
    //     const pdf = PDFDocument.create();
    //     const page = PDFPage.create();
        
    //     let yOffset = 700; // Initial offset for content
    
    //     page.drawText('Bill', {
    //       x: 180,
    //       y: 750,
    //       color: '#000000',
    //       fontName: 'Helvetica-Bold',
    //       fontSize: 24,
    //     });
    
    //     cartItems.forEach((item, index) => {
    //       const content = `${index + 1}. ${item.Product_name} - Qty: ${item.quantity} - Price: $${item.Price} - Amount: $${item.quantity * item.Price}`;
    //       page.drawText(content, {
    //         x: 50,
    //         y: yOffset,
    //         fontSize: 12,
    //       });
    //       yOffset -= 20;
    //     });
    
    //     page.drawText(`Total Amount: $${totalAmount}`, {
    //       x: 50,
    //       y: yOffset - 30,
    //       fontSize: 14,
    //       color: '#0000FF',
    //     });
    
    //     pdf.addPages(page);
    
    //     const pdfBytes = await pdf.save();
    //     // Simulate download by logging the PDF bytes
    //     console.log('PDF bytes:', pdfBytes);
    //     // In a real scenario, you would use a library to handle the file download
    //     // For instance, react-native-fs, RNFetchBlob, or any other file download library
    //   };

    return (
      <ScrollView style={{backgroundColor: '#cdddf7'}}>
        <View style={styles.container}>
          <Text style={styles.header}>Invoice</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Sr. No</Text>
            <Text style={styles.headerText}>Item</Text>
            <Text style={styles.headerText}>Qty</Text>
            <Text style={styles.headerText}>Price</Text>
            <Text style={styles.headerText}>Amount</Text>
          </View>
          {cartItems.map((item, index) => (
            <View style={styles.tableRow} key={item.id}>
              <Text style={styles.item}>{index + 1}</Text>
              <Text style={styles.item}>{item.Product_name}</Text>
              <Text style={styles.item}>{item.quantity}</Text>
              <Text style={styles.item}>₹{item.Price}</Text>
              <Text style={styles.item}>₹{item.quantity * item.Price}</Text>
            </View>
          ))}
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total Amount: ₹{totalAmount}</Text>
          </View>
          <TouchableOpacity 
          // onPress={downloadPDF} 
          onPress={()=>{navigation.navigate('Splash_1')}}
          style={styles.downloadButton}>
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 5,
  },
  headerText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18
  },
  item:{
    fontSize: 18,
    color: 'black',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    borderWidth: 1,
    paddingHorizontal: 8,
    marginHorizontal: 5,
  },
  downloadButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  totalText:{
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold'
  }
});

export default GenerateBill;
