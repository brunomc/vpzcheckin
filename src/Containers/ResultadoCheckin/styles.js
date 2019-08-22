import { StyleSheet, Dimensions } from 'react-native';
import { metrics, fonts, colors } from '../../Styles';
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    logo: {
        marginTop: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.25

    },
    camera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    rectangle: {
        height: 350,
        width: 350,
        borderWidth: 2,
        borderColor: colors.primary,
        backgroundColor: 'transparent',
    },
    buttonForm: {
        marginTop: Dimensions.get('window').height * 0.05,
        backgroundColor: '#FF5722',
        width: Dimensions.get('window').width,

        height: Dimensions.get('window').height * 0.08

    },
    txtbuttonForm: {
        color: '#FFFFFF'
    },
    textCardItem: {
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: Dimensions.get('window').height * 0.05
    },
    textCardPerson: {
        fontSize: 15,
        fontWeight: 'bold'
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


});