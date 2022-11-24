import React from 'react';
import Input from './input';

export default function Destinatario() {

    return (
        <section id="get-a-quote" className="get-a-quote">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-5 quote-bg" style={{ backgroundImage: 'url(assets/img/quote-bg.jpg)'}}>
                    </div>
                    <div className="col-lg-7">
                        <form action="forms/quote.php" method="post" className="php-email-form">
                            <div className="text-center">
                                <h2>InstaYa</h2>
                                <h3>Recogida de paquetes</h3>
                            </div>
                            <p>DESTINATARIO</p>
                            <div className="row gy-4">

                                <div className="col-md-6">
                                    <input type="text" name="departure" className="form-control" placeholder="Nombres" required />
                                </div>

                                <div className="col-md-6">
                                    <input type="text" name="delivery" className="form-control" placeholder="Apellidos" required />
                                </div>

                                <div className="col-md-6">
                                    <input type="text" name="weight" className="form-control" placeholder="Identificación" required />
                                </div>

                                <div className="col-md-6">
                                    <input type="text" name="dimensions" className="form-control" placeholder="Dirección de destino" required />
                                </div>

                                <div className="col-md-6">
                                    <input type="text" name="dimensions" className="form-control" placeholder="Ciudad de destino" required />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}