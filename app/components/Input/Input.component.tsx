import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const Input = () => {
  return (
    <View>
      <TextInput placeholder="something" style={style.input} />
    </View>
  );
};

export default Input;
const style = StyleSheet.create({
  input: {
    padding: 12,
    borderWidth: 0.5,
    marginVertical: 8,
    borderRadius: 4,
    borderColor: 'grey',
  },
});
