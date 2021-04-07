import React from 'react';
import {View, Image, StyleSheet} from 'react-native'; 

const SplashScreen = props => {

    setTimeout(() => {
        props.navigation.replace('loginScreen');
    }, 2500);
    return (
        <View style={styles.screen}>
            <Image source={require('../assets/images/logo.png')} />
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({ 
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20
    },
    imageStyle: {
        height: '40%',
        width: '60%'
    }
});