import Vue from 'vue'
import App from './App.vue'

/* Import Poppins font */
import "@fontsource/poppins"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"


/* Import Montserrat Font */
import "@fontsource/montserrat"
import "@fontsource/montserrat/200.css"
import "@fontsource/montserrat/300.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/800.css"
import "@fontsource/montserrat/900.css"

import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faUserSecret, faMagnifyingGlass, faClock, faPhone, faEnvelope, faChevronDown, faGraduationCap, faAward, faPenToSquare, faLock, faArrowRight, faSitemap, faChartSimple, faBriefcase, faPlaneUp, faGlobe, faFolderOpen, faLocationDot, faChevronRight } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(faUserSecret, faMagnifyingGlass, faClock, faPhone, faEnvelope, faFacebookF, faLinkedinIn, faTwitter, faChevronDown, faGraduationCap, faAward, faPenToSquare, faLock, faArrowRight, faSitemap, faChartSimple, faBriefcase, faPlaneUp, faGlobe, faFolderOpen, faLocationDot, faChevronRight)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


const bootstrap = require('bootstrap')
Vue.use(bootstrap)


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')