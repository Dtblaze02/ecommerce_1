import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button, FlatList } from 'react-native';
import { styles } from './style';
import { products } from '../../products/Products';

const HomeScreen = ({ navigation }) => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigateToProduct(item)}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text>Quantity: {item.quantity} </Text>
      <Button title="Add to Cart"  />
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
          <Text style={styles.tabText}>Groceries</Text>
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
