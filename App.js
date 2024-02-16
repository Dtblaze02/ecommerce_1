import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Platform} from 'react-native';
import HomeScreen from './src/screens/home/HomeScreen'
import DetailScreen from './src/screens/detail/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AccountScreen } from './src/account/AccountScreen';

const Tab = createBottomTabNavigator();
//purecash
export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route})=>({
            tabBarIcon: ({focused, size, color}) => {
              let iconName; 

              if(route.name === 'Home'){
                iconName = focused ? 'home' : 'home-outline'
              }else if(route.name === 'Detail'){
                iconName = focused ? 'cart' : 'cart-outline'
              }else if(route.name === 'Account'){
                iconName = focused ? 'person' : 'person-outline'

              }
              return <Ionicons name={iconName} size={size} color={color}/>
            }
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'black'
          }}
        >
          <Tab.Screen name='Home' component={HomeScreen} options={{title:'Welcome to Shop'}}/>
          <Tab.Screen name='Detail' component={DetailScreen} options={{title:'Product Detail'}}/>
          <Tab.Screen name='Account' component={AccountScreen} options={{title:'Account'}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});


