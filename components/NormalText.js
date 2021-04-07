import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const  NormalText = props => {
  return <Text {...props} style={{ ...styles.normalText, ...props.style }} />;
};

const styles = StyleSheet.create({
  normalText: {
    fontFamily: 'SFPro-Regular',
    color: Colors.textColor,
    fontSize:16,
  }
});

export default NormalText;