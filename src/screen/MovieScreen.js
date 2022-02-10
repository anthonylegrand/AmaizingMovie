import { Pressable, StyleSheet, Text, View } from 'react-native';

import GlobalStyles from './../constants/style';

export default function MovieScreen(props) {
    let {navigation} = props
    return (
        <View style={styles.container}>
            <Pressable onPress={()=>navigation.navigate("Auth")}>
                <Text>Movie Screen</Text>
            </Pressable>
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
