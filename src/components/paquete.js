import React from 'react';
import Input from './input';

export default function Paquete() {

    return (
        <section id="get-a-quote" className="get-a-quote">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-5 quote-bg" style={{ backgroundImage: 'url(assets/img/quote-bg.jpg)'}}></div>
                    <div className="col-lg-7">
                        <form action="forms/quote.php" method="post" className="php-email-form">
                            <div className="text-center">
                                <h2>InstaYa</h2>
                                <h3>Recogida de paquetes</h3>
                            </div>

                            <p>CARACTERISTICAS DEL PAQUETE</p>
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <Input type="text" name="width" className="form-control" placeholder="Ancho" required />
                                </div>

                                <div className="col-md-6">
                                    <Input type="text" name="height" className="form-control" placeholder="Alto" required />
                                </div>

                                <div className="col-md-6">
                                    <Input type="text" name="long" className="form-control" placeholder="Largo" required />
                                </div>

                                <div className="col-md-6">
                                    <input type="text" name="weight" className="form-control" placeholder="Peso (kg)" required />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="md">
                                            Mercancía delicada
                                        </label>
                                        <input type="checkbox" id="md" />
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