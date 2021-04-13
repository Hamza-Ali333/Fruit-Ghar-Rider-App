import React from 'react';
import {
  Platform,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import Colors from '../constants/Colors';

const MyButton = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={{...styles.container, ...props.style}}>
      <TouchableCmp style={{flex: 1}} onPress={props.onPress}>
        <View style={styles.touchAera}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 45,
    overflow: 'hidden',
    borderRadius: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: Colors.textColor,
    elevation: 6,
  },
  touchAera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.redColor,
  },
  text: {
    fontSize: 16,
    color: Colors.whiteColor,
    fontFamily: 'SFPro-Bold',
  },
});

export default MyButton;
