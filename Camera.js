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
    this.camera.position.set(15.22, 5.66, -9.1)
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

      // this.camera.position.x = (mouseX * Math.PI) / 4
      // this.camera.position.y = (mouseY * Math.PI) / 4
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
