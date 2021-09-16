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
    padding: 0.7em 2em 2em 2em;
    background-color: white;
}

@media (max-width: 768px) {
    .text-space {
        padding: 1.5em;
    }
}
</style>
