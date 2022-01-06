class Camera {
  constructor() {
    this.camera
    this.controls

    this.setCamera()
    this.setCameraControls()
  }

  setCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    )
    this.camera.position.z = 4
    scene.add(this.camera)
  }

  setCameraControls() {
    this.controls = new THREE.OrbitControls(this.camera, canvas)
    this.controls.enableDamping = true
  }
}
