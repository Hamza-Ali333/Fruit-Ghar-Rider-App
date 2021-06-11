import React from 'react';
import {View, StyleSheet} from 'react-native';

import Paddings from '../../constants/Paddings';
import Colors from '../../constants/Colors';

import MyInputText from '../../components/MyTextInput';
import MyButton from '../../components/MyButton';
import HeadingText from '../../components/HeadingText';
import ErrorText from '../../components/RedColorText';

import Spinner from 'react-native-loading-spinner-overlay';

export default class CreateAccountScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'hamza',
      userEmail: 'der',
      userPassword: '',
      userPhone: '',
      userLocation: '',
      errorText: '',
      nameError: false,
      emailError: false,
      passwordError: false,
      phoneError: false,
      locationError: false,
      isTryCreateAccount: false,
      isLoginSuccessfull: false,
    };
  }

  setUserName = text => {
    if (this.state.nameError) {
      this.setState({nameError: false});
      this.setErrorText();
    }
    this.setState({userName: text});
  };

  setUserEmail = text => {
    if (this.state.emailError) {
      this.setState({emailError: false});
      this.setErrorText();
    }
    this.setState({userEmail: text});
  };

  setUserPassword = text => {
    if (this.state.passwordError) {
      this.setState({passwordError: false});
      this.setErrorText();
    }
    this.setState({userPassword: text});
  };

  setUserPhone = text => {
    if (this.state.phoneError) {
      this.setState({phoneError: false});
      this.setErrorText();
    }
    this.setState({userPhone: text});
  };

  setUserLocation = text => {
    if (this.state.locationError) {
      this.setState({locationError: false});
      this.setErrorText();
    }
    this.setState({userLocation: text});
  };

  setErrorText() {
    this.setState({errorText: ''});
  }

  _nameErrorHandler = (visibility, text) => {
    this.setState({errorText: text});
    this.setState({nameError: visibility});
  };

  _emailErrorHandler = (visibility, text) => {
    this.setState({errorText: text});
    this.setState({emailError: visibility});
  };

  _passwordErrorHandler = (visibility, text) => {
    this.setState({errorText: text});
    this.setState({passwordError: visibility});
  };

  _phoneErrorHandler = (visibility, text) => {
    this.setState({errorText: text});
    this.setState({phoneError: visibility});
  };

  _locationErrorHandler = (visibility, text) => {
    this.setState({errorText: text});
    this.setState({locationError: visibility});
  };

  _createAccountHandler = () => {
    if (this._isUserEnteredInfoRight) {
      this._sendCreateAccountRequest();
    } else {
      alert('else run');
    }
  };

  _isUserEnteredInfoRight = () => {
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (this.state.userName == '') {
      this._nameErrorHandler(true, 'please enter your name');
      return false;
    } else if (this.state.userEmail == '') {
      this._emailErrorHandler(true, 'please enter email');
      return false;
    } else if (regEmail.test(this.state.userEmail) === false) {
      this._emailErrorHandler(true, 'please enter right email');
      return false;
    } else if (this.state.userPassword == '') {
      this._passwordErrorHandler(true, 'please enter passwrod');
      return false;
    } else if (this.state.userPassword.length < 8) {
      this._passwordErrorHandler(
        true,
        'password should be contain atleast 8 digits',
      );
      return false;
    } else if (this.state.userPhone == '') {
      this._phoneErrorHandler(true, 'please enter your phone no');
      return false;
    } else if (this.state.userPhone.length < 11) {
      this._phoneErrorHandler(true, 'phone no is should be of 11 numbers');
      return false;
    } else if (this.state.userPhone.startsWith('03')) {
      this._phoneErrorHandler(true, 'phone no must be start with 03');
      return false;
    } else if (this.state.userLocation == '') {
      this._locationErrorHandler(true, 'please enter your address');
      return false;
    } else {
      return true;
    }
  };

  _sendCreateAccountRequest = () => {
    this.setState({isTryCreateAccount: true});
    fetch('https://fruitghar.com/public/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: this.state.userName,
        email: this.state.userEmail,
        phone: this.state.userPhone,
        password: this.state.userPassword,
      }),
    })
      .then(response => response.json())
      .then(json => {
        this.setState({isLoginSuccessfull: json.success});

        this.state.isLoginSuccessfull
          ? (alert({data: json.data}),
            this.setState({isTryCreateAccount: false}))
          : alert(json.data);
      })
      .catch(error => alert(error))
      .finally(() => {
        this.setState({isTryToLogin: false});
      });
  };

  // async LoginState() {
  //   data = this.state.userEmail + this.state.userName;

  //   try {
  //     await AsyncStorage.setItem('LOGIN', JSON.stringify(data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    return (
      <View style={styles.screen}>
        <Spinner
          visible={this.state.isTryCreateAccount}
          color={Colors.redColor}
          size="large"
          textStyle={{color: Colors.whiteColor, fontSize: 14}}
        />

        <View style={styles.textContainer}>
          <HeadingText style={styles.textAlign}>Create New Account</HeadingText>
          <ErrorText style={styles.textAlign}>{this.state.errorText}</ErrorText>
        </View>

        <MyInputText
          style={this.state.nameError ? styles.inputErrorStyle : null}
          placeholder="Full Name"
          onChangeText={this.setUserName}
          value={this.state.userName}
        />

        <MyInputText
          style={this.state.emailError ? styles.inputErrorStyle : null}
          placeholder="Email"
          onChangeText={this.setUserEmail}
          value={this.state.userEmail}
        />

        <MyInputText
          style={this.state.passwordError ? styles.inputErrorStyle : null}
          placeholder="Password"
          onChangeText={this.setUserPassword}
          value={this.state.userPassword}
        />

        <MyInputText
          style={this.state.phoneError ? styles.inputErrorStyle : null}
          placeholder="Phone No"
          onChangeText={this.setUserPhone}
          value={this.state.userPhone}
        />

        <MyInputText
          style={this.state.locationError ? styles.inputErrorStyle : null}
          placeholder="Your Location"
          onChangeText={this.setUserLocation}
          value={this.state.userLocation}
        />

        {/**
         * this.props.navigation.navigate('forgotPasswordScreen');
         */}

        <MyButton
          onPress={this._createAccountHandler}
          style={{
            marginTop: 20,
          }}>
          Continue
        </MyButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: Paddings.normalPadding,
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 20,
    width: '90%',
  },
  textAlign: {
    textAlign: 'left',
  },
  inputErrorStyle: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
