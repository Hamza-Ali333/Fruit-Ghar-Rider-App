import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import Paddings from '../constants/Paddings';
import Colors from '../constants/Colors';

import MyInputText from '../components/MyTextInput';
import MyButton from '../components/MyButton';
import HeadingText from '../components/HeadingText';
import ErrorText from '../components/RedColorText';


const CreateAccountScreen = props => {

    return (
        <View style={styles.screen}>

            <HeadingText>
                Create New Account
    </HeadingText>

            <ErrorText>Please Enter Correct Information!</ErrorText>


            <MyInputText
                style={{
                    marginTop: 30
                }}

                placeholder='Full Name' />

            <MyInputText
                style={styles.inputTextMargins}
                placeholder='Email' />

            <MyInputText
                style={styles.inputTextMargins}
                placeholder='Password' />

            <MyInputText
                style={styles.inputTextMargins}
                placeholder='Phone NO' />

            <MyInputText
                style={styles.inputTextMargins}
                placeholder='Your Location' />

            <MyInputText
                style={styles.inputTextMargins}
                placeholder='Date of Birth' />

            <MyButton onPress={() => { }} style={{
                marginTop: 20
            }}>
                Continue
    </MyButton>



        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        padding: Paddings.normalPadding,
    },
    inputTextMargins: {
        marginTop: 10
    }
});

export default CreateAccountScreen;