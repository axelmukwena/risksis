<template>
    <div id="three-scene-container"></div>
</template>
<script>
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
    name: 'three-scene',
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
    methods: {
        init() {
            this.sizes()
            const container = document.getElementById('three-scene-container')

            this.camera = new Three.PerspectiveCamera(75, this.width / this.height, 0.01, 150)
            this.camera.position.z = 30
            this.scene = new Three.Scene()

            // Torus Geometry
            const geometry = new Three.TorusGeometry(10, 3, 16, 100)
            const material = new Three.MeshStandardMaterial({ color: 0xff6347 })
            this.mesh = new Three.Mesh(geometry, material)
            this.scene.add(this.mesh)

            // Lights and helpers
            const pointLight = new Three.PointLight(0xffffff)
            const ambientLight = new Three.AmbientLight(0xffffff)
            pointLight.position.set(5, 5, 5)
            this.scene.add(pointLight, ambientLight)

            // const gridHelper = new Three.GridHelper(200, 50)
            // this.scene.add(gridHelper)

            // Stars in space
            Array(200).fill().forEach(this.addStar)

            // Background
            // Textures can't be loaded locally
            // https://threejs.org/docs/#manual/en/introduction/How-to-run-things-locally
            const spaceTexture = new Three.TextureLoader().load('https://raw.githubusercontent.com/fireship-io/threejs-scroll-animation-demo/main/space.jpg')
            this.scene.background = spaceTexture

            // Moon
            const moonTexture = new Three.TextureLoader().load('https://raw.githubusercontent.com/fireship-io/threejs-scroll-animation-demo/main/moon.jpg')
            const normalTexture = new Three.TextureLoader().load('https://raw.githubusercontent.com/fireship-io/threejs-scroll-animation-demo/main/normal.jpg')

            const moon = new Three.Mesh(
                new Three.SphereGeometry(3, 32, 32),
                new Three.MeshStandardMaterial({
                    map: moonTexture,
                    normalMap: normalTexture
                })
            )
            this.scene.add(moon)

            // Renderer
            this.renderer = new Three.WebGLRenderer({ antialias: true })
            this.controls = new OrbitControls(this.camera, this.renderer.domElement)
            this.renderer.setSize(this.width, this.height)
            container.appendChild(this.renderer.domElement)
        },
        sizes() {
            var sizes = this.$bodyContainerHeight()
            this.width = sizes[0]
            this.height = sizes[1]
        },
        addStar() {
            const geometry = new Three.SphereGeometry(0.25, 24, 24)
            const material = new Three.MeshStandardMaterial({ color: 0xffffff })
            const star = new Three.Mesh(geometry, material)

            const [x, y, z] = Array(3)
                .fill()
                .map(() => Three.MathUtils.randFloatSpread(100))

            star.position.set(x, y, z)
            this.scene.add(star)
        },
        animate() {
            requestAnimationFrame(this.animate)
            this.mesh.rotation.x += 0.01
            this.mesh.rotation.y += 0.005
            this.mesh.rotation.z += 0.01
            this.renderer.render(this.scene, this.camera)
        }
    },
    mounted() {
        this.init()
        this.animate()
    }
}
</script>

<style scoped>
canvas {
    width: 100%;
    height: 100%
}
</style>
