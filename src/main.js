import Vue from 'vue'
import App from './App.vue'

const bootstrap = require('bootstrap')
Vue.use(bootstrap)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faArrowRight, faArrowDown, faBell, faPlay, faCircleInfo, faPlus } from '@fortawesome/free-solid-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faMagnifyingGlass, faArrowRight, faArrowDown, faBell, faPlay, faCircleInfo, faPlus)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')