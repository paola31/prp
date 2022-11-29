import './App.css';
import React from 'react'
import Formulario from "./components/formulario";


function App() {
  return (
      <div className="App">
          <header id="header" className="header d-flex align-items-center fixed-top hero">
              <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                  <a href="index.html" className="logo d-flex align-items-center">
                      <h1>InstaYa</h1>
                  </a>
                  <br/>
                  <a href="index.html" className="logo d-flex align-items-center">
                    <h2>Recogida de paquetes</h2>
                  </a>


              </div>
          </header>

          <Formulario />
      </div>
  );
}

export default App;
