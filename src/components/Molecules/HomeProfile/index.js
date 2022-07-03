import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.photoContainer}>
      <View>
        <Text style={styles.title}>FoodMarket</Text>
        <Text style={styles.desc}>Let's get some food</Text>
      </View>
      <Image source={ProfileDummy} style={styles.profile} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  photoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 32,
    backgroundColor: 'white',
  },
  title: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
  desc: {fontFamily: 'Poppins-Light', fontSize: 14, color: '#8D92A3'},
  profile: {width: 50, height: 50, borderRadius: 8},
});
