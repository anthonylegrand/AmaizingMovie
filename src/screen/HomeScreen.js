import { StyleSheet, Text, View } from 'react-native';

import GlobalStyles from './../constants/style';

export default function HomeScreen(props) {
    let {navigation} = props
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
            
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: GlobalStyles.COLORS["main-bg"],
      padding: 20
    }
  });
