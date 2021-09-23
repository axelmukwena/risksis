<template>
    <div id="connected-graph"></div>
</template>

<script>
// import * as THREE from 'three'
import ForceGraph3D from '3d-force-graph'
import graphData from '../assets/data/graph_data.json'

export default {
    name: 'graph',
    components: {},
    data() {
        return {
            data: graphData.slice(0, 100),
            nodeIDs: [],
            myNodes: [],
            myLinks: [],
            width: null,
            height: null
        }
    },
    created() {
        this.$fullScreenOn()
    },
    methods: {
        init() {
            this.processData()
            this.gData = {
                nodes: this.myNodes,
                links: this.myLinks
            }

            this.render()
            window.addEventListener('resize', this.onWindowResize, false)
        },
        processData() {
            // Register all arrays
            for (var i = 0; i < this.data.length; i++) {
                this.nodeIDs.push(this.data[i][0])
            }

            // Append nodes and links their properties
            for (i = 0; i < this.data.length; i++) {
                this.myNodes.push({
                    id: this.data[i][0],
                    name: this.data[i][3],
                    group: Math.floor(Math.random() * 3)
                })

                var targets = this.data[i][1].slice(0, 5)
                var weights = this.data[i][2].slice(0, 5)
                for (var j = 0; j < targets.length; j++) {
                    if (this.nodeIDs.includes(targets[j])) {
                        this.myLinks.push({
                            source: this.data[i][0],
                            target: targets[j],
                            weight: weights[j]
                        })
                    }
                }
            }
        },
        render() {
            this.sizes()

            const container = document.getElementById('connected-graph')
            const Graph = ForceGraph3D()(container)
                .graphData(this.gData)

                // Node styling
                .nodeVal(7)
                .nodeAutoColorBy('group')
                // .nodeColor(0x0d75d8)
                .nodeOpacity(1)
                .nodeResolution(20)
                .nodeLabel(
                    n =>
                        `<span style="background: black; padding: 5px; border-radius: 4px;">${n.name}</span>`
                )
                .onNodeClick(node => {
                    // Aim at node from outside it
                    const distance = 40
                    const distRatio =
                        1 + distance / Math.hypot(node.x, node.y, node.z)

                    Graph.cameraPosition(
                        {
                            x: node.x * distRatio,
                            y: node.y * distRatio,
                            z: node.z * distRatio
                        }, // new position
                        node, // lookAt ({ x, y, z })
                        3000 // ms transition duration
                    )
                })

                // Link Styling
                .linkColor(0x000000)
                .linkOpacity(0.5)
                .linkWidth(l => l.weight)

                // Layout
                .backgroundColor('#ffffff')
                .width(this.width)
                .height(this.height)

            // Spread nodes a little wider
            Graph.d3Force('charge').strength(-200)
        },
        sizes() {
            var sizes = this.$bodyContainerHeight()
            this.width = sizes[0]
            this.height = sizes[1]
        },
        onWindowResize() {
            this.render()
        }
    },
    mounted() {
        this.init()
        // console.log(this.myNodes)
    },
    destroyed() {
        window.removeEventListener('resize', this.onWindowResize, false)
        this.$fullScreenOff()
    }
}
</script>
