const INITIAL_STATE = {
	convidado: {
		nome: "",
		cpf: "",
		brindes: "",
		convertidos: "",
		data: "",
		lista: "",
		tipo: "",
		valor: "",
		total: ""
	},
	erro: "",
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'VALIDATE_QRCODE': {
			return { ...state, convidado: action.payload.convidado }
		}
		case 'SET_CONVIDADO': {
			return { ...state, convidado: action.payload }
		}
		case 'VALIDATE_QRCODE_ERROR': {
			return { ...state, erro: action.payload }
		}
		default: {
			return state;
		}

	}
	return state;
}