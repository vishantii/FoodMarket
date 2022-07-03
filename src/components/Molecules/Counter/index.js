import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcBtnAdd, IcBtnMin} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcBtnMin />
      </TouchableOpacity>
      <Text style={styles.label}>14</Text>
      <TouchableOpacity>
        <IcBtnAdd />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 10,
    color: '#020202',
  },
});
