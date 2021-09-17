<template>
    <div class="main-container">
        <top-bar />
        <div class="container-xxl my-md-4 bd-layout">
            <router-view />
        </div>
    </div>
</template>

<script>
import TopBar from './components/TopBar.vue'

export default {
    name: 'App',
    components: {
        TopBar
    }
}
</script>

<style scoped>
@media (min-width: 768px) {
    .my-md-4 {
        margin-top: 0 !important;
        margin-bottom: 1.5rem !important;
    }
}
</style>
