import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useCart } from '../../context/CartContext';

const DetailScreen = ({ route }) => {

  const { addItemToCart } = useCart()

  const { name, price, image } = route.params.product; // Corrected from route.params.productId

  const itemToAdd =  { 
    id: 1, 
    name: 'Product 1', 
    price: '$19.99', 
    category: 'Shoes', 
    image: require('../../../assets/images/shoe-1.png') 
  };

  const handleAddToCart = () => {
    // Add item to the cart
    addItemToCart(itemToAdd); // Example item, replace with actual product data
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.productImage} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{price}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  productImage: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#888',
  },
});

export default DetailScreen;
