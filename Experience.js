const canvas = document.querySelector("canvas.webgl")

const scene = new THREE.Scene()

const model = new Model()

const sizes = new Sizes()

const camera = new Camera()

const renderer = new Renderer()

//Animate
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  // Update controls
  camera.controls.update()

  // Render
  renderer.renderer.render(scene, camera.camera)

  window.requestAnimationFrame(tick)
}

tick()
