import React from 'react';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../constants/Colors';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerificationScreen from '../screens/VerificationScreen';
import PickUpAndDeliveredScreen from '../screens/AcceptedOrderScreen';
import PickedUpOrdersScreen from '../screens/PickedUpOrdersScreens';
import OrderCompeletedScreen from '../screens/OrderCompeletedScreen.js';
import NewOrdersScreen from '../screens/NewOrdersScreen';
import OrderPickedUpAndDeliverd from '../screens/AcceptedOrderScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="splashScreen">
      <Stack.Screen
        name="splashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="loginScreen"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Screen
        name="createAccountScreen"
        component={CreateAccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="verficationScreen"
        component={VerificationScreen}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="pickedUpOrderScreen"
        component={PickedUpOrdersScreen}
      />
      <Stack.Screen
        name="orderCompeletedScreen"
        component={OrderCompeletedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="pickedUpAndDeliveryedScreen"
        component={PickUpAndDeliveredScreen}
      />
      <Stack.Screen name="newOrdersScreen" component={NewOrdersScreen} />

      <Stack.Screen
        name="AppTabsScreen"
        options={{headerShown: false}}
        component={AppTabsScreen}
      />
    </Stack.Navigator>
  );
};

const OrderPickedUpAndDeliverdStack = createStackNavigator();
const OrderPickedUpAndDeliverdStackScreen = () => (
  <OrderPickedUpAndDeliverdStack.Navigator>
    <OrderPickedUpAndDeliverdStack.Screen
      name="Home"
      options={{headerTitle: 'ID : 345 347 23'}}
      component={OrderPickedUpAndDeliverd}
    />
  </OrderPickedUpAndDeliverdStack.Navigator>
);

const NewOrderStack = createStackNavigator();
const NewOrderStackScreen = () => (
  <NewOrderStack.Navigator>
    <NewOrderStack.Screen
      name="New Order"
      options={{headerTitle: "New Order's"}}
      component={NewOrdersScreen}
    />
  </NewOrderStack.Navigator>
);

const PickedUpOrdersScreenStack = createStackNavigator();
const PickedUpOrdersScreenStackScreen = () => (
  <PickedUpOrdersScreenStack.Navigator>
    <PickedUpOrdersScreenStack.Screen
      name="Picked Up Order"
      options={{headerTitle: 'ID : 347 e34 34'}}
      component={PickedUpOrdersScreen}
    />
  </PickedUpOrdersScreenStack.Navigator>
);

const AppTabs = createBottomTabNavigator();

const AppTabsScreen = () => (
  <AppTabs.Navigator
    tabBarOptions={{
      showLabel: true,
      showIcon: true,
      activeTintColor: Colors.buttonColor,
      style: {height: 55, paddingBottom: 10},
    }}>
    <AppTabs.Screen
      options={{
        headerShown: true,
        tabBarIcon: ({focused}) => (
          <Fontisto
            name="bell"
            size={24}
            color={focused ? Colors.buttonColor : Colors.textGrayColor}
          />
        ),
      }}
      name="New Orders"
      component={NewOrderStackScreen}
    />
    <AppTabs.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons
            name="bike"
            size={24}
            color={focused ? Colors.buttonColor : Colors.textGrayColor}
          />
        ),
      }}
      name="Accepted"
      component={OrderPickedUpAndDeliverdStackScreen}
    />
    <AppTabs.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="cart-outline"
            size={24}
            color={focused ? Colors.buttonColor : Colors.textGrayColor}
          />
        ),
      }}
      name="Picked Up"
      component={PickedUpOrdersScreenStackScreen}
    />
    <AppTabs.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons
            name="account-outline"
            size={24}
            color={focused ? Colors.buttonColor : Colors.textGrayColor}
          />
        ),
      }}
      name="Account"
      component={LoginScreen}
    />
  </AppTabs.Navigator>
);

export default () => <MyStack />;
