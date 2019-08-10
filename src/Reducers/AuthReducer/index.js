const INITIAL_STATE = {
	usuario: {},
	logged: false,
	loading: false,
	erro: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'LOGIN': {
			console.log('usuario no reduz', action.payload)
			return { ...state, usuario: action.payload.usuario }
		}
		case 'LOGIN_ERROR': {
			console.log(action.payload)
			return { ...state, erro: action.payload }
		}
		case 'LOGIN_LOADING': {
			console.log('reducer', action.payload)
			return { ...state, loading: action.payload }
		}
		default: {
			return state;
		}

	}
	return state;
}