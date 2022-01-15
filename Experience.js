const pane = new Tweakpane.Pane()
const cameraFolder = pane.addFolder({
  title: "Camera",
})
const helpersFolder = pane.addFolder({
  title: "Helpers",
})

const canvas = document.querySelector("canvas.webgl")

const scene = new THREE.Scene()

const axesHelper = new THREE.AxesHelper(5)
// scene.add(axesHelper)

const model = new Model()

const helpers = new Helpers()

const points = new Points()

const light = new Lights()

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

  // Multiply by deltaTime for the animation to play at the same speed at every frame rate
  if (model.mixer) model.mixer.update(0.001 * deltaTime)

  //Update locations of points
  for (const point of points.points) {
    const screenPosition = point.position.clone()
    screenPosition.project(camera.camera)

    const translateX = screenPosition.x * sizes.width * 0.5
    const translateY = -screenPosition.y * sizes.height * 0.5

    point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
  }

  // Update controls
  // camera.controls.update()
  camera.camera.lookAt(0, 1, 0)
  const cameraX = camera.cursor.x
  const cameraY = camera.cursor.y

  //Snappy
  // camera.camera.position.x = cameraX * 4 + 15.22
  // camera.camera.position.y = -cameraY * 2 + 5.66

  //Smooth
  camera.camera.position.x += (cameraX * 4 - camera.camera.position.x + 15.22) / 30
  camera.camera.position.y += (-cameraY * 2 - camera.camera.position.y + 5.66) / 30

  // Render
  renderer.renderer.render(scene, camera.camera)

  window.requestAnimationFrame(tick)
}

tick()
