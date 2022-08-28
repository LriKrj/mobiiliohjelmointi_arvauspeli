import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';



export default function App() {

  const [guess, setGuess] = useState('')
  const [msg, setMsg] = useState('Guess a number between 1-100')
  const [count, setCount] = useState(0)
  const [random, setRandom] = useState( Math.floor(Math.random() * 100) + 1)
  
  const guessPressed = () => { 
    if (guess < random) {
      setMsg('Your guess ' + guess + ' was too low')
      setCount(count + 1)
    }
    else if (guess > random) {
      setMsg('Your guess ' + guess + ' was too high')
      setCount(count + 1)
    }
    else if (guess == random){
      Alert.alert('You guessed the right number in ' + count + ' guesses')
    }
  };
  
  return (
    <View style={styles.container}>
      <Text>{msg}</Text>
      <TextInput keyboardType='numeric' style={styles.input} onChangeText={guess => setGuess(guess)} value={guess}/>
      <View style={styles.buttons}>
        <Button onPress={guessPressed} title='Make a guess' />
      </View>
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
    width: 150, 
    borderColor: 'black',
    borderWidth: 1    
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 200,
    borderColor: 'gray',
    
  }
});