import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import CurrencyButtonContainer from './src/components/CurrencyButtonContainer';

import { currencyPerRupee, currencySign } from './src/util';

export default function App() {
  const [inputVal, setInputVal] = useState('');
  const [resultVal, setResultVal] = useState('0.0');

  const buttonPressed = currency => {
    if (!inputVal || inputVal.trim() === '' || isNaN(inputVal)) {
      Alert.alert('Enter a numeric value');
      setInputVal('');
      setResultVal('0.0');
    } else {
      let result = parseFloat(inputVal) * currencyPerRupee[currency];
      setResultVal(`${currencySign[currency]} ${result.toFixed(2)}`);
    }
  };

  const onChangeText = value => {
    value === '' && setResultVal('0.0');
    setInputVal(value);
  };

  const {
    container,
    screenView,
    resultContainer,
    resultValue,
    inputContainer,
    inputValue,
    convertorBtnContainer
  } = styles;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={container}>
        <View style={screenView}>
          <View style={resultContainer}>
            <Text style={resultValue}>{resultVal}</Text>
          </View>
          <View style={inputContainer}>
            <TextInput
              style={inputValue}
              selectionColor='#fff'
              keyboardType='numeric'
              placeholder='Enter Rupee Value'
              value={inputVal}
              onChangeText={onChangeText}
            />
          </View>
          <CurrencyButtonContainer buttonPressed={buttonPressed} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  screenView: {
    flex: 1
  },
  resultContainer: {
    height: 70,
    marginTop: 50,
    justifyContent: 'center',
    borderColor: '#c1c1c1',
    backgroundColor: '#0a79de',
    alignItems: 'center',
    borderWidth: 2
  },
  resultValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  inputContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c1c1c1',
    borderWidth: 2,
    backgroundColor: '#0a79de'
  },
  inputValue: {
    color: '#fff',
    fontSize: 30,
    alignItems: 'center'
  }
});
