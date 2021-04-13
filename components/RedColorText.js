import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

const RedColorText = props => {
  return <Text {...props} style={{...styles.errorText, ...props.style}} />;
};

const styles = StyleSheet.create({
  errorText: {
    fontFamily: 'SFPro-Regular',
    color: Colors.redColor,
    fontSize: 16,
  },
});

export default RedColorText;
