import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const COLORS = {
    "main-bg": '#373846',
    "white": "#ecf0f1",
    "gray": "#ABA9B5",
    "silver": "#535774",
    "pink": "#C44BC1",
    "dark-pink": "#9D0570",
    "purple": "#8D0696"
}

const STYLES = StyleSheet.create({
    icon: {
        backgroundColor: COLORS["silver"],
        padding: 8,
        borderRadius: 10,
        alignSelf: 'center'
    },
    icon_img: {
        height: 15,
        width: 15
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS["main-bg"],
        paddingTop: Constants.statusBarHeight,
        height: "100%"
    },
    lore: {
        color: COLORS["gray"],
        fontSize: 13
    },
    input: {
        backgroundColor: COLORS["silver"],
        color: COLORS["white"],
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: COLORS["silver"],
        borderWidth: 2,
        width: "100%"
    },
})

module.exports = { COLORS, STYLES }