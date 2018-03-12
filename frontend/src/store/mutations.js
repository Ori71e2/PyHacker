// root level mutations
// Change Language And Theme

import Cookies from 'js-cookie'
import i18n from '@/util/i18n'

export default {
    // Language Change
    changeLang(state, data){
        if(data){
            Cookies.set('lang', data)
            i18n.locale = data
            state.lang = data
        }   
    },
    /*
    // Theme Change
    changeLayout(state, data){
        if(data){
            state.navbarPosition = data
        }
    }
    */
}