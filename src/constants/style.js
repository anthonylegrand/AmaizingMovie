import { StyleSheet } from 'react-native';

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
        borderRadius: 10
    },
    icon_img: {
        height: 15,
        width: 15
    }
})

module.exports = { COLORS, STYLES }