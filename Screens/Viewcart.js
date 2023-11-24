import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore'

export default function  Viewcart({navigation}) {
   //const [productData,setproductData]=useState(null)
  //const [data, setData] = useState([]);
  //  useEffect( ()=>{
  //   getDatabase();
  //  }, []);
   
  //  const getDatabase= async () =>{
  //   try{
  //       const data=await firestore()
  //        .collection("Products")
  //        .get();
  //       setproductData(data._data)
  //       console.log(data._data)
  //   }
  //   catch (err){
  //       console.log(err)
  //   }
  //  }
//   try {
//     const collectionRef = firestore().collection('Products');

//     // Retrieve multiple records using a query
//     const querySnapshot = await collectionRef.where('property', '==', 'value').get();

//     const fetchedData = [];
//     querySnapshot.forEach((doc) => {
//       fetchedData.push({ id: doc.id, ...doc.data() });
//     });

//     setData(fetchedData);
//   } catch (error) {
//     console.error('Error fetching data: ', error);
//   }
// }
  // useEffect( () => {
  // const fetchData = async () => {
  //   try {
  //     const collectionRef = firestore().collection('Products');

  //     // Retrieve multiple records using a query
  //     const querySnapshot = await collectionRef.where('property', '==', 'value').get();

  //     const fetchedData = [];
  //     querySnapshot.forEach((doc) => {
  //       fetchedData.push({ id: doc.id, ...doc.data() });
  //     });

  //     setData(fetchedData);
  //   } catch (error) {
  //     console.error('Error fetching data: ', error);
  //   }
  // };

  // fetchData();
  // }, []);
  const items=[{id: 1, Product_name: 'Tomato Ketchup',Price:150}, 
  {id: 2, Product_name: 'Dal',Price:200},
   {id: 3, Product_name: 'Rice',Price:100},
   ]
  
  return (
    // <View style={styles.container}>
    //   <Text>Id: {productData ? productData.ID : 'loading...'}</Text>
    //   <Text>Product name : {productData ? productData.Product_name : 'loading...'}</Text>
    //   <Text>Price: {productData ? productData.Price : 'loading...'}</Text>
    //   <Text>Quantity: {productData ? productData.Quantity : 'loading...'}</Text>
    // </View>
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.Product_name}</Text>
            <Text>{item.Price}</Text>
            <Text>{item.Quantity}</Text>
          </View>
        )}
      />
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

