import Vue from 'vue'
import App from './App.vue'

import "@fontsource/poppins"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"


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