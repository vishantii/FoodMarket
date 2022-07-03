import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemValue = ({item, value, color = '#020202'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{item}</Text>
      <Text style={styles.value(color)}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {fontFamily: 'Poppins-Regular', fontSize: 14, color: '#8D92A3'},
  value: color => ({fontFamily: 'Poppins-Regular', fontSize: 14, color: color}),
});
