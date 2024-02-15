import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our E-Commerce Store!</Text>
      <View style={styles.categories}>
        <Text style={styles.categoryTitle}>Shop by Category</Text>
        <View>
          <Text style={styles.categoryLink}>Electronics</Text>
          <Text style={styles.categoryLink}>Clothing</Text>
          <Text style={styles.categoryLink}>Home & Garden</Text>
          {/* Add more categories as needed */}
        </View>
      </View>
      <View style={styles.featuredProducts}>
        <Text style={styles.categoryTitle}>Featured Products</Text>
        <View style={styles.productList}>
          {/* Display featured products */}
          {/* Example:
          {featuredProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
          */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categories: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryLink: {
    fontSize: 16,
    marginBottom: 5,
    color: 'blue', // Example link styling
  },
  featuredProducts: {
    marginBottom: 20,
  },
  productList: {
    // Add styles for the product list container
  },
});

export default HomeScreen;
