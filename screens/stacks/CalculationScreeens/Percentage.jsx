import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';



const Percentage = () => {

   const [marks, setMarks] = useState(Array(8).fill(''));
  const [percentage, setPercentage] = useState(null);

  const calculate = () => {
    const total = marks.reduce((sum, val) => sum + (parseInt(val) || 0), 0);
    const filledMarks = marks.filter(val => val !== '').length;
    if (filledMarks === 0) return;
    const percent = total / filledMarks;
    setPercentage(percent);
  };

  return (
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
          
        {/* <View style={styles.inputRow}>
          {marks.map((mark, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="numeric"
              value={mark}
              onChangeText={text => {
                const newMarks = [...marks];
                newMarks[index] = text;
                setMarks(newMarks);
              }}
            />
          ))}
        </View> */}

    </ScrollView>
  )
}

export default Percentage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F1F7',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fireIconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9F1FF',
    padding: 5,
    borderRadius: 15,
  },
  fireText: {
    marginLeft: 5,
    color: '#007AFF',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginVertical: 10
  },
  titleBlue: {
    color: '#2165F6',
    fontWeight: '700'
  },
  tabRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10
  },
  tabItem: {
    marginRight: 20,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333'
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#2165F6',
    color: '#2165F6',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  calculatorBox: {
    backgroundColor: '#76A7BE',
    borderRadius: 20,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E3652'
  },
  subLabel: {
    fontSize: 12,
    color: '#DFEEF4',
    marginBottom: 10
  },
  inputRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20
  },
  input: {
    backgroundColor: '#D9F1FF',
    padding: 10,
    borderRadius: 10,
    width: 50,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#1E3652',
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '600'
  },
  resultBox: {
    marginTop: 20,
    backgroundColor: '#B3E2FB',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center'
  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5
  },
  percentText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000'
  }
})