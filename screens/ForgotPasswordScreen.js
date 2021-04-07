import React from 'react';
import { View, StyleSheet } from 'react-native';

import HeadingText from '../components/HeadingText';
import NormalText from '../components/NormalText';
import MyTextInput from '../components/MyTextInput';
import MyButton from '../components/MyButton';


import Paddings from '../constants/Paddings';
import Colors from '../constants/Colors';

const ForgotPasswordScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <HeadingText>
                    Forgot Password
      </HeadingText>

                <NormalText>
                    Please enter your Email so we can help you recover your password.
      </NormalText>

                <MyTextInput
                    style={{
                        marginTop: 20
                    }}
                    placeholder="Your Email"
                />

                <MyButton
                    onPress={() => {
                         props.navigation.navigate('verficationScreen')
                        }}>
                    Next
                    </MyButton>
                   
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: Paddings.normalPadding,
        backgroundColor: Colors.backgroundColor
    },
    container: {
        marginTop: 20
    }
});

export default ForgotPasswordScreen;


