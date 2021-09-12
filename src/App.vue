<template>
    <div>
        <main-menu />
        <div class="container-xxl my-md-4 bd-layout">
            <router-view />
        </div>
    </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
    name: 'App',
    metaInfo: {
        title: 'My Great Website Title',
        titleTemplate: 'My Website | %s'
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'The website for my organization' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    components: {
        MainMenu
    }
}
</script>
