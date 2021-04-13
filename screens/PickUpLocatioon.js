import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from '../components/NormalText';
import RedColorText from '../components/RedColorText';

const PickUpLocation = props => {
  return (
    <Image
      resizeMode="contain"
      style={styles.screen}
      source={require('../assets/images/pick-up.png')}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default PickUpLocation;
