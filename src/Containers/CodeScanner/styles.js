import { StyleSheet, Dimensions } from 'react-native';
import { metrics, fonts, colors} from '../../Styles';
export default StyleSheet.create({
	container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
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

});