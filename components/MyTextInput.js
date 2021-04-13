import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

const MyInputText = props => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '90%',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.whiteColor,
    elevation: 2,
    fontSize: 20,
    marginVertical: 8,
    shadowColor: Colors.grayColor,
  },
});

export default MyInputText;
