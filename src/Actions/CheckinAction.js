import axios from "axios";
//import ls from "local-storage";
//import { push } from "connected-react-router";
import { env } from '../Config/Enviroment';
import { Actions } from "react-native-router-flux";


export const validateQrCode = (data) => {
    loading(true)
    return dispatch => {
        axios.post(env().url + "/xxx", data)
            .then(res => {
                //Actions.principal();
                if (res.data.status) {
                    validateQrCodeSuccess(res, dispatch);
                } else {
                    validateQrCodeError(res, dispatch)
                }

            })
            .catch(res => {
                validateQrCodeError(res, dispatch)
            });
    };
};
const loading = (option) => {
    console.log('carregando', option)
    return ({ type: 'LOGIN_LOADING', payload: option })
}
const validateQrCodeSuccess = (res, dispatch) => {
    loading(false)
    dispatch({ type: 'VALIDATE_QRCODE', payload: res.data })
    Actions.principal()
}
const validateQrCodeError = (res, dispatch) => {
    loading(false)
    dispatch({ type: 'VALIDATE_QRCODE_ERROR', payload: res.data.erro ? res.data.erro : "Não foi possível validar QRCODE" })
}
