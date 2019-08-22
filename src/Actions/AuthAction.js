import axios from "axios";
//import ls from "local-storage";
//import { push } from "connected-react-router";
import { env } from '../Config/Enviroment';
import { Actions } from "react-native-router-flux";


export const login = (data) => {
    loading(true)
    return dispatch => {
        axios.post(env().url + "/login", data)
            .then(res => {
                //Actions.principal();
                if (res.data.status) {
                    loginSuccess(res, dispatch);
                } else {
                    loginError(res, dispatch)
                }

            })
            .catch(res => {
                res = { ...res, erro: 'Não foi possível realizar o login' }
                loginError(res, dispatch)
            });
    };
};
const loading = (option) => {
    return ({ type: 'LOGIN_LOADING', payload: option })
}
const loginSuccess = (res, dispatch) => {
    loading(false)
    dispatch({ type: 'LOGIN', payload: res.data })
    Actions.principal()
}
const loginError = (res, dispatch) => {
    loading(false)
    dispatch({ type: 'LOGIN_ERROR', payload: res.data.erro ? res.data.erro : "Não foi possível realizar o login" })
}
