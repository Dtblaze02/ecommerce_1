import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import { products } from '../../products/Products';
import { useCart } from '../../context/CartContext';
import { styles } from './style';

const HomeScreen = ({ navigation }) => {

  const { addItemToCart } = useCart()

  const itemToAdd =  { 
    id: 1, 
    name: 'Product 1', 
    price: '$19.99', 
    category: 'fashion', 
    image: require('../../../assets/images/shoe-1.png') 
  };

  const handleAddToCart = () => {
    // Add item to the cart
    addItemToCart(itemToAdd); // Example item, replace with actual product data
  };

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

    // Render product list using filteredProducts

  const navigateToProduct = (product) => {
    navigation.navigate('DetailScreen', { product });
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigateToProduct(item)}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setSelectedCategory('All')} style={[styles.tab, selectedCategory === 'All' && styles.selectedTab]}>
          <Text style={styles.tabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('fashion')} style={[styles.tab, selectedCategory === 'fashion' && styles.selectedTab]}>
          <Text style={styles.tabText}>Fashion</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('groceries')} style={[styles.tab, selectedCategory === 'groceries' && styles.selectedTab]}>
          <Text style={styles.tabText}>Grocery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('beauty')} style={[styles.tab, selectedCategory === 'beauty' && styles.selectedTab]}>
          <Text style={styles.tabText}>Beauty</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('electronics')} style={[styles.tab, selectedCategory === 'electronics' && styles.selectedTab]}>
          <Text style={styles.tabText}>Electronics</Text>
        </TouchableOpacity>
        {/* Add more tabs for other categories */}
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        style={styles.productList}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;
