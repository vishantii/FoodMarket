import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcNext} from '../../../assets';

const ListMenu = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{text}</Text>
      <IcNext />
    </View>
  );
};

export default ListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    textAlign: 'center',
  },
});
