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

Vue.use(mdiVue, {
    icons: mdijs
})
Vue.use(VWave)

Vue.config.productionTip = false

new Vue({
    VueMeta,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
