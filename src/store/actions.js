import types from './mutations-types'

export default actions = {
	[types.SET_LANGUAGE](state,language){
		state.commit('language')
	}
}