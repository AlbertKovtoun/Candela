class Camera {
  constructor() {
    this.camera
    this.controls

    this.setCamera()
    this.setCameraControls()
    this.setCameraTweaks()
  }

  setCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      500
    )
    this.camera.position.set(20, 6, -12)
    scene.add(this.camera)
  }

  setCameraControls() {
    this.controls = new THREE.OrbitControls(this.camera, canvas)
    this.controls.enableDamping = true
  }

  setCameraTweaks() {
    pane.addInput(this.camera.position, "x", {
      min: -40,
      max: 40,
      step: 0.01,
      label: "CamX",
    })
    pane.addInput(this.camera.position, "y", {
      min: -40,
      max: 40,
      step: 0.01,
      label: "CamY",
    })
    pane.addInput(this.camera.position, "z", {
      min: -40,
      max: 40,
      step: 0.01,
      label: "CamZ",
    })
  }
}
