// Register Global Components
import Vue from 'vue'

import PyHasPermission from './has-permission/index.js'

// 
const components = [
    PyHasPermission
]

components.map((com) => {
    Vue.use(com)
})

export default components