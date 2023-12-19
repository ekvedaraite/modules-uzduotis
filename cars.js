const carBrands = ["BMW", "VW", "AUDI", "MB"]

function addCarsToApp(app) {
  const carsHTML = `
    <ul style="list-style-type: disc; margin-left: 50px; margin-top: 20px; font-size: 1.3em; font-weight: 500;">
      ${carBrands.map((brand) => `<li>${brand}</li>`).join('')}
    </ul>
  `

  app.innerHTML += carsHTML
}

export { addCarsToApp }
