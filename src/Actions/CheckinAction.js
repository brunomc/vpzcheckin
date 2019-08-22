import axios from "axios";
//import ls from "local-storage";
//import { push } from "connected-react-router";
import { env } from '../Config/Enviroment';
import { Actions } from "react-native-router-flux";

export const setConvidado = (data) => {
    return { type: 'SET_CONVIDADO', payload: data }
}
export const validateQrCode = (data) => {

    loading(true)
    setConvidado(
        {
            nome: "",
            cpf: "",
            brindes: "",
            convertidos: "",
            data: "",
            lista: "",
            total: ""
        }
    )
    return dispatch => {
        axios.post(env().url + "/checkin", data)
            .then(res => {
                console.log(res);
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
    return ({ type: 'LOGIN_LOADING', payload: option })
}
const validateQrCodeSuccess = (res, dispatch) => {
    loading(false)
    dispatch({ type: 'VALIDATE_QRCODE', payload: res.data })
    Actions.resultadoCheckin();
}
const validateQrCodeError = (res, dispatch) => {
    loading(false)
    dispatch({ type: 'VALIDATE_QRCODE_ERROR', payload: res.data.erro ? res.data.erro : "Não foi possível validar QRCODE" })
    Actions.resultadoCheckin();
}
