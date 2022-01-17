class Points {
  constructor() {
    this.setPoints()
    this.clickEvent()
  }

  setPoints() {
    this.points = [
      {
        position: new THREE.Vector3(6, 0.8, 0),
        element: document.querySelector(".point-0-container"),
      },
    ]
  }

  clickEvent() {
    const point = document.querySelector(".point")
    const pointText = document.querySelector(".point-text")
    const pointPlus = document.querySelector(".point-plus")

    point.addEventListener("click", () => {
      pointText.classList.toggle("visible")

      pointPlus.textContent === "+"
        ? (pointPlus.textContent = "-")
        : (pointPlus.textContent = "+")
    })
  }
}
