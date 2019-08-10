const INITIAL_STATE = {
	conversions: {
		titulo: "",
		imagem: "",
		total: 0
	},
	erro: "",
	conversion: {}
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
			console.log(action.payload)
			return { ...state, conversion: action.payload.convertido }
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