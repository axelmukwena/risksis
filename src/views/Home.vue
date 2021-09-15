<template>
    <div class="row">
        <graph />
        <div class="col"></div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap'
import Graph from '../components/Graph.vue'

export default {
    components: { Graph },
    name: 'home',
    modal: null,
    mounted() {
        this.modal = new Modal(this.$refs.exampleModal)
    }
}
</script>
