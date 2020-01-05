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
    height: 150,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 6,
    backgroundColor: 'white',
    padding: 1,
    borderRadius: 10
  }
});

export default Cart;
