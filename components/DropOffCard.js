import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import MyButton from './MyButton';
import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from './NormalText';

import * as NavigationService from '../navigator/NavigationService';

const DropOffCard = props => {
  return (
    <View style={{...styles.screen, ...props.style}}>
      <NormalText>Drop off</NormalText>
      <View style={styles.locationContainer}>
        <Entypo name="location" size={24} color={Colors.grayColor} />
        <NormalText
          style={{
            marginLeft: 10,
          }}>
          {props.dropOffLocation}
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

      <View style={styles.buttonContainer}>
        <MyButton
          style={styles.button}
          onPress={() => {
            NavigationService.navigate('dropOffLocation');
          }}>
          Location
        </MyButton>
        <MyButton style={styles.button}>Call Now</MyButton>
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default DropOffCard;
