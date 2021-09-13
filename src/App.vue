<template>
    <div class="">
        <main-menu />
        <div class="container-xxl my-md-4 bd-layout">
            <router-view />
        </div>
    </div>
</template>

<script>
import MainMenu from 'src/components/MainMenu.vue'

export default {
    name: 'App',
    components: {
        MainMenu
    }
}
</script>

<style>

.container-fluid {
    padding: 0 !important;
    height: 100%;
}
</style>
