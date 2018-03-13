// root level mutations
// Change Language And Theme
import {
    CHANGE_LANG,
    CHANGE_LAYOUT,
} from './mutation-types.js'

import Cookies from 'js-cookie'
import i18n from '@/util/i18n'

export default {
    // Language Change
    [CHANGE_LANG](state, data){
        if(data){
            Cookies.set('lang', data)
            i18n.locale = data
            state.lang = data
        }   
    },
    /*
    // Theme Change
    [CHANGE_LAYOUT](state, data){
        if(data){
            state.navbarPosition = data
        }
    }
    */
}