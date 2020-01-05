import React from 'react';
import { View, StyleSheet } from 'react-native';

const Cart = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 90,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 10
  }
});

export default Cart;
