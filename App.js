import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/home/HomeScreen';
import DetailScreen from './src/screens/detail/DetailScreen';
import CartScreen from './src/screens/cart/CartScreen';
import { AccountScreen } from './src/screens/account/AccountScreen';
import { CartProvider } from './src/context/CartContext';

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <CartProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, size, color }) => {
                let iconName;

                if (route.name === 'HomeTab') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Cart') {
                  iconName = focused ? 'cart' : 'cart-outline';
                } else if (route.name === 'Account') {
                  iconName = focused ? 'person' : 'person-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name='HomeTab' component={HomeScreen} options={{ title: 'Welcome to Shop' }} />
            <Tab.Screen name='Cart' component={CartScreen} options={{ title: 'Cart' }} />
            <Tab.Screen name='Account' component={AccountScreen} options={{ title: 'Account' }} />
          </Tab.Navigator>
        </NavigationContainer>
      </CartProvider>
    </SafeAreaView>
  );
}

// const HomeStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
//       <Stack.Screen name='DetailScreen' component={DetailScreen} />
//     </Stack.Navigator>
//   );
// };

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
