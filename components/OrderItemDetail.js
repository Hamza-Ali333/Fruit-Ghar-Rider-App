import React from 'react';
import {View, StyleSheet} from 'react-native';

import MyButton from '../components/MyButton';
import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from '../components/NormalText';

const OderItemDetail = props => {
  return (
    <View style={styles.screen}>
      <NormalText> Order Items </NormalText>

      <View
        style={{
          borderBottomColor: Colors.grayColor,
          borderBottomWidth: 1,
          marginLeft: 5,
          marginRight: 5,
        }}
      />

      <NormalText style={styles.itemNames}>Oranges 1 kg</NormalText>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: 100,
    width: '100%',
    padding: Paddings.normalPadding,
    backgroundColor: Colors.whiteColor,
    borderRadius: 10,
    shadowColor: Colors.textColor,
    elevation: 6,
    marginTop: 10,
  },
  itemNames: {
    marginTop: 10,
    color: Colors.grayColor,
  },
});

export default OderItemDetail;
