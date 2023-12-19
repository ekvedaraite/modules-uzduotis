function generateLoremIpsum() {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
  
  function addHeaderToApp(app) {
    const headerHTML = `
      <header style="background-color: #ffd700; color: white; padding: 10px; width: 100%; min-height: 200px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="padding-bottom: 10px; font-size: 2.5em;">Header</h1>
        <p style="padding: 10px; font-size: 1.2em;">${generateLoremIpsum()}</p>
      </header>
    `
  
    app.innerHTML += headerHTML
  }
  
  export { addHeaderToApp }
  