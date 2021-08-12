import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHtml5, faCss3Alt, faVuejs, faJs, faTypo3, faPhp, faSymfony, faGitAlt, faBootstrap, faSass, faYoutube, faTwitter, faInstagram, faPatreon, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

library.add(
    faHtml5, faCss3Alt, faVuejs, faJs, faTypo3, faPhp, faSymfony, faGitAlt, faBootstrap, faSass,  faYoutube, faTwitter, faInstagram, faPatreon, faLinkedin
  )

Vue.component('fa-icon', FontAwesomeIcon)
