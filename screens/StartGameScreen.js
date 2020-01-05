import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Cart from '../components/Cart';
import Input from '../components/Input';
import Color from '../constants/colors';

const StartGameScreen = () => {
  const [enterValue, setEnterValue] = useState('');

  const numberInputHandler = inputText => {
    setEnterValue(inputText.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Cart style={styles.inputContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Select a Number</Text>
            <Input
              style={styles.input}
              blurOnSubmit
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='numeric'
              maxLength={2}
              onChangeText={numberInputHandler}
              value={enterValue}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title='reset' onPress={() => {}} color={Color.accent} />
              </View>
              <View style={styles.button}>
                <Button
                  title='Confirm'
                  onPress={() => {}}
                  color={Color.primary}
                />
              </View>
            </View>
          </View>
        </Cart>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: { fontSize: 20, marginVertical: 10 },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 82,
    color: 'red'
  },
  input: {
    width: 50,
    textAlign: 'center'
  }
});

export default StartGameScreen;
