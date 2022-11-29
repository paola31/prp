import React from 'react';
import Input from './input';
import Encabezado from "./encabezado";

class Paquete extends React.Component
{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {isChecked: false};
    }

    toogleChecked(e, key)
    {
        this.setState({isChecked: !this.state.isChecked});
        this.handleChange(e, key, !this.state.isChecked);
    }

    handleChange(e, key, value=null)
    {
        let form = this.props.form;
        form[key] = value == null ? e.target.value : value;
        this.props.onFormChange(form);
    }

    render()
    {
        const ancho = this.props.form.ancho;
        const alto = this.props.form.alto;
        const largo = this.props.form.largo;
        const peso = this.props.form.peso;

        return (
            <section id="get-a-quote" className="get-a-quote">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-5 quote-bg" style={{ backgroundImage: 'url(assets/img/quote-bg.jpg)'}}></div>
                        <div className="col-lg-7">
                            <form action="forms/quote.php" method="post" className="php-email-form">
                                <Encabezado />

                                <p>CARACTERISTICAS DEL PAQUETE</p>
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <Input type="text" name="ancho" className="form-control" label="Ancho" required onChange={ event => this.handleChange(event, 'ancho')} value={ancho}/>
                                    </div>

                                    <div className="col-md-6">
                                        <Input type="text" name="alto" className="form-control" label="Alto" required onChange={ event => this.handleChange(event, 'alto')} value={alto} />
                                    </div>

                                    <div className="col-md-6">
                                        <Input type="text" name="largo" className="form-control" label="Largo" required onChange={ event => this.handleChange(event, 'largo')} value={largo}/>
                                    </div>

                                    <div className="col-md-6">
                                        <Input type="text" name="peso" className="form-control" label="Peso (kg)" required onChange={ event => this.handleChange(event, 'peso')} value={peso}/>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Input type="checkbox" id="md" label="Mercancía delicada"  onChange={ event => this.toogleChecked(event, 'md')} defaultChecked={this.state.isChecked}/>
                                        </div>
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

export default Paquete;