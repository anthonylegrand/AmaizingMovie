import { StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';


export default function Home({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function getMovies(){
    try {
     const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=5ea12a06128c8319a07d126d1c56b216');
     const json = await response.json();
     console.log(json)
     let data = []
     let i = 0
     Object.keys(json).map(function(key) {
       if(Array.isArray(json[key]) === true){
         for(name in json[key]){
           data.push([key, name, i])
           i++
         }
       }else {
         data.push([key, json[key], i])
       }
      i++
    });
     console.log(data)
     setData(data);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }


 useEffect(() => {
   getMovies();
 }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={data}
        keyExtractor={(index) => index[2]}
        renderItem={({ item }) => (
          <Text>{item[0]} : {item[1]}</Text>
        )}
      />
        <Text>Home Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
