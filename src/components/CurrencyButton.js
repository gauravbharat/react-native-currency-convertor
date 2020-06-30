import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { currencySign } from '../util';

const CurrencyButton = ({ currency, buttonPressed }) => {
  const { convertorBtn, convertorBtnTxt } = styles;

  return (
    <TouchableOpacity
      onPress={() => buttonPressed(currency)}
      style={convertorBtn}
    >
      <Text style={convertorBtnTxt}>{currencySign[currency]}</Text>
    </TouchableOpacity>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  convertorBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a79df',
    height: 100,
    borderColor: '#c1c1c1',
    borderWidth: 2,
    width: '33.3%'
  },
  convertorBtnTxt: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
