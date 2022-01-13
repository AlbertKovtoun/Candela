class Lights {
  constructor() {
    this.setLights()
  }

  setLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(15, 8, 0)
    scene.add(pointLight)
  }
}
