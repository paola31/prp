import React from 'react';
import Input from './input';
import Encabezado from "./encabezado";

class Destinatario extends React.Component
{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key, value=null)
    {
        let form = this.props.form;
        form[key] = value == null ? e.target.value : value;
        this.props.onFormChange(form);
    }

    render()
    {
        const nombres = this.props.form.destinatarioNombres;
        const apellidos = this.props.form.destinatarioApellidos;
        const identificacion = this.props.form.destinatarioIdentificacion;
        const direccion = this.props.form.destinatarioDireccion;
        const ciudad = this.props.form.destinatarioCiudad;

        return (
            <section id="get-a-quote" className="get-a-quote">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-5 quote-bg" style={{ backgroundImage: 'url(assets/img/quote-bg.jpg)'}}>
                        </div>
                        <div className="col-lg-7">
                            <form action="forms/quote.php" method="post" className="php-email-form">
                                <Encabezado />
                                <p>DESTINATARIO</p>
                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <Input type="text" name="nombres" className="form-control" label="Nombres" required onChange={ event => this.handleChange(event, 'destinatarioNombres')} value={nombres} />
                                    </div>

                                    <div className="col-md-6">
                                        <Input type="text" name="apellidos" className="form-control" label="Apellidos" required onChange={ event => this.handleChange(event, 'destinatarioApellidos')} value={apellidos} />
                                    </div>

                                    <div className="col-md-6">
                                        <Input type="text" name="identificacion" className="form-control" label="Identificación" required onChange={ event => this.handleChange(event, 'destinatarioIdentificacion')} value={identificacion}/>
                                    </div>

                                    <div className="col-md-6">
                                        <Input type="text" name="direccion" className="form-control" label="Dirección de destino" required onChange={ event => this.handleChange(event, 'destinatarioDireccion')} value={direccion}/>
                                    </div>

                                    <div className="col-md-6">
                                        <Input type="text" name="ciudad " className="form-control" label="Ciudad de destino" required onChange={ event => this.handleChange(event, 'destinatarioCiudad')} value={ciudad}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Destinatario