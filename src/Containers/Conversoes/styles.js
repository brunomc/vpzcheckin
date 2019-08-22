import { StyleSheet, Dimensions } from 'react-native';
import { metrics, fonts, colors } from '../../Styles';

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center'

    },
    image: {
        marginTop: Dimensions.get('window').height * 0.01,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4,
        alignSelf: 'center',
        borderColor: '#c6c6c6',
        borderWidth: 5,
        borderRadius: 10

    },
    containerBody: {
        width: Dimensions.get('window').width
    },
    textTitleCardItem: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    card: {
        alignItems: 'center'
    },
    cardItemBody: {
        alignItems: 'center'
    },
    textCardItem: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: Dimensions.get('window').height * 0.05
    },
    badge: {
        width: 200,
        height: 100,
        padding: 50,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textBadge: {
        fontSize: 50,
        alignSelf: 'center'
    },
    iconBadge: {
        fontSize: 50,
    },
    form: {
        width: Dimensions.get('window').width * 0.4,
        alignSelf: 'center'
    },
    buttonForm: {
        marginTop: Dimensions.get('window').height * 0.05,
        padding: 30,
        alignSelf: 'center',
        backgroundColor: '#FF5722',
        color: '#FFFFFF'
    },
    list: {
        width: Dimensions.get('window').width,
        alignSelf: 'center',
        opacity: 0.8,
        borderColor: '#c6c6c6',
        borderWidth: 1,
        borderRadius: 10,
        color: '#FFFFFF',
        marginTop: Dimensions.get('window').height * 0.05,
    },
    textCardPerson: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    textErro: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'red',
        marginTop: Dimensions.get('window').height * 0.05
    }



});