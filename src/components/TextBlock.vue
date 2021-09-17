<template>
    <div class="text-space">
        <p class="small">
            <slot name="head"></slot>
        </p>
        <heading>
            <template v-slot:heading>
                <slot name="heading">Heading</slot>
            </template>
        </heading>
        <slot name="paragraph">Paragraph</slot>
    </div>
</template>

<script>
import Heading from './Heading.vue'
export default {
    components: { Heading },
    name: 'text-block'
}
</script>

<style scoped>
.text-space {
    border: 1px solid gray;
    border-radius: 20px;
    padding: 0.7em 2em 2em 2em;
    background-color: white;
}

@media (max-width: 768px) {
    .text-space {
        padding: 0 1.2em 1.2em 1.2em;
    }
}

@media (max-width: 768px) {
    .small {
        padding-top: 0.9em;
    }
}
</style>
