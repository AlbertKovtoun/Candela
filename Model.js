class Model {
  constructor() {
    this.setModel()
  }

  setModel() {
    const cube = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.3, 20, 40),
      new THREE.MeshBasicMaterial({ color: "blue", wireframe: true })
    )
    scene.add(cube)
  }
}
