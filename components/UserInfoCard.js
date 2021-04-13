import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';

import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from '../components/NormalText';
import RedColorText from '../components/RedColorText';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class UserInfoCard extends React.Component {
  render() {
    return (
      <View style={styles.infoCard}>
        <View style={styles.leftContiner}>
          <ImageBackground
            resizeMode="stretch"
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZHEKvV5iUk6-l90CuO8jbsv1WavXzRsKc0nbtuV_87RRuUoscdptfHFIbYYamaFPIsA&usqp=CAU',
            }}
            style={styles.userProfile}></ImageBackground>

          <View style={styles.textContainer}>
            <RedColorText style={{fontSize: 20}}>Hamza Ali</RedColorText>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <FontAwesome name="phone" size={24} color={Colors.grayColor} />
              <NormalText style={{marginLeft: 10}}>03131425080</NormalText>
            </View>
          </View>
        </View>

        <View style={styles.rightContainer}>
          <NormalText>Date</NormalText>
          <NormalText style={styles.grayText}>23/03/2021</NormalText>

          <NormalText>Time</NormalText>
          <NormalText style={styles.grayText}>2:30 PM</NormalText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoCard: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    padding: Paddings.normalPadding,
    backgroundColor: Colors.whiteColor,
    borderRadius: 10,
    shadowColor: Colors.textColor,
    elevation: 6,
  },
  leftContiner: {
    flex: 2,
    flexDirection: 'row',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  userProfile: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: 'hidden',
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 16,
    marginTop: 10,
  },
  grayText: {
    color: Colors.grayColor,
  },
});
