import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

const TextInput = props => {
  const {label, placeholder, ...restProps} = props;
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {fontFamily: 'Poppins-Regular', fontSize: 16, color: '#020202'},
  input: {borderWidth: 1, borderColor: '#020202', borderRadius: 8, padding: 10},
});
