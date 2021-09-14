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

<style>
@media (max-width: 768px) {
    .container-xxl {
        padding: 0.75rem;
    }
}
</style>
