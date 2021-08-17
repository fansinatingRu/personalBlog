import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHtml5, faCss3Alt, faVuejs, faJs, faTypo3, faPhp, faSymfony, faGitAlt, faBootstrap, faSass, faYoutube, faTwitter, faInstagram, faPatreon, faLinkedin,faPython,faLinux,faGithubAlt,faImdb,faApple,faWeixin,} from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = true

library.add(
    faHtml5, faCss3Alt, faVuejs, faJs, faTypo3, faPhp, faSymfony, faGitAlt, faBootstrap, faSass,  faYoutube, faTwitter, faInstagram, faPatreon, faLinkedin, faPython ,faApple,
faLinux, faGithubAlt,faImdb,faWeixin
  )

Vue.component('fa-icon', FontAwesomeIcon)
