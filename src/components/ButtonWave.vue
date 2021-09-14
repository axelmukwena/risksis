<template>
    <button
        v-wave="{
            color: '#0054aa',
            easing: 'ease-out',
            initialOpacity: 0.5,
            finalOpacity: 0.1,
            cancellationPeriod: 75
        }"
        type="button"
        class="btn custom-btn"
    >
        <slot> Custom Text </slot>
    </button>
</template>

<script>
export default {
    name: 'button-wave'
}
</script>

<style scoped>
.custom-btn {
    color: #0054aa;
    font-weight: 500;
    font-size: 0.9em;
    border: 2px solid #0054aa;
    min-width: 6em;
}

.custom-btn:hover {
    color: #0054aa;
    background-color: #e6f3ff;
}

.custom-btn:focus {
    outline: none !important;
    box-shadow: none !important;
}
</style>
