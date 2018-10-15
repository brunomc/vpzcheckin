import { StyleSheet, Dimensions } from 'react-native';
import { metrics, fonts, colors} from '../../Styles';
export default StyleSheet.create({
container: {
    width: Dimensions.get('window').width,

},
imageProfileContainer: {
    height: 150,
    borderBottomWidth: 1,
    borderColor: '#d6d7da',
},
imageProfile: {
    flex:1,
   
},
spaceBetweenViews: {
    height: 10
},
containerProfileBody: {
    flex: 10,
    alignItems: 'center' 
},
card: {
    width: '95%',
    backgroundColor: '#1a1a1a',
    alignItems: 'center'
   
},
cardItemHeader: {
    backgroundColor: '#1a1a1a',
   
},
cardItemBody: {
    backgroundColor: '#1a1a1a',

},
cardItemFooter: {
    backgroundColor: '#1a1a1a',

},
textTitleCardItem: {
    fontWeight: 'bold',
    color:'#ffffff'

},
textSubtitleCardItem: {
    fontWeight: 'bold',
    color:'#ffffff',
    fontSize: 25
},
textCardItem: {
    color:'#ffffff'
},
video : {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
}

});