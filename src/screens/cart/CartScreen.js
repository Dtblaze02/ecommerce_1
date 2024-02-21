// CartScreen.js
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useCart } from '../../context/CartContext';

const CartScreen = () => {
  const { cartItems, removeItemFromCart } = useCart();

  return (
    <View style={styles.container}>
      {cartItems.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={item.image} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>Price: {item.price}</Text>
            <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
          </View>
          <Button title="Remove" onPress={() => removeItemFromCart(item.id)} color="#FF6347" />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
  productQuantity: {
    fontSize: 14,
    color: 'blue',
  },
});

export default CartScreen;
