<template>
    <div id="3d-graph"></div>
</template>

<script>
import ForceGraph3D from '3d-force-graph'

export default {
    name: 'three',
    methods: {
        setUp() {
            // Random tree
            const N = 300
            const gData = {
                nodes: [...Array(N).keys()].map(i => ({ id: i })),
                links: [...Array(N).keys()]
                    .filter(id => id)
                    .map(id => ({
                        source: id,
                        target: Math.round(Math.random() * (id - 1))
                    }))
            }

            var wh = this.getSize()
            console.log(wh)
            ForceGraph3D()(document.getElementById('3d-graph'))
                .width(wh[0])
                .height(630)
                .zoomToFit(2, 500, node => true)
                .graphData(gData)
        },
        getSize() {
            var w = document.body.clientWidth
            var h = document.body.clientHeight
            return [w - 150, h - 20]
        }
    },
    mounted() {
        this.setUp()
    }
}
</script>

<style scoped></style>
