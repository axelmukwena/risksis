<template>
    <div class="body">
        <div class="row">
            <div class="col-sm-6">
                <plotly-graph />
            </div>
            <div class="col-sm-6">
                <text-block>
                    <template v-slot:head>
                        <p>Consistent visuals on wider screen.</p>
                    </template>

                    <template v-slot:heading>
                        Surface Plot With Contours using
                        <a
                            href="https://github.com/plotly/plotly.js"
                            target="_blank"
                        >
                            Plotly
                        </a>
                        with a Vue.js wrapper,
                        <a
                            href="https://github.com/David-Desmaisons/vue-plotly"
                            target="_blank"
                        >
                            Vue-Plotly
                        </a>
                    </template>
                    <template v-slot:paragraph>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fusce et pretium lectus, eget condimentum mi.
                            In hac habitasse platea dictumst. Aenean et odio sed
                            velit tristique bibendum. Duis sit amet urna non
                            massa pulvinar convallis a eu massa. Sed porttitor
                            ligula non nibh elementum convallis.
                        </p>

                        <p>
                            Nullam eros enim, hendrerit ac viverra a, tempor at
                            magna. Nullam sagittis, sapien nec accumsan sodales,
                            ligula libero bibendum odio, at ornare ipsum purus
                            eu nunc.
                        </p>
                        <p>
                            Sed ornare lorem nec massa ultricies consectetur.
                            Donec semper ornare dolor eu pulvinar. Phasellus
                            congue ut nunc ac pretium.
                        </p>
                    </template>
                </text-block>
            </div>
        </div>
        <hr style="margin: 3em 0;" />
        <div class="row">
            <div class="col-sm-6">
                <text-block>
                    <template v-slot:head>
                        <p>Consistent visuals on wider screen.</p>
                    </template>

                    <template v-slot:heading>
                        Ribbon Plots with
                        <a
                            href="https://github.com/plotly/plotly.js"
                            target="_blank"
                        >
                            Plotly
                        </a>
                    </template>
                    <template v-slot:paragraph>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fusce et pretium lectus, eget condimentum mi.
                            In hac habitasse platea dictumst. Aenean et odio sed
                            velit tristique bibendum. Duis sit amet urna non
                            massa pulvinar convallis a eu massa. Sed porttitor
                            ligula non nibh elementum convallis.
                        </p>
                        <p>
                            Nullam eros enim, hendrerit ac viverra a, tempor at
                            magna. Nullam sagittis, sapien nec accumsan sodales,
                            ligula libero bibendum odio, at ornare ipsum purus
                            eu nunc. Sed ornare lorem nec massa ultricies
                            consectetur. Donec semper ornare dolor eu pulvinar.
                            Phasellus congue ut nunc ac pretium. Sed ornare
                            lorem nec massa ultricies consectetur. Donec semper
                            ornare dolor eu pulvinar. Phasellus congue ut nunc
                            ac pretium.
                        </p>
                        <p>
                            Sed ornare lorem nec massa ultricies consectetur.
                            Donec semper ornare dolor eu pulvinar. Phasellus
                            congue ut nunc ac pretium. Sed ornare lorem nec
                            massa ultricies consectetur. Donec semper ornare
                            dolor eu pulvinar. Phasellus congue ut nunc ac
                            pretium. Sed ornare lorem nec massa ultricies
                            consectetur. Donec semper ornare dolor eu pulvinar.
                            Phasellus congue ut nunc ac pretium.
                        </p>
                    </template>
                </text-block>
            </div>
            <div class="col-sm-6">
                <plotly-graph-second />
            </div>
        </div>
    </div>
</template>

<script>
import PlotlyGraph from '../components/PlotlyGraph.vue'
import PlotlyGraphSecond from '../components/PlotlyGraphSecond.vue'
import TextBlock from '../components/TextBlock.vue'

export default {
    components: {
        PlotlyGraph,
        TextBlock,
        PlotlyGraphSecond
    }
}
</script>

<style scoped>
.body {
    padding: 1.5em 1em;
}
</style>
