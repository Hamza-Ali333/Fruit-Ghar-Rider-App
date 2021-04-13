import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';

//IconsImports

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import MyButton from '../components/MyButton';
import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from '../components/NormalText';
import HeadingText from '../components/HeadingText';
import RedColorText from '../components/RedColorText';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <View
          style={{
            width: '100%',
            backgroundColor: Colors.redColor,
            paddingTop: 16,
            paddingRight: 16,
          }}>
          <Ionicons
            style={{
              alignSelf: 'flex-end',
            }}
            name="ios-settings-outline"
            size={24}
            color={Colors.backgroundColor}
          />
        </View>
        <View style={styles.redAeraContainer}>
          <ImageBackground
            resizeMode="stretch"
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZHEKvV5iUk6-l90CuO8jbsv1WavXzRsKc0nbtuV_87RRuUoscdptfHFIbYYamaFPIsA&usqp=CAU',
            }}
            style={styles.userProfile}></ImageBackground>
          <HeadingText style={styles.userName}>Hamza Ali</HeadingText>
        </View>

        <View style={styles.orderAndEarningContainer}>
          <View style={styles.orderContainer}>
            <NormalText style={styles.normalInfoText}>
              Completed Ordres
            </NormalText>
            <RedColorText style={styles.nbrText}>3434</RedColorText>
          </View>

          <View
            style={{
              height: '80%',
              width: 2,
              backgroundColor: Colors.grayColor,
              marginVertical: 10,
            }}
          />

          <View style={styles.earningContainer}>
            <NormalText style={styles.normalInfoText}>Total Earning</NormalText>
            <RedColorText style={styles.nbrText}>PKR-334</RedColorText>
          </View>
        </View>

        <View style={styles.whiteAeraContainer}>
          <View style={styles.iconAndTextContainer}>
            <MaterialCommunityIcons
              name="email"
              size={24}
              color={Colors.grayColor}
            />
            <NormalText style={{marginLeft: 15}}>
              Hamzaregardless333@gmail.com
            </NormalText>
          </View>

          <View style={styles.iconAndTextContainer}>
            <Ionicons name="ios-location" size={24} color={Colors.grayColor} />
            <NormalText style={{marginLeft: 15}}>
              Lahore, Bedian Rd, Village Bohgun
            </NormalText>
          </View>

          <View style={styles.iconAndTextContainer}>
            <FontAwesome name="phone" size={24} color={Colors.grayColor} />
            <NormalText style={{marginLeft: 15}}>03131425080</NormalText>
          </View>

          <View style={styles.iconAndTextContainer}>
            <Fontisto name="date" size={24} color={Colors.grayColor} />
            <NormalText style={{marginLeft: 15}}>23/11/2021</NormalText>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  redAeraContainer: {
    flex: 2,
    backgroundColor: Colors.redColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  userProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.whiteColor,
    overflow: 'hidden',
  },
  userName: {
    color: Colors.whiteColor,
    fontSize: 22,
    marginTop: 10,
  },
  orderAndEarningContainer: {
    height: 70,
    width: '89%',
    marginVertical: 10,
    borderRadius: 10,
    marginTop: -35,
    flexDirection: 'row',
    shadowColor: Colors.blackColor,
    backgroundColor: Colors.whiteColor,
    elevation: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  orderContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  earningContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  normalInfoText: {
    fontWeight: 'bold',
  },
  nbrText: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  whiteAeraContainer: {
    flex: 3,
    paddingVertical: 30,
    backgroundColor: Colors.backgroundColor,
  },
  iconAndTextContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 50,
  },
});
