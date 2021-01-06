export default () => {
    const services = `
    <section id=" servicios">
            <div class="servicios">
                <h2>Servicios</h2>
                <div class="col serv-items">
                    <div class="col offset serv-item">
                        <h6>Alojamiento </h6>
                        <div>
                            <p>Incluye :</p>
                            <ul>
                                <li>
                                    Comida
                                </li>
                                <li>
                                    Lavandería
                                </li>
                                <li>
                                    Caminata "Visita de maestro yashingo"
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col offset serv-item">
                        <h6>
                            Dieta de plantas
                        </h6>
                        <div>
                            <ul>
                                <li>
                                    Uña de gato
                                </li>
                                <li>
                                    Niwe Rao
                                </li>
                                <li>
                                    Medicina de maestro yashingo
                                </li>
                                <li>Marusa</li>
                                <li>Palo perfume</li>
                                <li>Clavo huasca</li>
                                <li>Boa caspi</li>
                            </ul>
                        </div>

                    </div>

                    <div class="col offset serv-item">
                        <h6>Caminata </h6>
                        <div>
                            <ul>
                                <li>"Visita de maestro yashingo"</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = services;
    divElement.className = ("container")
    return divElement;
}