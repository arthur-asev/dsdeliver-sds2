import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import{ TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default function Header() {
    const navigation = useNavigation();

    const handlerOnPress = () => {
        navigation.navigate('Home');
    }


    return (
        <TouchableWithoutFeedback onPress={handlerOnPress}>
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} />
            <Text style={styles.text}>Ds Delivery</Text>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DA5C5C',
        height: 90,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center'

    },

    text:{
        marginLeft:10,
        fontWeight:'bold',
        fontSize:18,
        lineHeight:25,
        letterSpacing: -0.24,
        color:'white'

    }

});
