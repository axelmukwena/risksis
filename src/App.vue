<template>
    <div class="">
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
@media (max-width: 768px) {
    .container-xxl {
        padding: 0.75rem;
    }
}

@media (min-width: 768px) {
    .my-md-4 {
        margin-top: 3em !important;
        margin-bottom: 1.5rem !important;
    }
}
</style>
