import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/scss/bootstrap.scss'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import mdiVue from 'mdi-vue/v2'
import * as mdijs from '@mdi/js'
import VueMeta from 'vue-meta'
import VWave from 'v-wave'
import axios from 'axios'
import Particles from 'particles.vue'

Vue.use(mdiVue, { icons: mdijs })
Vue.use(VWave)
Vue.use(Particles)

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.prototype.$debounce = function(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}

// Menu links
Vue.prototype.$menuItems = [
    {
        title: 'Products & Services',
        path: '/products',
        id: 'products',
        subItems: [
            { title: 'View All', path: '/products' },
            { title: '$hr' }, // Horizontal Divider
            { title: 'Data', path: '/products' },
            { title: 'Infrastructure', path: '/products' },
            { title: 'Research', path: '/products' },
            { title: 'Analytics', path: '/products' }
        ]
    },
    { title: 'Research', path: '/research', subItems: [] },
    { title: 'Investors', path: '/investors', subItems: [] },
    { title: 'Careers', path: '/careers', subItems: [] },
    { title: 'About', path: '/about', subItems: [] },
    { title: 'Contact Us', path: '/contact', subItems: [] }
]

// Toggle to show top-bar
Vue.prototype.$fullScreenOn = function() {
    document.getElementById('main-top-bar').style.display = 'none'
    document.getElementById('content-container').className = ''
}
Vue.prototype.$fullScreenOff = function() {
    document.getElementById('main-top-bar').style.display = 'block'
    document.getElementById('content-container').className = 'container-xxl my-md-4 bd-layout'
}

// To adjust the height for the scenes. Do not remove
Vue.prototype.$bodyContainerHeight = function() {
    const windowHeight = window.innerHeight
    // const mainContainerHeight = document.getElementById('main-container').clientHeight
    const topBarHeight = document.getElementById('main-top-bar').clientHeight
    const h = (windowHeight - topBarHeight).toString() + 'px'
    document.getElementById('content-container').style.height = h
    var width = document.getElementById('content-container').clientWidth
    var height = document.getElementById('content-container').clientHeight
    return [width, height]
}

new Vue({
    VueMeta,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
