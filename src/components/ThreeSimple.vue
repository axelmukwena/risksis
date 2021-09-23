<template>
    <div id="3d-graph"></div>
</template>

<script>
import ForceGraph3D from '3d-force-graph'

export default {
    name: 'three-simple',
    data() {
        return {
            data: [...Array(10).keys()].map(i => ({ id: i })),
            keys: [...Array(10).keys()],
            gData: null
        }
    },
    methods: {
        setUp() {
            // Random tree
            const N = 10
            this.gData = {
                nodes: [...Array(N).keys()].map(i => ({ id: i })),
                links: [...Array(N).keys()]
                    .filter(id => id)
                    .map(id => ({
                        source: id,
                        target: Math.round(Math.random() * (id - 1))
                    }))
            }

            var wh = this.getSize()
            ForceGraph3D()(document.getElementById('3d-graph'))
                .width(wh[0])
                .height(wh[1])
                .zoomToFit(2, 500, node => true)
                .graphData(this.gData)
        },
        getSize() {
            var w = document.body.clientWidth
            var h = document.body.clientHeight
            return [w - 150, h - 200]
        }
    },
    mounted() {
        this.setUp()
        console.log(this.gData)
    }
}
</script>

<style scoped></style>
