<template>
    <div id="connected-graph"></div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
    name: 'graph',
    components: {},
    data() {
        return {
            camera: null,
            scene: null,
            controls: null,
            renderer: null,
            mesh: null,
            width: null,
            height: null
        }
    },
    created() {
        this.$fullScreenOn()
    },
    methods: {
        init() {
            this.sizes()
            const container = document.getElementById('connected-graph')

            this.camera = new THREE.PerspectiveCamera(
                75,
                this.width / this.height,
                0.01,
                1500
            )
            this.camera.position.z = 60
            this.scene = new THREE.Scene()

            // Sphere Geometry
            this.sphere()

            // Lights and helpers
            const pointLightRight = new THREE.PointLight(0xffffff)
            // const pointLightLeft = new THREE.PointLight(0xffffff)
            const ambientLight = new THREE.AmbientLight(0x2b659c, 2)
            pointLightRight.position.set(500, 100, 100)
            this.scene.add(pointLightRight, ambientLight)

            this.scene.background = new THREE.Color(0xffffff)

            // Renderer
            this.renderer = new THREE.WebGLRenderer({ antialias: true })
            this.controls = new OrbitControls(
                this.camera,
                this.renderer.domElement
            )
            this.renderer.setSize(this.width, this.height)
            container.appendChild(this.renderer.domElement)

            window.addEventListener('resize', this.onWindowResize, false)
        },
        sphere() {
            const geometry = new THREE.SphereGeometry(
                15,
                100,
                100,
                0,
                Math.PI * 2,
                0,
                Math.PI
            )
            const material = new THREE.MeshStandardMaterial({ color: 0x2b659c })
            this.mesh = new THREE.Mesh(geometry, material)
            this.scene.add(this.mesh)
        },
        animate() {
            requestAnimationFrame(this.animate)
            this.mesh.rotation.x += 0.01
            this.mesh.rotation.y += 0.01
            this.mesh.rotation.z += 0.01
            this.render()
        },
        sizes() {
            var sizes = this.$bodyContainerHeight()
            this.width = sizes[0]
            this.height = sizes[1]
        },
        onWindowResize() {
            this.sizes()
            this.camera.aspect = this.width / this.height
            this.camera.updateProjectionMatrix()
            this.renderer.setSize(this.width, this.height)
            this.render()
        },
        render() {
            this.renderer.render(this.scene, this.camera)
        }
    },
    mounted() {
        this.init()
        this.animate()
    },
    destroyed() {
        window.removeEventListener('resize', this.onWindowResize, false)
        this.$fullScreenOff()
    }
}
</script>
