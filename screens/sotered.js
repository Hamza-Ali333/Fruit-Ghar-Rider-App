import React, {Component} from 'react';
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import '../constants/GlobalVariables';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      local_name: '',
      login: false,
    };
  }

  getUserInfo = async () => {
    try {
      const userInfo = await AsyncStorage.getItem(global.userName);
      const lognInfo = await AsyncStorage.getItem('LOGIN');
      this.setState({local_name: JSON.parse(userInfo)});
      this.setState({login: JSON.parse(lognInfo)});
      alert(this.state.login);
    } catch (e) {
      console.log('Failed to fetch the data from storage');
    }
  };

  async componentDidMount() {
    await this.getUserInfo();
  }

  async SaveData() {
    try {
      await AsyncStorage.setItem(
        global.userName,
        JSON.stringify(this.state.name),
      );
      await AsyncStorage.setItem('LOGIN', JSON.stringify(this.state.login));
    } catch (error) {
      console.log(error);
    }
  }

  // "@react-native-community/async-storage": "^1.12.1" This is the package name and it should be placed in to the package.json, make sure there is no package installed in the package.json, if that so, overwrite it

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <Text>{this.state.local_name}</Text>
        <TextInput
          placeholder="Your Name"
          value={this.state.name}
          autoCapitalize="none"
          onChangeText={name => this.setState({name})}></TextInput>
        <TouchableOpacity
          onPress={() => {
            this.SaveData();
          }}>
          <Text>Ok</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
