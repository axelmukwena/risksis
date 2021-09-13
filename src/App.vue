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
    components: {
        MainMenu
    }
}
</script>
