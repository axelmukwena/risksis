<template>
    <div id="main-container" class="main-container">
        <top-bar id="main-top-bar" />
        <div id="content-container" class="container-xxl my-md-4 bd-layout">
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
    },
    data() {
        return {}
    },
    methods: {},
    mounted() {}
}
</script>

<style scoped>
@media (min-width: 768px) {
    .my-md-4 {
        margin-top: 0 !important;
        margin-bottom: 1.5rem !important;
    }
}

.main-container {
    min-height: 100vh;
}
</style>

<style>
html {
    min-height: 100%;
}

body {
    min-height: 100vh;
}
</style>
