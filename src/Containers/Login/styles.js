import { StyleSheet, Dimensions } from 'react-native';
import { metrics, fonts, colors } from '../../Styles';

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center'

    },
    logo: {
        marginTop: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.25

    },
    form: {
        width: Dimensions.get('window').width * 0.8
    },
    buttonForm: {
        marginTop: Dimensions.get('window').height * 0.05,
        backgroundColor: '#FF5722'
    },
    colText: {
        margin: 12,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#fff'
    },
    subtitle: {
        textAlign: 'center',
        color: '#fff'
    },
    error: {
        color: 'red'
    }


});