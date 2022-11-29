import React from 'react'
import axios from "axios";
import { MultiStepForm, Step } from 'react-multi-form';
import Paquete from "./paquete";
import Remitente from "./remitente";
import Destinatario from "./destinatario";
import Button from "./button";
import styled from 'styled-components';

const Container = styled.div`
                      max-width: 70%;
                      margin: 40px auto;
                      @media(max-width: 590px) 
                      {
                        width: 300px;
                      }
                `

const baseURL = "http://localhost:3000/";



class Formulario extends React.Component
{
    constructor(props)
    {
        super(props);
        let formData =
            {
                ancho: 0,
                alto: 0,
                largo: 0,
                peso: 0,
                md: "on",
                nombres: '',
                apellidos: '',
                identificacion: '',
                diaRecoleccion: '',
                franja: '',
                direccion: '',
                ciudad: '',
                destinatarioNombres: '',
                destinatarioApellidos: '',
                destinatarioIdentificacion: '',
                destinatarioDireccion: '',
                destinatarioCiudad: ''
            }
        this.state = {form: formData, active: 1}
        this.handleForm = this.handleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleForm(form)
    {
        this.setState({"form": form});
    }

    handleSubmit(event)
    {
        axios.post(baseURL, this.state.form)
            .then((response) => {console.dir(response)})
    }

    render() {
        return (
            <Container>
                <MultiStepForm activeStep={this.state.active}>
                    <Step label="Paquete">
                        <Paquete form={this.state.form} onFormChange={this.handleForm} />
                    </Step>
                    <Step label="Remitente">
                        <Remitente form={this.state.form} onFormChange={this.handleForm} />
                    </Step>
                    <Step label="Destinatario">
                        <Destinatario form={this.state.form} onFormChange={this.handleForm} />
                    </Step>
                </MultiStepForm>

                {this.state.active !== 1 && (
                    <Button onClick={() => this.setState({'active': this.state.active - 1})}>
                        Regresar
                    </Button>
                )}
                {this.state.active !== 3 && (
                    <Button
                        onClick={() => this.setState({'active': this.state.active + 1})}
                        style={{ float: 'right' }}
                    >
                        Siguiente
                    </Button>
                )}

                {this.state.active === 3 && (
                    <Button onClick={() => this.handleSubmit()}>
                        Enviar
                    </Button>
                )}
            </Container>
        );
    }
}

export default Formulario;