import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

const HeadingText = props => {
  return <Text {...props} style={{...styles.headingText, ...props.style}} />;
};

const styles = StyleSheet.create({
  headingText: {
    fontFamily: 'SFPro-Bold',
    color: Colors.textColor,
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default HeadingText;
