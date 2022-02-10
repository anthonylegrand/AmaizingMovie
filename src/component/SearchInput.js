import { useState } from 'react';
import { StyleSheet, Image, View, TextInput  } from 'react-native';

import GlobalStyles from './../constants/style';

export default function AuthInput(props) {
    const [selected, isSelected] = useState(false)
    const [value, setvalue] = useState("")
    return (
        <View style={styles.container}>
            <Image 
                style={[styles.icon, styles.icon_left]} 
                source={require("./../../assets/icons/search.png")}/>

            <TextInput 
                style={[GlobalStyles.STYLES.input, selected && styles.input_border, styles.input]}
                placeholder={"Search movie"}
                placeholderTextColor = {GlobalStyles.COLORS["gray"]}
                onFocus={()=>isSelected(true)}
                onBlur={()=>isSelected(false)}
                onChangeText={(text) => {
                    setvalue(text)
                    props.setInput(text)
                }}
                value={props.value} />

            <View style={[styles.icon, styles.right_section, styles.icon_right]}>
                <Image 
                    style={{height: 25, width: 25}} 
                    source={require("./../../assets/icons/mics.png")}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'relative',
        right: 25,
        marginBottom: 15,
        marginTop: 30
    },
    input: {
        paddingLeft: 55
    },
    input_border: {
        borderColor: GlobalStyles.COLORS["pink"]
    },
    icon: {
        position: 'relative',
        height: 25,
        width: 25,
        bottom: 12,
        alignSelf: "flex-end",
        zIndex: 80
    },
    icon_left: {
        left: 45
    },
    icon_right: {
        right: 45
    },
    right_section: {
        borderLeftColor: GlobalStyles.COLORS["gray"],
        borderLeftWidth: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingVertical: 17,
        bottom: 9
    }
  });
