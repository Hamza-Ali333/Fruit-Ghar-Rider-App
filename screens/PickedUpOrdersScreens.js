import React from 'react';
import {View, StyleSheet, Button, } from 'react-native';


import MyButton from '../components/MyButton';
import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from '../components/NormalText';
import RedColorText from '../components/RedColorText';
import PickupCard from '../components/PickupCard';
import DropOffCard from '../components/DropOffCard';
import OrderItemDetail from '../components/OrderItemDetail';
import CashOnDelivery from '../components/CashViewItem';
 
const PickedUpOrders = props => {
    return(
        <View style={
            styles.screen
        }>

{        /**
         * <PickupCard pickUpLocation='Lahore Rora Bohgun Bedian Rora'/>

         <DropOffCard dropOffLocation='Lahore Rora Bohgun Bedian Rora 2423'/>
         */}
        
        
        <OrderItemDetail/>

        <CashOnDelivery>Cash On Delivery: 200PKR</CashOnDelivery>

        <MyButton style={{
            alignSelf:'center',
        }}
        onPress={() => {
         props.navigation.navigate('orderCompeletedScreen')       
        }
        }
        >Delivered</MyButton>
        
        </View>
    )
}
 
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: Paddings.normalPadding,
        backgroundColor: Colors.backgroundColor,
    }
});

export default PickedUpOrders;