import React from 'react';
import { Platform, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';

import Colors from '../constants/Colors';

const MyButton = props => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={{...styles.container, ...props.style}}>
        <TouchableCmp style={{flex:1}} onPress={props.onPress} >
        <View style={styles.touchAera}>
            <Text style={styles.text} >{props.children}</Text>
            </View>
            </TouchableCmp>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 45,
        overflow: 'hidden',
        borderRadius: 10,
        marginVertical:10
    },
    touchAera: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.buttonColor,
        elevation: 4,
        shadowColor: Colors.textGrayColor,
    },
    text: {
        fontSize: 16,
        color: Colors.buttonTextColor,
        fontFamily: 'SFPro-Bold',
    },
    
});


export default MyButton;
