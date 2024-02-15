import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    productContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      paddingVertical: 20,
    },
    productItem: {
      width: '45%',
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
      alignItems: 'center',
    },
    productImage: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    productPrice: {
      fontSize: 14,
      color: 'green',
    },
  });