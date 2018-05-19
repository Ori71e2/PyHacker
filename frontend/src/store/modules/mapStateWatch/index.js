
const state = {
    mapNav: {
        flag: false, 
        origin: [],
        destination: []
    }
}

const getters = {
    getMapNavFlag() {
        return state.mapNav.flag;
    }
}

const mutations = {
    setMapNavFlag(flag) {
        if (flag == true) {
            state.mapNav.flag = true;
        } else {
            state.mapNav.flag = false;
        }
    },
    setMapNavOrigin(origin) {
        state.mapNav.origin = origin;
    },
    setMapNavDestination(destination) {
        state.mapNav.destination = destination;
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}