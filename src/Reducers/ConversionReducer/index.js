const INITIAL_STATE = {
	conversions: {
		titulo: "",
		total: 0
	},
	erro: "",
	conversion: {
		nome: "",
		cpf: "",
		data: "",
		lista: "",
		tipo: "",
		valor: ""
	}
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GET_CONVERSIONS': {
			return { ...state, conversions: action.payload.convertidos }
		}
		case 'GET_CONVERSIONS_ERROR': {
			return { ...state, erro: action.payload.erro }
		}
		case 'GET_CONVERSION': {
			return { ...state, conversion: action.payload.convertido }
		}
		case 'SET_CONVERSION': {
			return { ...state, conversion: action.payload }
		}
		case 'GET_CONVERSION_ERROR': {
			return { ...state, erro: action.payload.erro }
		}
		default: {
			return state;
		}

	}
	return state;
}