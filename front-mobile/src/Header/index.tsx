import React from 'react';
import { LogBox, StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} />
            <Text style={styles.text}>Ds Delivery</Text>
        </View>
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
