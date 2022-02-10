import { StyleSheet, TouchableOpacity, Text  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import GlobalStyles from './../constants/style';

export default function CategoriesButton(props) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={()=>props.setCategorie()} >
            <LinearGradient 
                        colors={
                            props.selected 
                                ? [GlobalStyles.COLORS["purple"], GlobalStyles.COLORS["pink"]] 
                                : [GlobalStyles.COLORS["silver"], GlobalStyles.COLORS["silver"]]
                        }
                        start={[0, 0]}
                        end={[1, 0]}
                        style={styles.gradient}>
                <Text style={styles.title}>{props.title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
    },
    gradient: {
        paddingHorizontal: 17,
        paddingVertical: 8,
        borderRadius: 10,
    },
    title: {
        color: GlobalStyles.COLORS["white"]
    }
  });
