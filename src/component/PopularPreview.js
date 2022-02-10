import { StyleSheet, Dimensions, TouchableOpacity, Image  } from 'react-native';

export default function PopularPreview(props) {
    const width = Dimensions.get('window').width/2.5
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={()=>console.log("soon")} >

                <Image 
                    source={{uri: "https://image.tmdb.org/t/p/original/"+props.poster_path}}
                    style={{width: width, height: (width*937)/669}} />
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 50
    },
  });
