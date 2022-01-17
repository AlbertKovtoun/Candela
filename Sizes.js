class Sizes {
  constructor() {
    this.container = document.querySelector(".webgl-container")
    this.width = this.container.clientWidth
    this.height = this.container.clientHeight

    this.resizeWindow()
  }

  resizeWindow() {
    window.addEventListener("resize", () => {
      // Update sizes
      this.width = this.container.clientWidth
      this.height = this.container.clientHeight

      // Update camera
      camera.camera.aspect = this.width / this.height
      camera.camera.updateProjectionMatrix()

      // Update renderer
      renderer.renderer.setSize(this.width, this.height)
      renderer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
  }
}
