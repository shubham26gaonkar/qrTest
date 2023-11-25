import { View, Text } from 'react-native'
import React,{useEffect} from 'react'

const Splash_2 = ({navigation}) =>  {
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('Home')
        }, 3000); // Delay for 3 seconds
      }, []);
    
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
}

export default Splash_2