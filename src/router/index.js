import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/three-gradient',
        name: 'Three',
        component: () => import(/* webpackChunkName: "about" */ '../views/ThreeGrad.vue')
    },
    {
        path: '/plotly',
        name: 'Plotly',
        component: () => import(/* webpackChunkName: "about" */ '../views/Plotly.vue')
    },
    {
        path: '/three-simple',
        name: 'Simple',
        component: () => import(/* webpackChunkName: "about" */ '../views/ThreeSim.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
