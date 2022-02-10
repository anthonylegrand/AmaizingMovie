import { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput  } from 'react-native';

import GlobalStyles from './../constants/style';

export default function AuthInput(props) {
    const [selected, isSelected] = useState(false)
    const [value, setvalue] = useState("")
    return (
        <View>
            <Text style={styles.lore}>{props.label}</Text>

            <View style={styles.row}>

                <TextInput 
                    style={[styles.input, selected && styles.input_border]}
                    placeholder={props.placeholder}
                    placeholderTextColor = {GlobalStyles.COLORS["gray"]}
                    secureTextEntry={props.label == "Password"}
                    onFocus={()=>isSelected(true)}
                    onBlur={()=>isSelected(false)}
                    onChangeText={(text) => {
                        setvalue(text);
                        props.valueCheck(text)
                            ? props.onChange(text)
                            : props.onChange("")
                    }}
                    value={value} />

                {
                    props.valueCheck(value) && (
                        <View style={[GlobalStyles.STYLES.icon, styles.icon]} >
                            <Image 
                                style={GlobalStyles.STYLES.icon_img} 
                                source={require("./../../assets/icons/check.png")}/>
                        </View>
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: GlobalStyles.COLORS["silver"],
        color: GlobalStyles.COLORS["white"],
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: GlobalStyles.COLORS["silver"],
        borderWidth: 2,
        width: "100%"
    },
    input_border: {
        borderColor: GlobalStyles.COLORS["pink"]
    },
    lore: {
        color: GlobalStyles.COLORS["white"],
        fontSize: 13,
        marginBottom: 5,
        marginTop: 20
    },
    row: {
        flexDirection: "row"
    },
    icon: {
        backgroundColor: GlobalStyles.COLORS["main-bg"],
        position: 'relative',
        height: 31,
        right: 45,
        bottom: 9,
        alignSelf: "flex-end"
    }
  });
