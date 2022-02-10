import { StyleSheet, FlatList, Image, Text, View } from 'react-native';

import GlobalStyles from './../constants/style';
import fetchAPI from "./../utils/FetchAPI"

import SearchInput from "./../component/SearchInput"
import { useState } from 'react';

export default function HomeScreen(props) {
    let {navigation} = props
    const [categories, setCategories] = useState([])

    fetchAPI.fetch_themoviedb("genre/movie/list")
        .then((json) => setCategories(json.genres))
    
    return (
        <View style={GlobalStyles.STYLES.container}>

            <View style={styles.screen}>
                <View style={styles.header}>
                    <View style={styles.header_left}>
                        <Image 
                            style={styles.header_img} 
                            source={require("./../../assets/icons/profile.jpg")}/>
                        <View>
                            <Text style={GlobalStyles.STYLES.lore}>Welcome</Text>
                            <Text style={styles.user_name}>Shadowkyu</Text>
                        </View>
                    </View>

                    <Image 
                        style={styles.header_img_bell} 
                        source={require("./../../assets/icons/bell.png")}/>
                </View>

                <SearchInput />

                <View>
                    <Text style={styles.section_title}>Categories</Text>

                    <FlatList 
                            data={[
                                {
                                id: 28,
                                name: "Action"
                                },
                                {
                                id: 12,
                                name: "Aventure"
                                },
                                {
                                id: 16,
                                name: "Animation"
                                }]}
                            keyExtractor={(item) => item.id} 
                            renderItem={({item}) => {
                                <Text style={{height: 20, backgroundColor: "red"}}>{item.name}</Text>
                            }}
                        />

                    <Text>{JSON.stringify(categories)}</Text>

                </View>

                <View>
                    <Text style={styles.section_title}>Popular</Text>
                </View>
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flexDirection: "column",
        justifyContent: 'space-between',
        height: "100%"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header_left: {
        flexDirection: 'row',
    },
    user_name: {
        fontSize: 15,
        color: GlobalStyles.COLORS["white"],
        fontWeight: 'bold'
    },
    header_img: {
        height: 40,
        width: 40,
        borderRadius: 100,
        marginRight: 20
    },
    header_img_bell: {
        height: 30,
        width: 30,
        alignSelf: 'center'
    },
    section_title: {
        color: GlobalStyles.COLORS["white"],
        fontSize: 17,
        fontWeight: 'bold',
        marginVertical: 15
    }
  });
