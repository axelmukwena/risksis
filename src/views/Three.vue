<template>
    <div class="row">
        <div class="col-sm-6">
            <text-block />
        </div>
        <div class="col-sm-6">
            <three-graph />
        </div>
    </div>
</template>
<script>
import TextBlock from '../components/TextBlock.vue'
import ThreeGraph from '../components/ThreeGraph.vue'

export default {
    name: 'three',
    components: { ThreeGraph, TextBlock }
}
</script>
