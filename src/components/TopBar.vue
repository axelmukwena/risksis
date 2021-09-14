<template>
    <div>
        <main-menu class="d-none d-md-block" />
        <mobile-menu class=" d-block d-md-none" />
    </div>
</template>

<script>
import MainMenu from './MainMenu.vue'
import MobileMenu from './MobileMenu.vue'

export default {
    name: 'App',
    components: {
        MainMenu,
        MobileMenu
    }
}
</script>

<style scoped></style>
