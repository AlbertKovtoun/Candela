class Camera {
  constructor() {
    this.camera
    this.controls

    this.cameraX = 15.22
    this.cameraY = 5.66
    this.cameraZ = -9.1

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
    this.camera.position.set(this.cameraX, this.cameraY, this.cameraZ)
    this.camera.lookAt(0, 1, 0)
    scene.add(this.camera)
  }

  setCameraControls() {
    // this.controls = new THREE.OrbitControls(this.camera, canvas)
    // this.controls.enableDamping = true
    // this.controls.enabled = false

    this.cursor = { x: 0, y: 0 }

    document.addEventListener("mousemove", (e) => {
      this.cursor.x = e.clientX / sizes.width - 0.5
      this.cursor.y = e.clientY / sizes.height - 0.5
    })
  }

  setCameraTweaks() {
    cameraFolder.addInput(this.camera.position, "x", {
      min: -40,
      max: 40,
      step: 0.01,
      label: "CamX",
    })
    cameraFolder.addInput(this.camera.position, "y", {
      min: -40,
      max: 40,
      step: 0.01,
      label: "CamY",
    })
    cameraFolder.addInput(this.camera.position, "z", {
      min: -40,
      max: 40,
      step: 0.01,
      label: "CamZ",
    })
  }
}
