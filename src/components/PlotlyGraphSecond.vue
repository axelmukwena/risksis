<template>
    <Plotly :data="data" :layout="layout" :display-mode-bar="true"></Plotly>
</template>

<script>
import { Plotly } from 'vue-plotly'

export default {
    name: 'plotly-graph-second',
    components: {
        Plotly
    },
    data() {
        return {
            url:
                'https://raw.githubusercontent.com/plotly/datasets/master/3d-ribbon.json',
            todos: [],
            data: [],
            datas: [
                {
                    x: [1, 2, 3, 4],
                    y: [10, 15, 13, 17],
                    type: 'scatter'
                }
            ],
            layout: {
                title: 'Loading...'
            }
        }
    },
    methods: {
        async getData() {
            try {
                const response = await this.$http.get(this.url)
                this.todos = response.data
            } catch (error) {
                console.log(error)
            }

            var trace1 = {
                x: this.todos.data[0].x,
                y: this.todos.data[0].y,
                z: this.todos.data[0].z,
                name: '',
                colorscale: this.todos.data[0].colorscale,
                type: 'surface',
                showscale: false
            }
            var trace2 = {
                x: this.todos.data[1].x,
                y: this.todos.data[1].y,
                z: this.todos.data[1].z,
                name: '',
                colorscale: this.todos.data[1].colorscale,
                type: 'surface',
                showscale: false
            }
            var trace3 = {
                x: this.todos.data[2].x,
                y: this.todos.data[2].y,
                z: this.todos.data[2].z,
                colorscale: this.todos.data[2].colorscale,
                type: 'surface',
                showscale: false
            }
            var trace4 = {
                x: this.todos.data[3].x,
                y: this.todos.data[3].y,
                z: this.todos.data[3].z,
                colorscale: this.todos.data[3].colorscale,
                type: 'surface',
                showscale: false
            }
            var trace5 = {
                x: this.todos.data[4].x,
                y: this.todos.data[4].y,
                z: this.todos.data[4].z,
                colorscale: this.todos.data[4].colorscale,
                type: 'surface',
                showscale: false
            }
            var trace6 = {
                x: this.todos.data[5].x,
                y: this.todos.data[5].y,
                z: this.todos.data[5].z,
                colorscale: this.todos.data[5].colorscale,
                type: 'surface',
                showscale: false
            }
            var trace7 = {
                x: this.todos.data[6].x,
                y: this.todos.data[6].y,
                z: this.todos.data[6].z,
                name: '',
                colorscale: this.todos.data[6].colorscale,
                type: 'surface',
                showscale: false
            }

            this.data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7]

            this.layout = {
                title: '3D Graph Plotting Trial',
                showlegend: false,
                autosize: true,
                width: 600,
                height: 600,
                scene: {
                    xaxis: { title: 'Sample #' },
                    yaxis: { title: 'Wavelength' },
                    zaxis: { title: 'OD' }
                }
            }
        }
    },
    mounted() {
        this.getData()
        // console.log('Hey', this.todos.data)
    }
}
</script>
