export default () => {
    const programa = `
    <section class="container sobre-nosotros">
    <div>
        <div class="col">
            <h2>Conoce a nuestros maestros y <strong> ¡Anímate a visitar nuestra maloca! </strong> </h2>
            <p>El maestro Guillermo López Rodríguez es de familia shaminista , así como su padre Juan López Cauper y su madre Reynalda 
            Rodríguez Agustín.
            Él tiene 17 años de experiencia y sus dietas estan basadas en plantas medicinales, tales como:
            </p>
            <ul>
            <li> Hinsulina ( marusa ) </li> 
            <li> Palo perfume </li> 
            <li> Boa Capsi </li> 
            <li> Clavo Huasca </li> 
            <li> Niwe Rao </li>
            <li> Maestro Yashingo </li> 
            <li> Shanburi </li> 
            <li> Otros :)  </li>   
            </ul>
            <p>
            El albergue "BIRIBENXO RODRÍGUEZ" es un lugar para conectarse con la luz divina , el dueño del bosque que es el Maestro Yashingo ,
            con las plantas sagradas medicinales , hacer meditación en el bosque y al mismo tiempo recibir energías renovadas y positivas ,
            <br>
            Además el maestro yashingo tiene su propio templo , su medicina , y baño de florecimiento , que esta cerca a la maloca ( a unos 5 minutos ).
            y la ciudad se encuentra a 3 horas en caminata .
            <br>
            La maloca esta contruida en palo perfume ( que al mismo tiempo sirve como medicina para la limpieza del cuerpo ) .
            Está ubicaa en el KM 22+100 caserío interior Nueva Esperanza a 5km de la carretera Iquitos Nauta .
            Se recoge desde el aeropuerto ( aprox. 2 horas ).
            </p>
        </div>
        <div class="col">
            <img src="./assets/galery/preparacion.jpeg" alt="preparación de ayahuasca por los maestros shamanes Reynalda Rodríguez y Juan Lopez ">
        </div>
    </div>
</section>


    `
    const divElement = document.createElement('div')
    divElement.innerHTML = programa;
    divElement.className = ("container")
    return divElement;
}