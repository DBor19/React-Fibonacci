import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const useFibonacci = () => {
  const [sequence, setSequence] = useState([]);

  const generateFibonacciSequence = (n) => {
    let fibSequence = [];
    let fib1 = 0;
    let fib2 = 1;
    fibSequence.push(fib1, fib2);

    if (n <= 2) {
      setSequence(fibSequence.slice(0, n));
      return;
    }

    for (let i = 3; i <= n; i++) {
      let fib = fib1 + fib2;
      fib1 = fib2;
      fib2 = fib;
      fibSequence.push(fib);
    }

    setSequence(fibSequence);
  };

  return [sequence, generateFibonacciSequence];
};

const Fibonacci = () => {
  const [sequence, generateFibonacciSequence] = useFibonacci();
  const [n, setN] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sequência de Fibonacci</Text>
      <TextInput
        style={styles.inputTypeDesign}
        placeholder="Informe n"
        onChangeText={(n) => setN(parseInt(n))}
        keyboardType="numeric"
      />
      <Text style={styles.title}>{sequence.join(', ')}</Text>
      <Button title="Gerar Sequência" onPress={() => generateFibonacciSequence(n)} style={styles.button}/>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Fibonacci />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 16,
    fontSize: 24,
    textAlign: 'center',
  },
  inputTypeDesign: {
    width: "100%",
    fontSize: 24,
    paddingTop: 24,
    backgroundColor: '#eaeaea',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
    fontSize: 28,
    height: 40,
  },
});

export default App;
