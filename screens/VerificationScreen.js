import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import HeadingText from '../components/HeadingText';
import NormalText from '../components/NormalText';
import ErrorText from '../components/RedColorText';
import MyButton from '../components/MyButton';

import Paddings from '../constants/Paddings';
import Colors from '../constants/Colors';
import MyTextInput from '../components/MyTextInput';

const ForgotPasswordScreen = props => {
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  const [errorVisibility, setErrorVisibility] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.headingContainer}>
        <HeadingText style={styles.textAlign}>Verification</HeadingText>

        <NormalText style={styles.textAlign}>
          Enter the OTP code from the phone we just sent you.
        </NormalText>
      </View>

      <View style={styles.inputContainers}>
        <MyTextInput
          style={styles.input}
          placeholder="0"
          maxLength={1}
          keyboardType="numeric"
          onChangeText={pin1 => {
            setPin1(pin1);
          }}
          value={pin1}
        />
        <MyTextInput
          style={styles.input}
          placeholder="0"
          keyboardType="numeric"
          maxLength={1}
          onChangeText={pin2 => {
            setPin2(pin2);
          }}
        />
        <MyTextInput
          style={styles.input}
          placeholder="0"
          keyboardType="numeric"
          maxLength={1}
          onChangeText={pin3 => {
            setPin3(pin3);
          }}
        />
        <MyTextInput
          style={styles.input}
          placeholder="0"
          keyboardType="numeric"
          maxLength={1}
          onChangeText={pin4 => {
            setPin4(pin4);
          }}
        />
      </View>

      {/* Error Text Visibility Checking first time should be hide*/}
      {errorVisibility ? (
        <ErrorText
          style={{
            marginTop: 10,
          }}>
          Oh no! You entered wrong OTP code, please check it again.
        </ErrorText>
      ) : null}

      <View style={styles.resendCodeText}>
        <NormalText>Didn’t receive OTP code!</NormalText>
        <TouchableOpacity>
          <NormalText
            style={{
              fontFamily: 'SFPro-Bold',
              marginLeft: 5,
              fontWeight: 'bold',
              color: Colors.redColor,
            }}
            onPress={() => {}}>
            Resend
          </NormalText>
        </TouchableOpacity>
      </View>
      <MyButton
        style={{
          marginTop: 16,
        }}
        onPress={() => {
          props.navigation.navigate('AppTabsScreen');
        }}>
        Verfiy
      </MyButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: Paddings.normalPadding,
    paddingRight: Paddings.normalPadding,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
  },
  headingContainer: {
    width: '90%',
  },
  textAlign: {
    textAlign: 'left',
  },
  resendCodeText: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    width: '90%',
  },
  inputContainers: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  input: {
    width: 50,
    fontSize: 25,
    textAlign: 'center',
  },
});

export default ForgotPasswordScreen;
