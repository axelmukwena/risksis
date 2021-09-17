<template>
    <div class="body">
        <div class="row g-4 justify-content-center">
            <div class="col-md-9">
                <heading>
                    <template v-slot:heading>
                        Basic Algorithmic Research
                    </template>
                </heading>
                <p>
                    Our algorithmic trading strategy are based on sophisticated
                    mathematical models. A team of statisticians and financial
                    practitioners continuously improves the models and creates
                    news ones. Our models evolve as financial markets are
                    interacted in a dynamic ecosystem. Our modeling approach
                    keep tracks of the statistical estimation error and
                    re-calibrate and optimize real time. The parameters of the
                    models are calibrated by terabyte of day-to-day global
                    market tick-data.
                </p>
                <p>
                    Market Micro-structure tuning are incorporated by our
                    experienced traders to adapt the variations across asset
                    classes and regions.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from '../components/Heading.vue'
export default {
    name: 'research',
    components: { Heading }
}
</script>

<style scoped>
.body {
    padding: 1.5em 1em;
}
</style>
