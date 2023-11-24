
import React from 'react';


import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';

const items=[{id: 'PRID1001', Product_name: 'Tomato Ketchup',Price:150}, 
  {id: 2, Product_name: 'Dal',Price:200},
   {id: 3, Product_name: 'Rice',Price:100},
   ]


export default function QRCodeScanner({navigation}){
  

 const { hasPermission, requestPermission } = useCameraPermission()
 React.useEffect(()=>{
  requestPermission()
 },[])
 const device = useCameraDevice('back')

 const codeScanner = useCodeScanner({
  codeTypes: ['qr', 'ean-13'],
  onCodeScanned: (codes:Code[]) => {
 console.log(`Scanned ${codes[0].value} codes!`) 
    
    //  if (matchedItem) {
    //     Alert.alert(`Item found: ${matchedItem.Product_name} - Price: ${matchedItem.Price}`);
    //     navigation.replace('Menu');
    //   } else {
    //     Alert.alert('Item not found');
    //   }
 
  }
})

 if (device == null) return (
  <View>
    <Text>Device not found</Text>
  </View>
 )
 return (
   <Camera
     style={StyleSheet.absoluteFill}
     device={device}
     isActive={true}
     codeScanner={codeScanner}
   />
   
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


// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Camera } from 'react-native-vision-camera';

// const QRCodeScanner = () => {
//   const [scannedData, setScannedData] = useState('');

//   useEffect(() => {
//     const startScanning = async () => {
//       try {
//         await Camera.requestCameraPermissions(); // Request camera permissions

//         // Start the camera
//         await Camera.startCapture();

//         // Listen for QR code updates
//         const subscription = Camera.observeCodeScanning().subscribe((event) => {
//           if (event.codeType === 'org.iso.QRCode') {
//             setScannedData(event.codeStringValue);
//           }
//         });

//         return () => {
//           subscription.unsubscribe(); // Cleanup: unsubscribe when component unmounts
//           Camera.stopCapture(); // Stop the camera when unmounting
//         };
//       } catch (error) {
//         console.error('Error starting camera: ', error);
//       }
//     };

//     startScanning();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} /> {/* Display camera feed */}
//       <View style={styles.overlay}>
//         <Text style={styles.scannedDataText}>Scanned QR Code: {scannedData}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//   },
//   overlay: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: 10,
//     borderRadius: 10,
//   },
//   scannedDataText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default QRCodeScanner;
