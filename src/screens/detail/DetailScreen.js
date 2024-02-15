import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Detail = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <View style={styles.productContainer}>
          <Image source={{ uri: 'https://example.com/product1.jpg' }} style={styles.productImage} />
          <Text style={styles.productName}>Product 1</Text>
          <Text style={styles.productPrice}>$20</Text>
        </View>
        <View style={styles.productContainer}>
          <Image source={{ uri: 'https://example.com/product2.jpg' }} style={styles.productImage} />
          <Text style={styles.productName}>Product 2</Text>
          <Text style={styles.productPrice}>$25</Text>
        </View>
        {/* Add more products here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
  },
});

export default DetailScreen;
