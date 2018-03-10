// 国际化设置
import Vue from 'vue';
import VueI18n from 'vue-i18n'

import ElementUI from 'element-ui'
import enElement from 'element-ui/lib/locale/lang/en'
import zhElement from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'src-lang/en'
import zhLocale from 'src-lang/zh-cn'

const messages = {
    en: {
        global: {
            ...enLocale         // import enLocal
        },
        ...enElement            // import ebElement
    },
    zh: {
        global: {
            ...zhLocale         // import zhLocal
        },
        ...zhElement            // import zhElement
    }
}


Vue.use(VueI18n)

const i18n = new VueI18n({
    // current language
    locale: 'en', 
    // default language, 'en' is used if If there is no matching item in locale
    fallbackLocale: 'en',
    messages
})

Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value)                // I dont't know why, but it workds
})

export default i18n