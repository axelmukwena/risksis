import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/products',
        name: 'products',
        component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
    },
    {
        path: '/research',
        name: 'research',
        component: () => import(/* webpackChunkName: "about" */ '../views/Research.vue')
    },
    {
        path: '/investors',
        name: 'investors',
        component: () => import(/* webpackChunkName: "about" */ '../views/Investors.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/careers',
        name: 'careers',
        component: () => import(/* webpackChunkName: "about" */ '../views/Careers.vue')
    },
    {
        path: '/contact',
        name: 'contact-us',
        component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    },
    {
        path: '/three-scene',
        name: 'three-scene',
        component: () => import(/* webpackChunkName: "about" */ '../views/ThreeScene.vue')
    },
    {
        path: '/plotly',
        name: 'plotly',
        component: () => import(/* webpackChunkName: "about" */ '../views/Plotly.vue')
    },
    {
        path: '/three-simple',
        name: 'simple',
        component: () => import(/* webpackChunkName: "about" */ '../views/ThreeSim.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
