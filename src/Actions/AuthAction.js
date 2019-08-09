import axios from "axios";
//import ls from "local-storage";
//import { push } from "connected-react-router";
import { env } from '../Config/Enviroment';


export const login = (data) => {
    console.log(data)
    return dispatch => {
        axios.post(env().url + "/login", data)
            .then(res => {
                console.log('veio', res.data)
                loginSuccess(res, dispatch);
            })
            .catch(res => {
                console.log('nao veio')
                loginError(res, dispatch)
            });
    };
};
const loginSuccess = (res, dispatch) => {
    dispatch({ type: 'LOGIN', payload: res.data })
}
const loginError = (res, dispatch) => {
    dispatch({ type: 'LOGIN_ERROR', payload: res.data })
}
