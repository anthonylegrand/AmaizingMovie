import { Pressable, Dimensions, StyleSheet, Text, Image, View } from 'react-native';
import { startDetecting } from 'react-native/Libraries/Utilities/PixelRatio';


export default function Login({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.txt}>Bienvenue sur AmazingMovie, grâce auquel vous allez pouvoir regarder les affiches de films et séries avec leur notations.</Text>
        <Pressable onPress={()=>navigation.navigate("Home")}>
            <Text style={styles.conx}>CONNEXION</Text>
        </Pressable>
        <Image style={styles.logo} source={require('./../../assets/amazing.png')} />
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

  logo: {
      display: 'flex',
      position: 'absolute',
      top: '0.5%',
      alignSelf: 'center',
      height: 250,
      width: 250,
  },

  txt: {
      textAlign: 'center',
      position: 'absolute',
      bottom: '58%',
  },

  conx : {
      alignSelf: 'center',
      textAlign: 'center',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderWidth: 2,
      borderColor: "blue",
      borderRadius: 10,
      width: "50%",
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
      

  }

});
