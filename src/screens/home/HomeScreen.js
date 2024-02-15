import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style';
import { products } from '../../products/Products';

const HomeScreen = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Our Store</Text>
      </View>
      <View style={styles.productContainer}>
        {products.map(product => (
          <TouchableOpacity
            key={product.id}
            style={styles.productItem}
            onPress={() => navigation.navigate('ProductDetails', { productId: product.id })}
          >
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
