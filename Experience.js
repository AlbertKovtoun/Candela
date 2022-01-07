const pane = new Tweakpane.Pane()

const canvas = document.querySelector("canvas.webgl")

const scene = new THREE.Scene()

const model = new Model()

const light = new Light()

const sizes = new Sizes()

const camera = new Camera()

const renderer = new Renderer()

//Animate
const clock = new THREE.Clock()

let time = Date.now()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  const currentTime = Date.now()
  const deltaTime = currentTime - time
  time = currentTime

  //Multiply by deltaTime for the animation to play at the same speed at every frame rate
  if (model.mixer) model.mixer.update(0.001 * deltaTime)

  // Update controls
  camera.controls.update()

  // Render
  renderer.renderer.render(scene, camera.camera)

  window.requestAnimationFrame(tick)
}

tick()
