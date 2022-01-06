const modelPath = "/assets/Candela.gltf"

class Model {
  constructor() {
    this.gltfLoader = new THREE.GLTFLoader()
    this.setModel()
  }

  setModel() {
    this.redMaterial = new THREE.MeshStandardMaterial({ color: "red" })

    this.gltfLoader.load(modelPath, (gltf) => {
      this.model = gltf.scene

      this.redMesh = this.model.children.find((child) => {
        return child.name === "Red"
      })

      // this.model.traverse((child) => {
      //   child.material = this.redMaterial
      // })

      scene.add(this.model)
    })
  }
}
