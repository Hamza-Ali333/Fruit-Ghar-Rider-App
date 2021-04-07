import React from 'react';
import { View, StyleSheet,  } from 'react-native';


import MyButton from '../components/MyButton';
import OrderItem from '../components/OrderItem';
import MyTextInput from '../components/MyTextInput';
import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from '../components/NormalText';
import RedColorText from '../components/RedColorText';
 
const NewOrdersScreen = props => {
    return(
        <View style={
            styles.screen
        }>
        
        <OrderItem style={{
            marginTop:20
        }}
        image= 'http://upl.stack.com/wp-content/uploads/2015/09/Oranges-STACK.jpg'

        onClick={() => {
            props.navigation.navigate('pickedUpAndDeliveryedScreen')
        }}
        />
        <OrderItem style={{
            marginTop:10
        }}
        image='https://thumbs.dreamstime.com/z/beautiful-fruit-11015287.jpg'
        />
        <OrderItem style={{
            marginTop:10
        }}
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zhdFG92DSrD-EGlS1Qp-bs9suq06xbEw9Q&usqp=CAU'
        />


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

export default NewOrdersScreen;