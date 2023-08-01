import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = () => {
  return (
    <TouchableOpacity style={style.btn}>
      <Text style={style.btnText}>Button</Text>
    </TouchableOpacity>
  );
};

export default Button;

const style = StyleSheet.create({
  btn: {
    backgroundColor: '#28AF51',
    padding: 12,
    borderRadius: 4,
    marginTop: 8,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
