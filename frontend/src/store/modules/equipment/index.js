import axios from '@/util/ajax'

const state = {}

const getters = {}

const mutations = {}

const actions = {
    // 获取权限列表
    getLine(){
        return new Promise((resolve, reject) =>{
            axios({
                url: '/line',
                methods: 'post',
                data: {}
            }).then((res) => {
                // 存储权限列表
                //commit('setList', res.data)
                resolve(res)
            }).catch(() => {
                reject()
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}