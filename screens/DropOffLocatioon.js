import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from '../components/NormalText';
import RedColorText from '../components/RedColorText';

const DropOffLocation = props => {
  return (
    <Image
      resizeMode="contain"
      style={styles.screen}
      source={require('../assets/images/drop-off.png')}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
  },
});

export default DropOffLocation;
