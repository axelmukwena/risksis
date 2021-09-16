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
    { title: 'About', path: '/about', subItems: [] },
    { title: 'Careers', path: '/careers', subItems: [] },
    { title: 'Contact Us', path: '/contact', subItems: [] }
]

new Vue({
    VueMeta,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
