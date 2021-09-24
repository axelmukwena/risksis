<template>
    <div>
        <div id="connected-graph"></div>
        <div class="graph-menu">
            <p>Hey</p>
        </div>
    </div>
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
            data: graphData.slice(0, 1000),
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

            this.getNeighbors()
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

            const highlightNodes = new Set()
            const highlightLinks = new Set()
            let hoverNode = null

            const container = document.getElementById('connected-graph')
            this.Graph = ForceGraph3D()(container)
                .graphData(this.gData)

                // Node styling
                .nodeVal(7)
                // .nodeAutoColorBy('group')
                // .nodeColor(0x0d75d8)
                .nodeColor(node =>
                    highlightNodes.has(node)
                        ? node === hoverNode
                            ? 'rgb(255,0,0,1)'
                            : 'rgba(255,160,0,0.8)'
                        : 'rgb(13,117,216)'
                )
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

                    this.Graph.cameraPosition(
                        {
                            x: node.x * distRatio,
                            y: node.y * distRatio,
                            z: node.z * distRatio
                        }, // new position
                        node, // lookAt ({ x, y, z })
                        3000 // ms transition duration
                    )
                })
                .onNodeHover(node => {
                    // no state change
                    if (
                        (!node && !highlightNodes.size) ||
                        (node && hoverNode === node)
                    ) {
                        return
                    }

                    highlightNodes.clear()
                    highlightLinks.clear()
                    if (node) {
                        highlightNodes.add(node)
                        node.neighbors.forEach(neighbor =>
                            highlightNodes.add(neighbor)
                        )
                        node.links.forEach(link => highlightLinks.add(link))
                    }

                    hoverNode = node || null

                    this.updateHighlight(this.Graph)
                })
                .onLinkHover(link => {
                    highlightNodes.clear()
                    highlightLinks.clear()

                    if (link) {
                        highlightLinks.add(link)
                        highlightNodes.add(link.source)
                        highlightNodes.add(link.target)
                    }

                    this.updateHighlight(this.Graph)
                })

                // Link Styling
                .linkColor(0x000000)
                .linkOpacity(0.5)
                // .linkWidth(l => l.weight)
                .linkWidth(l => (highlightLinks.has(l) ? 4 : l.weight))
                .linkDirectionalParticles(l => (highlightLinks.has(l) ? 4 : 0))
                .linkDirectionalParticleWidth(4)

                // Layout
                .backgroundColor('#ffffff')
                .width(this.width)
                .height(this.height)
                .showNavInfo(false)

            // Spread nodes a little wider
            this.Graph.d3Force('charge').strength(-200)
        },
        getNeighbors() {
            // cross-link node objects
            this.gData.links.forEach(link => {
                const a = this.getNode(link.source)
                const b = this.getNode(link.target)
                !a.neighbors && (a.neighbors = [])
                !b.neighbors && (b.neighbors = [])
                a.neighbors.push(b)
                b.neighbors.push(a)

                !a.links && (a.links = [])
                !b.links && (b.links = [])
                a.links.push(link)
                b.links.push(link)
            })
        },
        getNode(ts) {
            // https://stackoverflow.com/a/39810268/8050183
            var index = this.gData.nodes.findIndex(function(sub) {
                return sub.id === ts
            })
            return this.gData.nodes[index]
        },
        updateHighlight(Graph) {
            // trigger update of highlighted objects in scene
            Graph.nodeColor(Graph.nodeColor())
                .linkWidth(Graph.linkWidth())
                .linkDirectionalParticles(Graph.linkDirectionalParticles())
        },
        sizes() {
            var sizes = this.$bodyContainerHeight()
            this.width = sizes[0]
            this.height = sizes[1]
        },
        onWindowResize() {
            this.sizes()
            this.Graph.width(this.width)
            this.Graph.height(this.height)
        }
    },
    mounted() {
        this.init()
    },
    destroyed() {
        window.removeEventListener('resize', this.onWindowResize, false)
        this.$fullScreenOff()
    }
}
</script>

<style scoped>
.graph-menu {
    position: absolute;
    margin: auto;
    padding: 10px;
    bottom: 20px;
    right: 40px;
    left: 40px;
    width: 60%;
    height: 120px;
    background-color: rgba(12, 99, 180, 0.795);
    border-radius: 5px;
}
</style>
