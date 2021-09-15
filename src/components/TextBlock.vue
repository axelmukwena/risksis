<template>
    <div class="text-space">
        <p class="small">
            <slot name="head"></slot>
        </p>
        <h2 class="title">
            <slot name="title">
                Title
            </slot>
        </h2>
        <slot name="paragraph">Paragraph</slot>
    </div>
</template>

<script>
export default {
    name: 'text-block'
}
</script>

<style scoped>
.title {
    font-weight: bold;
    padding-bottom: 10px;
}

.text-space {
    border: 1px solid gray;
    border-radius: 20px;
    padding: 2em;
}

@media (max-width: 768px) {
    .text-space {
        padding: 1.5em;
    }
}
</style>
