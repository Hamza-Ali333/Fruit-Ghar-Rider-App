import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import MyButton from './MyButton';
import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from './NormalText';
import RedColorText from './RedColorText';

import * as NavigationService from '../navigator/NavigationService';

const PickupCard = props => {
  return (
    <View style={{...styles.screen, ...props.style}}>
      <NormalText>Pick up</NormalText>
      <View style={styles.locationContainer}>
        <Entypo name="location" size={24} color={Colors.grayColor} />
        <NormalText
          style={{
            marginLeft: 10,
          }}>
          {props.pickUpLocation}
        </NormalText>
      </View>

      <View
        style={{
          alignSelf: 'flex-end',
        }}>
        <TouchableOpacity onPress={props.onClick}>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={24}
            color={Colors.grayColor}
          />
        </TouchableOpacity>
      </View>

      <MyButton
        style={styles.button}
        onPress={() => {
          NavigationService.navigate('pickUpLocation');
        }}>
        Location
      </MyButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: 150,
    width: '100%',
    marginTop: 10,
    padding: Paddings.normalPadding,
    backgroundColor: Colors.whiteColor,
    borderRadius: 10,
    shadowColor: Colors.textColor,
    elevation: 6,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 10,
  },
  button: {
    width: 100,
    height: 35,
    fontSize: 10,
  },
});

export default PickupCard;
