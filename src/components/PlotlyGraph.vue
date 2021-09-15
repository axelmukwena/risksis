<template>
    <Plotly :data="data" :layout="layout" :display-mode-bar="true"></Plotly>
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
        }
    },
    mounted() {
        this.getData()
        // console.log('Hey', this.todos.data)
    }
}
</script>
