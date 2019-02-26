import types from './mutations-types'
export let mutations = {
	[types.SET_LANGUAGE](state,language){
		state.language = language;
	}
}


