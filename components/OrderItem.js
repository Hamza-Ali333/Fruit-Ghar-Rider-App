import React from 'react';
import { Platform, View, StyleSheet, ImageBackground, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from '../components/NormalText';
import RedColorText from './RedColorText';


const OrderItem = props => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={{ ...styles.screen, ...props.style }}>
            <ImageBackground style={styles.orderItemImage}
                resizeMode='contain'
                source={{ uri: props.image }}></ImageBackground>

            <View style={styles.orderItemTextContainer}>
                <NormalText>
                    Orange
    </NormalText>

                <View style={{
                    flexDirection: 'row',
                }}>
                    <RedColorText>ID:</RedColorText>
                    <NormalText style={styles.orderId}>3544546</NormalText>
                </View>

                <NormalText style={{
                    color: Colors.textGrayColor
                }}>
                    2 Kg
    </NormalText>


                <View style={{
                    flexDirection:'row',
                    width:'85%',
                    marginTop: 5,
                    justifyContent:'flex-end'
                }}>
                <TouchableCmp onPress={props.onClick}>
                    <RedColorText>
                        New Order
    </RedColorText>
    </TouchableCmp>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: 105,
        width: '100%',
        flexDirection: 'row',
        padding: Paddings.normalPadding,
        backgroundColor: Colors.whiteColor,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: Colors.textColor,
        elevation: 6,
    },
    orderItemImage: {
        borderRadius: 10,
        height: 90,
        width: 100,
        borderColor: Colors.textGrayColor,
        borderWidth: 2,
        overflow: 'hidden',
    },
    orderItemTextContainer: {
        marginLeft: 10
    },
    orderId: {
        marginLeft: 10
    }
});


export default OrderItem;