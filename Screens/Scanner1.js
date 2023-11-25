import React,{useState} from 'react';
import { StyleSheet, Text, useColorScheme, View, Alert } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';

export const items = [{ id: 'PRID1001', Product_name: 'Atta', Price: 250, img: require('../Assets/Atta.png')},
{ id: 'PRID1002', Product_name: 'Dal', Price: 200 , img: require('../Assets/Dal.png')},
{ id: 'PRID1003', Product_name: 'Rice', Price: 500 , img: require('../Assets/Rice.png')}];

export default function Scanner1({ navigation }) {
  const { hasPermission, requestPermission } = useCameraPermission();

  React.useEffect(() => {
    requestPermission();
  }, []);

  const device = useCameraDevice('back');

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      const scannedCode = codes[0].value;
      const matchedItem = items.find((item) => item.id === scannedCode);
      if (matchedItem) {
        Alert.alert('Item found',
          `Product found: ${matchedItem.Product_name} - Price: ${matchedItem.Price}`,
          [
            {
              text: 'OK',
              onPress: () => {
                // Add product to cart logic
                console.log('Product added to cart:', matchedItem);
                navigation.pop(); // Use goBack instead of navigate('Menu')
              },
            },
            {
              text: 'Cancel',
              onPress: () => navigation.pop(),
            },
          ],
          { cancelable: false });
      } else {
        Alert.alert('Item not found', 'Product is not found or out of stock.',
          [{ text: 'OK', onPress: () => navigation.pop() }]);
      }
    },
  });

  if (device == null) return <View><Text>Device not found</Text></View>;

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      codeScanner={codeScanner}
    />
  );
}

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
