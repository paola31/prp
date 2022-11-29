import React from 'react';
import Input from './input';
import Encabezado from "./encabezado";

class Remitente extends React.Component
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
        const nombres = this.props.form.nombres;
        const apellidos = this.props.form.apellidos;
        const identificacion = this.props.form.identificacion;
        const diaRecoleccion = this.props.form.diaRecoleccion;
        const franja = this.props.form.franja;
        const direccion = this.props.form.direccion;
        const ciudad = this.props.form.ciudad;

        return (
            <section id="get-a-quote" className="get-a-quote">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-5 quote-bg" style={{ backgroundImage: 'url(assets/img/quote-bg.jpg)'}}>
                        </div>
                        <div className="col-lg-7">
                            <form action="forms/quote.php" method="post" className="php-email-form">
                                <Encabezado />
                                <p>REMITENTE</p>
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <Input type="text" name="nombres" className="form-control" label="Nombres" required onChange={ event => this.handleChange(event, 'nombres')} value={nombres} />
                                    </div>

                                    <div className="col-md-6">
                                        <Input type="text" name="apellidos" className="form-control" label="Apellidos" required onChange={ event => this.handleChange(event, 'apellidos')} value={apellidos} />
                                    </div>

                                    <div className="col-md-6">
                                        <Input type="text" name="identificacion" className="form-control" label="Identificación" required onChange={ event => this.handleChange(event, 'identificacion')} value={identificacion} />
                                    </div>

                                    <div className="col-md-6">
                                        <Input type="text" name="diaRecoleccion" className="form-control" label="Día de recolección" required onChange={ event => this.handleChange(event, 'diaRecoleccion')} value={diaRecoleccion} />
                                    </div>

                                    <div className="col-md-6">
                                        <Input type="text" name="franja" className="form-control" label="Franja de recolección" required onChange={ event => this.handleChange(event, 'franja')} value={franja} />
                                    </div>

                                    <div className="col-md-6">
                                        <Input type="text" name="direccion" className="form-control" label="Dirección de recolección" required onChange={ event => this.handleChange(event, 'direccion')} value={direccion} />
                                    </div>

                                    <div className="col-md-6">
                                        <Input type="text" name="ciudad" className="form-control" label="Ciudad de recolección" required onChange={ event => this.handleChange(event, 'ciudad')} value={ciudad} />
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

export default Remitente