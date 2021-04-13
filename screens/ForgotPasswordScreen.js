import React from 'react';
import {View, StyleSheet} from 'react-native';

import HeadingText from '../components/HeadingText';
import NormalText from '../components/NormalText';
import MyTextInput from '../components/MyTextInput';
import MyButton from '../components/MyButton';

import Paddings from '../constants/Paddings';
import Colors from '../constants/Colors';

const ForgotPasswordScreen = props => {
  return (
    <View style={styles.screen}>
      <View>
        <HeadingText
          style={{
            textAlign: 'left',
          }}>
          Forgot Password
        </HeadingText>

        <NormalText
          style={{
            marginTop: 10,
            textAlign: 'left',
          }}>
          Please enter your Email so we can help you recover your password.
        </NormalText>
      </View>

      <View style={styles.container}>
        <MyTextInput placeholder="Your Email" />

        <MyButton
          onPress={() => {
            props.navigation.navigate('verficationScreen');
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
    paddingTop: Paddings.normalPadding,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
  },
  container: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
});

export default ForgotPasswordScreen;
