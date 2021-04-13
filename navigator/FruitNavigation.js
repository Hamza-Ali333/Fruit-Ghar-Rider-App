import React from 'react';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../constants/Colors';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerificationScreen from '../screens/VerificationScreen';
import PickedUpOrdersScreen from '../screens/PickedUpOrdersScreens';
import OrderCompeletedScreen from '../screens/OrderCompeletedScreen.js';
import NewOrdersScreen from '../screens/NewOrdersScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import AcceptedOrderScreen from '../screens/AcceptedOrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';

//Main Stack
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
        options={{headerTitle: 'ID: w35 34 r7'}}
      />
      <Stack.Screen
        name="orderCompeletedScreen"
        component={OrderCompeletedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="pickedUpAndDeliveryedScreen"
        component={OrderDetailScreen}
        options={{headerTitle: 'ID: 343 34 f7'}}
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

const AcceptedOrderStack = createStackNavigator();
const AcceptedOrderStackScreen = () => (
  <AcceptedOrderStack.Navigator>
    <AcceptedOrderStack.Screen
      name="Accepted"
      options={{headerTitle: 'Accepted Orders'}}
      component={AcceptedOrderScreen}
    />
  </AcceptedOrderStack.Navigator>
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

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="New Order"
      options={{headerShown: false}}
      component={ProfileScreen}
    />
  </ProfileStack.Navigator>
);

//Buttom Tabs
const AppTabs = createBottomTabNavigator();

const AppTabsScreen = () => (
  <AppTabs.Navigator
    tabBarOptions={{
      showLabel: true,
      showIcon: true,
      activeTintColor: Colors.redColor,
      style: {height: 55, paddingBottom: 10},
    }}>
    <AppTabs.Screen
      options={{
        headerShown: true,
        tabBarIcon: ({focused}) => (
          <Fontisto
            name="bell"
            size={24}
            color={focused ? Colors.redColor : Colors.grayColor}
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
            color={focused ? Colors.redColor : Colors.grayColor}
          />
        ),
      }}
      name="Accepted Orders"
      component={AcceptedOrderStackScreen}
    />
    <AppTabs.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="cart-outline"
            size={24}
            color={focused ? Colors.redColor : Colors.grayColor}
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
            color={focused ? Colors.redColor : Colors.grayColor}
          />
        ),
      }}
      name="Account"
      component={ProfileStackScreen}
    />
  </AppTabs.Navigator>
);

export default () => <MyStack />;
