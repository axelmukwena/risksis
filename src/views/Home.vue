<template>
    <div class="page-container">
        <background class="background"></background>
        <div class="body">
            <div class="row g-4">
                <div class="col-sm-4">
                    <text-block class="text-block">
                        <template v-slot:heading>
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
                <div class="col-sm-4">
                    <text-block class="text-block">
                        <template v-slot:heading>
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
                            is a standalone Javascript data visualization
                            library, and it also powers the Python and R modules
                            named Plotly.py and Plotly.r
                        </template>
                    </text-block>
                </div>
                <div class="col-sm-4">
                    <text-block class="text-block">
                        <template v-slot:heading>
                            <router-link to="/three-scene">
                                ThreeJS
                            </router-link>
                            Scene
                        </template>
                        <template v-slot:paragraph>
                            This will demonstrate the implementation of the
                            <a
                                href="https://threejs.org/docs/index.html"
                                target="_blank"
                            >
                                ThreeJS </a
                            >
                            Library
                        </template>
                    </text-block>
                </div>
            </div>
            <div class="row g-4">
                <div class="col"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap'
import TextBlock from '../components/TextBlock.vue'
import Background from '../components/Background.vue'

export default {
    components: { TextBlock, Background },
    name: 'home',
    modal: null,
    mounted() {
        this.modal = new Modal(this.$refs.exampleModal)
    }
}
</script>

<style scoped>
.body {
    padding: 1.5em 1em;
}
.custom-title {
    font-weight: bold;
    color: white;
    font-size: 5em;
    width: 500px;
}

.text-block {
    border: 0;
}
</style>
