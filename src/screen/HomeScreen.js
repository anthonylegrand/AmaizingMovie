import { StyleSheet, FlatList, Image, Text, View } from 'react-native';

import GlobalStyles from './../constants/style';
import fetchAPI from "./../utils/FetchAPI"

import SearchInput from "./../component/SearchInput"
import CategoriesButton from "./../component/CategoriesButton"
import PopularPreview from "./../component/PopularPreview"

import { useEffect, useState } from 'react';

let flatList = null

export default function HomeScreen(props) {
    let {navigation} = props
    const [input_value, setInput] = useState("")
    const [categorie, setCategorie] = useState({id: -1, name: "Popular"})
    const [categories_list, setCategories_list] = useState([])
    const [display_list, setdisplay_list] = useState([])

    useEffect(() => {
        fetchAPI.fetch_themoviedb("genre/movie/list")
        .then((json) => setCategories_list([{id: -1, name: "Popular"}, ...json.genres]))

        updateDisplayList(categorie, setdisplay_list, setCategorie, setInput)
    }, []);
    
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

                <SearchInput 
                    value={input_value} 
                    setInput={text => updateInputText(text, setInput, setdisplay_list, ()=>setCategorie(categories_list[0]) )} />

                <View>
                    <Text style={styles.section_title}>Categories</Text>

                    <FlatList 
                        data={categories_list}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id} 
                        renderItem={({item}) => {
                            return (<CategoriesButton 
                                        title={item.name} 
                                        selected={categorie.id === item.id} 
                                        setCategorie={() => updateDisplayList(item, setdisplay_list, setCategorie, setInput)} />)
                        }}
                    />
                </View>

                <View>
                    <Text style={styles.section_title}>
                        {input_value 
                            ? "Search : "+input_value 
                            : categorie.name}
                    </Text>

                    <FlatList 
                            ref={(ref) => { flatList = ref; }}
                            data={display_list}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id} 
                            renderItem={({item}) => {
                                return <PopularPreview poster_path={item.poster_path} />
                            }}
                            initialNumToRender={3}
                            style={{minHeight: 200}}
                        />
                </View>
            
            </View>
        </View>
    );
}
function updateInputText(text, setInput, setdisplay_list, setCategorie){
    setInput(text)
    setCategorie()
    fetchDisplayList("search/movie", "&query="+text, setdisplay_list)
}
function updateDisplayList(categorie, setdisplay_list, setCategorie, setInput){
    setCategorie(categorie)
    setInput("")
    if(categorie.id === -1)
        fetchDisplayList("movie/popular", "", setdisplay_list)
    else
        fetchDisplayList("discover/movie", "&with_genres="+categorie.id, setdisplay_list)
}

function fetchDisplayList(url, query, setdisplay_list){
    flatList?.scrollToOffset({ animated: true, y: 0 });
    fetchAPI.fetch_themoviedb(url, query)
        .then((json) => setdisplay_list(json.results))
}

const styles = StyleSheet.create({
    screen:{
        flexDirection: "column",
        justifyContent: 'space-between',
        height: "80%"
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
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15
    }
  });
