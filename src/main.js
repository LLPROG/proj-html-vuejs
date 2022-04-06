import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faFileLines, faMugSaucer, faCubes, faLaptop, faWrench, faChevronLeft, faAngleRight, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faApple, faWindows, faAndroid, faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faMagnifyingGlass, faFileLines, faApple, faWindows, faAndroid, faMugSaucer, faCubes, faLaptop, faWrench, faFacebookF, faTwitter, faInstagram, faYoutube, faChevronLeft, faAngleRight, faMinus)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
