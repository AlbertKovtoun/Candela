class Light {
  constructor() {
    this.setLights()
  }

  setLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)
  }
}
