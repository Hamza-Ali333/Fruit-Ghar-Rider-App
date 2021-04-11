import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerificationScreen from '../screens/VerificationScreen';
import PickUpAndDeliveredScreen from '../screens/OrderPicupAndDeliveredScreen';
import PickedUpOrdersScreen from '../screens/PickedUpOrdersScreens';
import OrderCompeletedScreen from '../screens/OrderCompeletedScreen.js';
import NewOrdersScreen from '../screens/NewOrdersScreen';
import Icon from 'react-native-vector-icons/Fontisto';

const Stack = createStackNavigator();

const isLoggedIn = true;

const MyStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="splashScreen" component={SplashScreen} />
      <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen
        name="createAccountScreen"
        component={CreateAccountScreen}
      />
      <Stack.Screen
        name="forgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="verficationScreen" component={VerificationScreen} />
      <Stack.Screen
        name="pickedUpOrderScreen"
        component={PickedUpOrdersScreen}
      />
      <Stack.Screen
        name="orderCompeletedScreen"
        component={OrderCompeletedScreen}
      />
      <Stack.Screen
        name="pickedUpAndDeliveryedScreen"
        component={PickUpAndDeliveredScreen}
      />
      <Stack.Screen name="newOrdersScreen" component={NewOrdersScreen} />
      <Stack.Screen name="AppTabsScreen" component={AppTabsScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={CreateAccountScreen} />
  </HomeStack.Navigator>
);

const NewOrderStack = createStackNavigator();
const NewOrderStackScreen = () => (
  <NewOrderStack.Navigator>
    <NewOrderStack.Screen name="Order" component={NewOrdersScreen} />
  </NewOrderStack.Navigator>
);

const LoginStack = createStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Login" component={LoginScreen} />
  </LoginStack.Navigator>
);

const AppTabs = createBottomTabNavigator();

const AppTabsScreen = () => (
  <AppTabs.Navigator
    tabBarOptions={{
      showLabel: true,
      showIcon: true,
    }}>
    {/* <AppTabs.Screen options={
    {headerShown: false, }} name="Login" component={LoginStackScreen} /> */}
    <AppTabs.Screen
      options={{
        headerShown: false,
        tabBarIcon: () => <Image source={require('../assets/favicon.png')} />,
      }}
      name="NewOrders"
      component={NewOrderStackScreen}
    />
    <AppTabs.Screen
      options={{
        headerShown: false,
        tabBarIcon: () => <Image source={require('../assets/favicon.png')} />,
      }}
      name="Home"
      component={HomeStackScreen}
    />
  </AppTabs.Navigator>
);

export default () => (isLoggedIn ? <MyStack /> : <AppTabsScreen />);

const styles = StyleSheet.create({
  logoImageStyle: {
    height: 20,
    width: 20,
  },
});
