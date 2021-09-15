<template>
    <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
</template>

<script>
import { Plotly } from 'vue-plotly'

export default {
    name: 'plotly-graph',
    components: {
        Plotly
    },
    data() {
        return {
            url1:
                'https://raw.githubusercontent.com/plotly/datasets/master/3d-ribbon.json',
            url:
                'https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv',
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
        getValuesFromLine(line) {
            var values = line[0].split(',')
            values = values.map(function(value) {
                return value.replace(/"/g, '')
            })
            return values
        },
        async getData() {
            try {
                const response = await this.$http.get(this.url)
                this.todos = response.data
            } catch (error) {
                console.log(error)
            }
            this.todos = this.todos.split('\n')
            this.todos.shift()
            var temp = []
            for (var i = 0; i < this.todos.length; i++) {
                var t = this.todos[i]
                t = t.split(',')
                t = t.map(function(x) {
                    return parseFloat(x)
                })
                temp.push(t)
            }
            this.todos = temp

            this.data = [
                {
                    z: this.todos,
                    type: 'surface',
                    contours: {
                        z: {
                            show: true,
                            usecolormap: true,
                            highlightcolor: '#42f462',
                            project: { z: true }
                        }
                    }
                }
            ]

            this.layout = {
                title: 'Mt Bruno Elevation With Projected Contours',
                scene: { camera: { eye: { x: 1.87, y: 0.88, z: -0.64 } } },
                autosize: false,
                width: 500,
                height: 500,
                margin: {
                    l: 65,
                    r: 50,
                    b: 65,
                    t: 90
                }
            }
        },
        async getDatas() {
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
