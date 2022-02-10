import { TouchableOpacity, Pressable, Dimensions, StyleSheet, Image, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { useState } from 'react';

import GlobalStyles from './../constants/style';
import Storage from './../utils/StorageAPI';

import AuthInput from "./../component/AuthInput"

export default function AuthScreen(props) {
    let {navigation} = props
    const [pseudo, setpseudo] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")
    return (
        <View style={GlobalStyles.STYLES.container}>
            
            <View style={styles.screen}>
                <View style={styles.header}>
                    <TouchableOpacity style={GlobalStyles.STYLES.icon} >
                        <Image 
                            style={GlobalStyles.STYLES.icon_img} 
                            source={require("./../../assets/icons/back.png")}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Log in</Text>
                </View>

                <View style={styles.authwith}>
                    <Text style={GlobalStyles.STYLES.lore}>Log in with of following options.</Text>
                    <View style={styles.authwith_buttons}>
                        <TouchableOpacity activeOpacity={.5} style={[GlobalStyles.STYLES.icon, styles.largicon]} >
                            <Image 
                                style={[GlobalStyles.STYLES.icon_img, {height:25,width:25}]} 
                                source={require("./../../assets/icons/google-icon.png")}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.5} style={[GlobalStyles.STYLES.icon, styles.largicon]} >
                            <Image 
                                style={[GlobalStyles.STYLES.icon_img, {height:25,width:25}]} 
                                source={require("./../../assets/icons/apple-logo.png")}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <AuthInput 
                    label={"Name"} 
                    placeholder={"Quentin + 1 = 2"} 
                    name={"name"} 
                    valueCheck={(text)=>{return text.length >= 5}}
                    onChange={(value) => setpseudo(value)}
                />
                <AuthInput 
                    label={"Password"} 
                    placeholder={"Pick a strong password"} 
                    name={"password"} 
                    valueCheck={(text)=>{return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{8,})/.test(text)}}
                    onChange={(value) => setpassword(value)}
                />

                <TouchableOpacity activeOpacity={.7} onPress={() => login_app(pseudo, password, seterror, ()=>navigation.navigate("Home"))}>
                    <LinearGradient 
                        colors={[GlobalStyles.COLORS["purple"], GlobalStyles.COLORS["pink"]]}
                        start={[0, 0]}
                        end={[1, 0]}
                        style={styles.gradient}>
                        <Text style={styles.gradient_text}>Log in</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.error}>{error}</Text>

                <View style={styles.footer}>
                    <Text style={GlobalStyles.STYLES.lore}>Don't have account ? </Text>
                    <Pressable>
                        <Text style={styles.pressable}>Sing up</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    );
}

// Init default user Auth
Storage.storeData("auth", JSON.stringify({pseudo: "Shadowkyu", password: "Azerty-1"}))

async function login_app(pseudo, password, seterror, navigate){
    const auth = JSON.parse(await Storage.getStoreData("auth"))
    if(auth?.pseudo === pseudo && auth?.password === password){
        navigate()
    }else{
        seterror("The name or the passord is not correct")
    }
}

const styles = StyleSheet.create({
  screen:{
    flexDirection: "column",
    justifyContent: 'space-between',
    height: "75%"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  title: {
      color: GlobalStyles.COLORS["white"],
      fontWeight: 'bold',
      fontSize: 25,
      marginLeft: 20
  },
  authwith: {
    flexDirection: 'column'
  },
  authwith_buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  largicon: {
      width: (Dimensions.get('window').width-60)/2,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center'
  },
  gradient: {
    borderRadius: 15,
    marginTop: 30
  },
  error: {
    marginBottom: 30,
    textAlign: 'center',
    color: GlobalStyles.COLORS["pink"],
    fontWeight: 'bold'
  },
  gradient_text: {
      color: GlobalStyles.COLORS["white"],
      textAlign: 'center',
      fontSize: 15,
      paddingVertical: 15,
      fontWeight: 'bold'
  },
  pressable: {
    color: GlobalStyles.COLORS["white"],
  },
  footer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
  }
});
