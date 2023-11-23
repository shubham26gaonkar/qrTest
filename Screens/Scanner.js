
// import React from 'react';


// import {
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';


// export default function Scanner(){
  

//  const { hasPermission, requestPermission } = useCameraPermission()
//  React.useEffect(()=>{
//   requestPermission()
//  },[])
//  const device = useCameraDevice('back')

//  const codeScanner = useCodeScanner({
//   codeTypes: ['qr', 'ean-13'],
//   onCodeScanned: (codes:Code[]) => {
//  console.log(`Scanned ${codes[0].value} codes!`)
//   }
// })

//  if (device == null) return (
//   <View>
//     <Text>Device not found</Text>
//   </View>
//  )
//  return (
//    <Camera
//      style={StyleSheet.absoluteFill}
//      device={device}
//      isActive={true}
//      codeScanner={codeScanner}
//    />
//  )
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

