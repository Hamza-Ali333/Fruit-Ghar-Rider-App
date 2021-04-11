import 'react-native-gesture-handler';
import React from 'react';
import FruitNavigator from './navigator/FruitNavigation';
import { navigationRef } from './NavigationService';
import * as NavigationService from './NavigationService.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {

  async componentDidMount() {
    await this.Navigation_helper()
  }

  async Navigation_helper() {
    const users = await AsyncStorage.getItem('LOGIN')
    const chatUsers = JSON.parse(users);
    if (chatUsers == null) {
      NavigationService.navigate("loginScreen")
    } else if (chatUsers !== null) {
      NavigationService.navigate("AppTabsScreen")
    }
  }
  render() {
    return (

      <NavigationContainer ref={navigationRef} >
        <FruitNavigator />
      </NavigationContainer>
    )
  }
}



