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

Vue.use(mdiVue, { icons: mdijs })
Vue.use(VWave)
Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$menuItems = [
    {
        title: 'Products & Services',
        path: '/about',
        id: 'products',
        subItems: [
            { title: 'View All', path: '/about' },
            { title: '$hr' }, // Horizontal Divider
            { title: 'Data', path: '/' },
            { title: 'Infrastructure', path: '/about' },
            { title: 'Research', path: '/' },
            { title: 'Analytics', path: '/about' }
        ]
    },
    { title: 'Three JS', path: '/three', subItems: [] },
    { title: 'Plotly Graph', path: '/plotly', subItems: [] },
    { title: 'Research', path: '/', subItems: [] },
    { title: 'Investors', path: '/about', subItems: [] },
    { title: 'About', path: '/', subItems: [] },
    { title: 'Contact Us', path: '/about', subItems: [] }
]

new Vue({
    VueMeta,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
