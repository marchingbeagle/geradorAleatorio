import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [userNumber, setUserNumber] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);
  const [resultMessage, setResultMessage] = useState('');

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(number);
  };

  const handleConfirm = () => {
    const userGuess = parseInt(userNumber);
    if (userGuess === randomNumber) {
      setResultMessage('Ufaaaa! Você acertou!.');
    } else {
      setResultMessage(`Aff você errou, o número era ${randomNumber}. tenta denovo!`);
    }
    generateRandomNumber();
    setUserNumber('');
  };

  return (
    <View style={styles.container}>
      <Text>Acerte o número gerado entre 1 e 10!</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={userNumber}
        onChangeText={setUserNumber}
        maxLength={2}
      />
      <Button title="tentar a sorte" onPress={handleConfirm} />
      {resultMessage ? <Text>{resultMessage}</Text> : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 20,
    width: '80%',
    textAlign: 'center',
  },
});
