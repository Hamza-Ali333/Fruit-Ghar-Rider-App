import React from 'react';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from '../components/NormalText';
 
const OrderCompeletedScreen = props => {
    return(
        <View style={
            styles.screen
        }>
        <View style={styles.container}>
        <Ionicons name="checkmark-done-circle" size={120} color={Colors.buttonColor} />
        <NormalText>Delivered</NormalText>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        padding: Paddings.normalPadding,
        backgroundColor: Colors.backgroundColor,
    },
    container:{
        height:'30%',
        width:'80%',
        backgroundColor: Colors.whiteColor,
        borderRadius:10,
        shadowColor: Colors.textColor,
        elevation: 6,
        alignItems:'center',
        justifyContent: 'center'

    }
});

export default OrderCompeletedScreen;