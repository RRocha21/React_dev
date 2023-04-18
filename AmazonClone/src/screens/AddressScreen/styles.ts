import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        padding: 10,
    },
    row: {
        marginVertical: 5,
    },
    label: {
        fontWeight: 'bold',      
    },
    input: {
        fontSize: 16,
        backgroundColor: 'white',
        padding: 5,
        marginVertical: 5,
        height: 35,
        borderWidth: 1,
        borderRadius: 5,
    },
    errorLabel: {
        color: 'red',
        textAlign: 'right',
        marginRight: 5,
        fontWeight: 'bold',
    },
})

export default styles

