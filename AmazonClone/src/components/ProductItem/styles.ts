import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      marginVertical: 5,
      borderWidth: 1,
      borderColor: '#d1d1d1',
      borderRadius: 10,
      backgroundColor: 'white',
      overflow: 'hidden'
    },
    image: {
      flex: 2,
      width: 150,
      height: 150,
      resizeMode: 'cover',
    },
    rightContainer: {
      flex: 3,
      padding: 10
    },
    title: {
      fontSize: 18,
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    oldPrice: {
      fontSize: 12,
      fontWeight: 'normal',
      textDecorationLine: 'line-through',
    },
    ratingsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    ratingsText: {
      marginLeft: 5,
      color: '#6b6b6b',
      fontSize: 14,
      fontWeight: 'bold',
    },
    star: {
      margin: 2,
    }
  });

export default styles;