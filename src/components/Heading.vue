<template>
    <h2 class="heading">
        <slot name="heading">
            Title
        </slot>
    </h2>
</template>

<script>
export default {
    name: 'heading'
}
</script>

<style scoped>
.heading {
    font-weight: bold;
    padding-bottom: 10px;
}
</style>
