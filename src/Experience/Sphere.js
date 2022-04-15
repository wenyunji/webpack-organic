import * as THREE from 'three'
import Experience from './Experience.js'

export default class Sphere {

    constructor() {

        this.experience = new Experience()
        // this.config = this.experience.config
        this.scene = this.experience.scene
        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry() {
        this.geometry = new THREE.SphereGeometry(1, 32, 32)
    }

    setMaterial() {
        this.material = new THREE.MeshBasicMaterial({wireframe: true})
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)
    }

}