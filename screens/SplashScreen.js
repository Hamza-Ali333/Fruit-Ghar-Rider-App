import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as NavigationService from '../NavigationService.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class SplashScreen extends React.Component {

    async componentDidMount() {
        await this.time_out()
    }

    async Navigation_helper() {
        const users = await AsyncStorage.getItem('LOGIN')
        const chatUsers = JSON.parse(users);
        if (chatUsers == null) {
            NavigationService.navigate("loginScreen")
        } else if (chatUsers !== null) {
            NavigationService.navigate("AppTabsScreen")
        }
    }



    async time_out() {
        setTimeout(async () => {
            await this.Navigation_helper()
        }, 2500);
    }
    render() {
        return (
            <View style={styles.screen}>
                <Image source={require('../assets/images/logo.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    imageStyle: {
        height: '40%',
        width: '60%'
    }
});