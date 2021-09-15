<template>
    <div class="row">
        <div class="col-sm-6">
            <text-block>
                <template v-slot:title>
                    A
                    <router-link to="three-simple">
                        simple directed graph
                    </router-link>
                    replica
                </template>

                <template v-slot:paragraph>
                    Interactive, used
                    <a
                        href="https://github.com/vasturiano/3d-force-graph"
                        target="_blank"
                    >
                        3D Force Graph
                    </a>
                    which based on
                    <a href="https://threejs.org/" target="_blank">
                        ThreeJS
                    </a>
                </template>
            </text-block>
        </div>
        <div class="col-sm-6">
            <text-block>
                <template v-slot:title>
                    <router-link to="/plotly">
                        3D Graphs
                    </router-link>
                    using Plotly
                </template>
                <template v-slot:paragraph>
                    Using a vue wrapper,
                    <a
                        href="https://github.com/David-Desmaisons/vue-plotly"
                        target="_blank"
                    >
                        Vue-Plotly </a
                    >,
                    <a
                        href="https://github.com/plotly/plotly.js"
                        target="_blank"
                    >
                        Plotly.js
                    </a>
                    is a standalone Javascript data visualization library, and
                    it also powers the Python and R modules named Plotly.py and
                    Plotly.r
                </template>
            </text-block>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap'
import TextBlock from '../components/TextBlock.vue'

export default {
    components: { TextBlock },
    name: 'home',
    modal: null,
    mounted() {
        this.modal = new Modal(this.$refs.exampleModal)
    }
}
</script>
