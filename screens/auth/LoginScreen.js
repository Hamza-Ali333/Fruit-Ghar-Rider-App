import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import MyButton from '../../components/MyButton';
import MyTextInput from '../../components/MyTextInput';
import Colors from '../../constants/Colors';
import Paddings from '../../constants/Paddings';
import NormalText from '../../components/NormalText';
import RedColorText from '../../components/RedColorText';

import Spinner from 'react-native-loading-spinner-overlay';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverErrorVisibility: false,
      serverErrorText: '',
      emailErrorVisibility: false,
      emailErrorText: '',
      passwrodErrorVisibility: false,
      passwordErrorText: '',
      userEmail: 'hammad2@gmail.com',
      userPassword: 'password',
      data: [],
      isSuccessfull: false,
      isTryToLogin: false,
    };
  }

  isUserEnteredInfoRight = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (this.state.userEmail == '') {
      this.emailErrorHandler(true, 'please enter email');
      return false;
    } else if (reg.test(this.state.userEmail) === false) {
      this.emailErrorHandler(true, 'please enter right email');
      return false;
    } else if (this.state.userPassword == '') {
      this.passwordErrorHandler(true, 'please enter passwrod');
      return false;
    } else if (this.state.userPassword.length < 8) {
      this.passwordErrorHandler(
        true,
        'password should be contain atleast 8 digits',
      );
      return false;
    } else {
      return true;
    }
  };

  sendLoginRequestToServer = () => {
    this.setState({isTryToLogin: true});
    fetch('https://fruitghar.com/public/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: this.state.userEmail,
        password: this.state.userPassword,
      }),
    })
      .then(response => response.json())
      .then(json => {
        this.setState({isLoginSuccessfull: json.success}); // Save the reust true or flase

        if (this.state.isLoginSuccessfull) {
          this.setState({data: json.data}); //here have to get all data of the user
          this.SaveData();
        } else {
          alert(json.data);
        }
      })
      .catch(error => alert(error))
      .finally(() => {
        this.setState({isTryToLogin: false});
      });
  };

  emailErrorHandler = (visibility, text) => {
    this.setState({emailErrorText: text});
    this.setState({emailErrorVisibility: visibility});
  };

  passwordErrorHandler = (visibility, text) => {
    this.setState({passwordErrorText: text});
    this.setState({passwrodErrorVisibility: visibility});
  };

  serverErrorHandler = (visibility, text) => {
    this.setState({serverErrorText: text});
    this.setState({serverErrorVisibilty: visibility});
  };

  loginHandler = () => {
    if (this.isUserEnteredInfoRight()) {
      this.sendLoginRequestToServer();
    }
  };

  checkFieldValues = () => {
    console.log(this.state.password);
  };

  setErrorVisibility = visibility => {
    this.setState({errorVisibility: visibility});
  };

  setUserEmail = text => {
    if (this.state.emailErrorVisibility) {
      this.setState({emailErrorVisibility: false});
    }
    this.setState({userEmail: text});
  };

  setUserPassword = text => {
    if (this.state.passwordErrorVisibility) {
      this.setState({passwordErrorVisibility: false});
    }
    this.setState({userPassword: text});
  };

  async SaveData() {
    try {
      await AsyncStorage.setItem('TOKEN', JSON.stringify(this.state.data.token));
      await AsyncStorage.setItem('USER_EMAIL', JSON.stringify(this.state.userEmail));
      await AsyncStorage.setItem('USER_PASSWORD', JSON.stringify(this.state.data.userPassword));
    } catch (error) {
      console.log(error);
    }
  }


  // async componentDidMount() {
  //   await this.Navigation_helper();
  // }

  render() {
    return (
      <View style={styles.screen}>
        <Spinner
          visible={this.state.isTryToLogin}
          color={Colors.redColor}
          size="large"
          textStyle={{color: Colors.whiteColor, fontSize: 14}}
        />

        <Image
          resizeMode="contain"
          style={styles.logoImageStyle}
          source={require('../../assets/images/logo.png')}
        />

        <View style={styles.inputFeildAndErrorCNTR}>
          {
            //Server Error Show ON Top
          }
          {this.state.serverErrorVisibility ? (
            <RedColorText style={styles.errorText}>
              {this.state.serverError}
            </RedColorText>
          ) : null}

          <MyTextInput
            placeholder="User Name"
            error="please Enter Email"
            onChangeText={this.setUserEmail}
            value={this.state.userEmail}
          />

          {this.state.emailErrorVisibility ? (
            <RedColorText style={styles.feildError}>
              {this.state.emailErrorText}
            </RedColorText>
          ) : null}

          <MyTextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={this.setUserPassword}
            value={this.state.userPassword}
          />
          {this.state.passwrodErrorVisibility ? (
            <RedColorText style={styles.feildError}>
              {this.state.passwordErrorText}
            </RedColorText>
          ) : null}
        </View>

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
                //this.props.navigation.navigate('createAccountScreen');
                 */}

        <MyButton onPress={this.loginHandler}>Login</MyButton>

        <View style={styles.imagesContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={styles.containerImageSize}
              resizeMode="contain"
              source={require('../../assets/images/facebook.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Image
              style={styles.containerImageSize}
              resizeMode="contain"
              source={require('../../assets/images/google.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Image
              style={styles.containerImageSize}
              resizeMode="contain"
              source={require('../../assets/images/twitter.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.notHaveAcountTextContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('createAccountScreen');
            }}
            style={styles.newAcountText}>
            <NormalText>You don’t have an account?</NormalText>

            <RedColorText
              style={{
                marginLeft: 5,
              }}>
              Sign up
            </RedColorText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignContent: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    padding: Paddings.normalPadding,
    alignItems: 'center',
  },
  inputFeildAndErrorCNTR: {
    width: '100%',
    marginTop: '15%',
    alignItems: 'center',
  },
  logoImageStyle: {
    height: '20%',
    width: '100%',
    marginTop: '20%',
  },
  forgetTextContainer: {
    width: '90%',
    marginVertical: 8,
  },
  forgetPasswordtext: {
    textAlign: 'right',
    color: Colors.grayColor,
  },
  errorText: {
    width: '90%',
    marginLeft: 8,
    marginTop: 10,
  },
  feildError: {
    width: '90%',
    marginVertical: 0,
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
