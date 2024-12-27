const store=new Vuex.Store({
	state: {
		showLoading: true,
	},
	getters: {},
	mutations: {
		SET_LOADING(state, boo) {
			state.showLoading=boo;
		},
	},
	actions: {
		SET_LOADING_ACTION({ commit }, boo) {
			if (boo) {
				commit("SET_LOADING", boo);
			} else {
				setTimeout(() => {
					commit("SET_LOADING", boo);
				}, 500);
			}

		},
	}
});
