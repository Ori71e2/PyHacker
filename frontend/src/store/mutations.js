import Cookies from 'js-cookie'
import i18n from 'src-util/i18n'

export default {
    changeLang(state, data){
        if(data){
            Cookies.set('lang', data)
            i18n.locale = data
            state.lang = data
        }   
    },
    changeLayout(state, data){
        if(data){
            state.navbarPosition = data
        }
    }
}