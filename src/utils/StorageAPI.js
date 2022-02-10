import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = (key, value) => {
    try {
        AsyncStorage.setItem('@'+key, value)
    } catch (e) {
        console.error(e)
    }
}

const getStoreData = async (key) => {
    try {
        return await AsyncStorage.getItem('@'+key)
    } catch(e) {
        console.error(e)
    }
}

module.exports = { storeData, getStoreData }