import React from 'react';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

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
import OrderPickedUpAndDeliverd from '../screens/OrderPicupAndDeliveredScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="splashScreen">
      <Stack.Screen name="splashScreen" component={SplashScreen} options={{headerShown: false}} />
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
      <Stack.Screen name="newOrdersScreen" 
      component={NewOrdersScreen} />



      <Stack.Screen name="AppTabsScreen" options={{headerShown: false}} component={AppTabsScreen} />
    </Stack.Navigator>
  );
};

// const HomeStack = createStackNavigator();
// const HomeStackScreen = () => (
//   <HomeStack.Navigator>
//     <HomeStack.Screen name="Home" component={CreateAccountScreen} />
//   </HomeStack.Navigator>
// );

const NewOrderStack = createStackNavigator();
const NewOrderStackScreen = () => (
  <NewOrderStack.Navigator>
    <NewOrderStack.Screen name="Order" options={{headerTitle:'Song'}} component={NewOrdersScreen} />
  </NewOrderStack.Navigator>
);

// const LoginStack = createStackNavigator();
// const LoginStackScreen = () => (
//   <LoginStack.Navigator>
//     <LoginStack.Screen name="Login" component={LoginScreen} />
//   </LoginStack.Navigator>
// );

const AppTabs = createBottomTabNavigator();

const AppTabsScreen = () => (
  <AppTabs.Navigator
    tabBarOptions={{
      showLabel: true,
      showIcon: true,
    }}>
    
    <AppTabs.Screen
      options={{
        headerShown: true,
        headerTitle: 'Category',
        tabBarIcon: () => <Fontisto name="bell"  size={24}/>,
      }}
      name="New Orders"
      component={NewOrderStackScreen}
    />
    <AppTabs.Screen
      options={{
        tabBarIcon: () => <Fontisto name="bell"  size={24}/>,
      }}
      name="Accepted"
      component={OrderPickedUpAndDeliverd }
    />
    <AppTabs.Screen
      options={{
        tabBarIcon: () => <Ionicons name="cart-outline"  size={24}/>,
      }}
      name="Picked Up"
      component={PickedUpOrdersScreen}
    />
    <AppTabs.Screen
      options={{
        tabBarIcon: () => <MaterialCommunityIcons name="account-outline"  size={24}/>,
      }}
      name="Account"
      component={LoginScreen}
    />
  </AppTabs.Navigator>
);

export default () => (<MyStack /> );
