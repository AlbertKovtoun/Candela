class Helpers {
  constructor() {
    this.setHelpers()
    this.setHelperTweaks()
  }

  setHelpers() {
    this.pointHelpersCount = 1
    this.pointHelpers = []

    this.pointHelperGeometry = new THREE.SphereGeometry(0.3, 20, 20)
    this.pointHelperMaterial = new THREE.MeshBasicMaterial({ color: "red" })

    for (let i = 0; i < this.pointHelpersCount; i++) {
      this.pointHelpers.push(
        new THREE.Mesh(this.pointHelperGeometry, this.pointHelperMaterial)
      )
      scene.add(this.pointHelpers[i])
      this.pointHelpers[i].visible = false
    }
    this.pointHelpers[0].position.set(5.8, 0.4, 0)
  }

  setHelperTweaks() {
    for (let i = 0; i < this.pointHelpersCount; i++) {
      helpersFolder.addInput(this.pointHelpers[i].position, "x", {
        min: -10,
        max: 10,
        step: 0.01,
        label: `Posx${i}`,
      })
      helpersFolder.addInput(this.pointHelpers[i].position, "y", {
        min: -10,
        max: 10,
        step: 0.01,
        label: `Posy${i}`,
      })
      helpersFolder.addInput(this.pointHelpers[i].position, "z", {
        min: -10,
        max: 10,
        step: 0.01,
        label: `Posz${i}`,
      })
    }
  }
}
