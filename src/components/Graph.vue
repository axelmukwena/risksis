<template>
    <div class="row">
        <div class="col">
            <Plotly
                :data="data"
                :layout="layout"
                :display-mode-bar="true"
            ></Plotly>
        </div>
        <div class="col text-space">
            <h2 class="title">
                Surface Plot With Contours using
                <a href="https://github.com/plotly/plotly.js" target="_blank">
                    Plotly
                </a>
                with a Vue.js wrapper,
                <a
                    href="https://github.com/David-Desmaisons/vue-plotly"
                    target="_blank"
                >
                    Vue-Plotly
                </a>
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et pretium lectus, eget condimentum mi. In hac habitasse platea
                dictumst. Aenean et odio sed velit tristique bibendum. Duis sit
                amet urna non massa pulvinar convallis a eu massa. Sed porttitor
                ligula non nibh elementum convallis.
            </p>

            <p>
                Nullam eros enim, hendrerit ac viverra a, tempor at magna.
                Nullam sagittis, sapien nec accumsan sodales, ligula libero
                bibendum odio, at ornare ipsum purus eu nunc.
            </p>
            <p>
                Nam porta mauris vitae enim mollis volutpat. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Sed ornare lorem nec massa ultricies consectetur. Donec
                semper ornare dolor eu pulvinar. Phasellus congue ut nunc ac
                pretium. Cras pellentesque sem aliquet erat aliquam, venenatis
                viverra nisl mattis.
            </p>
        </div>
    </div>
</template>

<script>
import { Plotly } from 'vue-plotly'

export default {
    name: 'graph',
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

<style scoped>
.title {
    font-weight: bold;
    padding-bottom: 10px;
}

.text-space {
    border: 1px solid gray;
    border-radius: 20px;
    padding: 2em;
}
</style>
