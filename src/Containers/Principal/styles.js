import { StyleSheet, Dimensions } from 'react-native';
import { metrics, fonts, colors } from '../../Styles';

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center'

    },
    colButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: '100%',
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#c6c6c6'
    },
    textColButton: {
        fontSize: 50,
        color: '#FFFFFF'
    },
    linearGradient: {
        justifyContent: 'center'
    }
});