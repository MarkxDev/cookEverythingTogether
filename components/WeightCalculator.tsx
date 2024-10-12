import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WeightCalculator = () => {
  const [individualRaw, setIndividualRaw] = useState('');
  const [individualCooked, setIndividualCooked] = useState('');
  const [totalCooked, setTotalCooked] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    calculateResult();
  }, [individualRaw, individualCooked, totalCooked]);

  const calculateResult = () => {
    if (individualRaw && individualCooked && totalCooked) {
      const rawWeight = parseFloat(individualRaw);
      const cookedWeight = parseFloat(individualCooked);
      const totalCookedWeight = parseFloat(totalCooked);

      if (isNaN(rawWeight) || isNaN(cookedWeight) || isNaN(totalCookedWeight)) {
        setError('Please enter valid numeric values.');
        setResult(null);
      } else if (rawWeight <= 0 || cookedWeight <= 0 || totalCookedWeight <= 0) {
        setError('Values must be greater than zero.');
        setResult(null);
      } else {
        const calculatedResult = (rawWeight / cookedWeight) * totalCookedWeight;
        setResult(calculatedResult.toFixed(2));
        setError(null);
      }
    } else {
      setResult(null);
      setError(null);
    }
  };

  const handleInputChange = (setter: any) => (value: any) => {
    setter(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weight Calculator</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Individual Raw Weight</Text>
        <View style={styles.inputWrapper}>
          <Icon name="balance-scale" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter weight"
            keyboardType="numeric"
            value={individualRaw}
            onChangeText={handleInputChange(setIndividualRaw)}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Individual Cooked Weight</Text>
        <View style={styles.inputWrapper}>
          <Icon name="drumstick-bite" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter weight"
            keyboardType="numeric"
            value={individualCooked}
            onChangeText={handleInputChange(setIndividualCooked)}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Total Cooked Weight</Text>
        <View style={styles.inputWrapper}>
          <Icon name="calculator" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter weight"
            keyboardType="numeric"
            value={totalCooked}
            onChangeText={handleInputChange(setTotalCooked)}
          />
        </View>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Result: {result}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: 'gray',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    paddingLeft: 35, // spazio per l'icona
    fontSize: 16,
    backgroundColor: 'white',
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00796b',
  },
});

export default WeightCalculator;
