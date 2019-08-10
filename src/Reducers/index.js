import { combineReducers } from 'redux';
import QRScanReducer from './QRScanReducer'
import AuthReducer from './AuthReducer'
import ConversionReducer from './ConversionReducer'
export default combineReducers({
	QRScanReducer: QRScanReducer,
	AuthReducer: AuthReducer,
	ConversionReducer: ConversionReducer
});