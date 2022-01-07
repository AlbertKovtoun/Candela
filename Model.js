const modelPath = "/assets/Candela.gltf"

class Model {
  constructor() {
    this.gltfLoader = new THREE.GLTFLoader()
    this.setModel()
  }

  setModel() {
    this.gltfLoader.load(modelPath, (gltf) => {
      this.model = gltf.scene

      this.mixer = new THREE.AnimationMixer(this.model)
      this.action = this.mixer.clipAction(gltf.animations[1])
      this.action.play()

      scene.add(this.model)
    })
  }
}
