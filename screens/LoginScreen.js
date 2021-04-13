import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from '../components/NormalText';
import ErrorText from '../components/RedColorText';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        errorVisibility: false,
        userEmail: '',
        userPassword: '',
      });
  }

  setErrorVisibility = () => {
    this.setState({errorVisibility: true});
  };

  setUserEmail = text => {
    this.setState({userEmail: text});
  };

  setUserPassword = text => {
    this.setState({userPassword: text});
  };

  async LoginState() {
    let data = this.state.userEmail + this.state.userPassword;
    try {
      await AsyncStorage.setItem('LOGIN', JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    // await this.Navigation_helper()
  }

  render() {
    return (
      <View style={styles.screen}>
        <Image
          resizeMode="contain"
          style={styles.logoImageStyle}
          source={require('../assets/images/logo.png')}
        />

        {this.state.errorVisibility ? (
          <ErrorText style={styles.errorText}>
            Oh no! Your account or password is incorrect, please check again.
          </ErrorText>
        ) : null}

        <MyTextInput
          style={{
            marginTop: '15%',
          }}
          placeholder="User Name"
          onChangeText={email => {
            this.setUserEmail(email);
          }}
          value={this.state.userEmail}
        />

        <MyTextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => {
            this.setUserPassword(password);
          }}
          value={this.state.userPassword}
        />

        <View style={styles.forgetTextContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('forgotPasswordScreen');
            }}>
            <NormalText style={styles.forgetPasswordtext}>
              Forget Password?
            </NormalText>
          </TouchableOpacity>
        </View>

        {/**
                this is the code will make user login true in the app
                 * //this.LoginState()
                 */}

        <MyButton
          onPress={() => {
            this.props.navigation.push('createAccountScreen');
          }}>
          Login
        </MyButton>

        <View style={styles.imagesContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={styles.containerImageSize}
              resizeMode="contain"
              source={require('../assets/images/facebook.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Image
              style={styles.containerImageSize}
              resizeMode="contain"
              source={require('../assets/images/google.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Image
              style={styles.containerImageSize}
              resizeMode="contain"
              source={require('../assets/images/twitter.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.notHaveAcountTextContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.push('createAccountScreen');
            }}
            style={styles.newAcountText}>
            <NormalText>You don’t have an account?</NormalText>

            <ErrorText
              style={{
                marginLeft: 5,
              }}>
              Sign up
            </ErrorText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Paddings.normalPadding,
    alignItems: 'center',
  },
  logoImageStyle: {
    height: '20%',
    width: '100%',
    marginTop: '20%',
  },
  forgetTextContainer: {
    width: '90%',
  },
  forgetPasswordtext: {
    textAlign: 'right',
    color: Colors.grayColor,
  },
  errorText: {
    marginLeft: 8,
    marginTop: 40,
  },
  imagesContainer: {
    flexDirection: 'row',
    width: '60%',
    marginTop: 30,
    height: 60,
    justifyContent: 'space-between',
  },
  containerImageSize: {
    width: 40,
    height: 40,
  },
  newAcountText: {
    flexDirection: 'row',
    width: '60%',
    alignContent: 'flex-end',
    justifyContent: 'space-between',
  },
  loginButton: {
    marginTop: 20,
  },
  notHaveAcountTextContainer: {
    flex: 1,
    width: '90%',
    marginTop: '5%',
    alignItems: 'center',
  },
});
