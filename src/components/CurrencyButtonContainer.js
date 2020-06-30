import React from 'react';
import { View, StyleSheet } from 'react-native';
import CurrencyButton from './CurrencyButton';

const CurrencyButtonContainer = ({ buttonPressed }) => {
  return (
    <View style={styles.convertorBtnContainer}>
      <CurrencyButton buttonPressed={buttonPressed} currency={'DOLLAR'} />
      <CurrencyButton buttonPressed={buttonPressed} currency={'EURO'} />
      <CurrencyButton buttonPressed={buttonPressed} currency={'POUND'} />
      <CurrencyButton buttonPressed={buttonPressed} currency={'RUBLE'} />
      <CurrencyButton buttonPressed={buttonPressed} currency={'AUD'} />
      <CurrencyButton buttonPressed={buttonPressed} currency={'CAD'} />
      <CurrencyButton buttonPressed={buttonPressed} currency={'YEN'} />
      <CurrencyButton buttonPressed={buttonPressed} currency={'DINAR'} />
      <CurrencyButton buttonPressed={buttonPressed} currency={'BITCOIN'} />
    </View>
  );
};

export default CurrencyButtonContainer;

const styles = StyleSheet.create({
  convertorBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    borderColor: '#c1c1c1',
    borderWidth: 2
  }
});
