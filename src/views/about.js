export default () => {
    const landingPage = `
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/galery/interior/frontis.jpeg" class="d-block w-100" alt="frontis">
        </div>
        <div class="carousel-item">
            <img src="assets/galery/interior/exterior.jpeg" class="d-block w-100" alt="exterior">
        </div>
        <div class="carousel-item">
            <img src="assets/galery/interior/interior.jpeg" class="d-block w-100" alt="interior">
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
</section>

<section class="container sobre-nosotros">
    <div class="custom-flex">
        <div class="col">
            <h2>Sobre nosotros</h2>
            <p>Somos una familia shipiba que radica en San Francisco ,Pucallpa , nuestra labor en el albergue es
                la
                de ayudar a los turistas a encontrarse con su interior
                y sanar las heridas que puedan tener. Los remedios que utilizamos durante nuestros servicios
                como
                albergue son echos de plantas naturales que también las encontrarás aquí</p>
        </div>
        <div class="col">
            <img src="./assets/galery/photos.jpeg" alt="foto junto al maestro shamán">
        </div>
    </div>
</section>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = landingPage;
    divElement.className = ("container")
    return divElement;
}