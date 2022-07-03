import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = props => {
  const {label, color = '#FFC700', textColor = '#020202', onPress} = props;
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.button(textColor)}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  button: textColor => ({
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: textColor,
    fontSize: 14,
  }),
});
