import axios from "axios";
//import ls from "local-storage";
//import { push } from "connected-react-router";
import { env } from '../Config/Enviroment';
import { Actions } from "react-native-router-flux";


export const getConversions = (data) => {
    return dispatch => {
        axios.post(env().url + "/convertidos", data)
            .then(res => {
                console.log(res.data)
                if (res.data.status) {
                    getConversionsSuccess(res, dispatch);
                } else {
                    getConversionsError(res, dispatch)
                }

            })
            .catch(res => {
                getConversionsError(res, dispatch)
            });
    };
};
const getConversionsSuccess = (res, dispatch) => {
    dispatch({ type: 'GET_CONVERSIONS', payload: res.data })
}
const getConversionsError = (res, dispatch) => {
    dispatch({ type: 'GET_CONVERSIONS_ERROR', payload: res.data })
}
export const getConversion = (data) => {
    console.log(data)
    return dispatch => {
        axios.post(env().url + "/convertido", data)
            .then(res => {
                console.log(res.data)
                if (res.data.status) {
                    getConversionSuccess(res, dispatch);
                } else {
                    getConversionError(res, dispatch)
                }

            })
            .catch(res => {
                getConversionError(res, dispatch)
            });
    };
};
const getConversionSuccess = (res, dispatch) => {
    dispatch({ type: 'GET_CONVERSION', payload: res.data })
}
const getConversionError = (res, dispatch) => {
    dispatch({ type: 'GET_CONVERSION_ERROR', payload: res.data })
}