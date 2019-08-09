const INITIAL_STATE ={
	cardnf:{},
	cardnfError:"",
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type){
		case 'modify_conteudonf': {
			return { ...state, cardnf: action.payload}
		}
		case 'modify_conteudonf_error': {
			return { ...state, cardnfError: action.payload}
		}
		default: {
			return state;
		}

	}
	return state;
}