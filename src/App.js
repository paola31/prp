import logo from './logo.svg';
import './App.css';
import React from 'react'
import styled from 'styled-components';
import Paquete from './components/paquete'
import Destinatario from "./components/destinatario";
import Remitente from "./components/remitente";
import Button from "./components/button";
import { MultiStepForm, Step } from 'react-multi-form';

const Container = styled.div`
  max-width: 70%;
  margin: 40px auto;
  @media(max-width: 590px) {
    width: 300px;
  }
  `
function App() {
  const [active, setActive] = React.useState(1)

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


          <Container>
              <MultiStepForm activeStep={active}>
                <Step label="Paquete">
                  <Paquete></Paquete>
                </Step>
                <Step label="Remitente">
                  <Remitente></Remitente>
                </Step>
                  <Step label="Destinatario">
                      <Destinatario></Destinatario>
                  </Step>
              </MultiStepForm>

              {active !== 1 && (
                  <Button onClick={() => setActive(active - 1)}>Regresar</Button>
              )}
              {active !== 3 && (
                  <Button
                      onClick={() => setActive(active + 1)}
                      style={{ float: 'right' }}
                  >
                    Siguiente
                  </Button>
              )}
          </Container>
      </div>
  );
}

export default App;
