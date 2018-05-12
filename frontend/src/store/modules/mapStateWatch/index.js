
const state = {
    mapNav: {
        state: false,
        
        origin: [],
        destination: []
    }
}

const getters = {
    getMapNavState() {
        return state.mapNav.state;
    }
}

const mutations = {
    setMapNavState(state) {
        if (state == true) {
            state.mapNav.state = true;
        } else {
            state.mapNav.state = false;
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