import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';


import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from '../components/NormalText';
 
const CashOnDelivery = props => {
    return(
        <View style={
            {...styles.screen, ...props.style}
        }>
        <NormalText>{props.children}</NormalText>
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        height:50,
        width: '90%',
        marginTop: 10,
        alignItems:'center',
        justifyContent:'center',
        alignSelf: 'center',
        padding: Paddings.normalPadding,
        backgroundColor: Colors.whiteColor,
        borderRadius:10,
        shadowColor: Colors.textColor,
        elevation: 6,
    },
});

export default CashOnDelivery;