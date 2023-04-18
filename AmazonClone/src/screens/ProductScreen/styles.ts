import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'white',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0f0f0f',
        marginVertical: 10,
        marginHorizontal: 15,
        textAlign: 'center',
    },
    optionContainer: {
        backgroundColor: '#e3e3e3',
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 10, 
    },
    optionSelector: {
        color: '0f0f0f',
        alignItems: 'center',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 10,
        color: '#0f0f0f',
        textAlign: 'right',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    descriptionTitle: {
        marginVertical: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6b6b6b',
        marginHorizontal: 15,
    },
    description: {
        marginVertical: -5,
        lineHeight: 20,
        fontSize: 16,
        color: '#6b6b6b',
        marginHorizontal: 20,
    },
});

export default styles;