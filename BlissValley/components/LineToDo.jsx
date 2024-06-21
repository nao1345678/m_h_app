import React from 'react';
import { View, StyleSheet } from 'react-native';

const LineTodo = () => {
  return (
    <View style={styles.line}></View>
  );
};

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#a8d1ff', // Couleur de la ligne
  },
});

export default LineTodo;
