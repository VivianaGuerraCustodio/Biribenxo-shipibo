export default () => {
    const contacto = `
    <section class="container sobre-nosotros">
    <div class="custom-contact">
        <div class="col">
            <p>
            Agréganos a nuestra red social o escribenos por whatsapp
            </p>
        </div>
        <div class="row">
            <img class="col" id="icon" src="./assets/icons/facebook.svg" alt="icono de facebook ">
            <img class="col" id="icon" src="./assets/icons/whatsapp.svg" alt="icono de whatsapp ">
            <img class="col" id="icon" src="./assets/icons/telefono.svg" alt="icono de telefono ">
        </div>
    </div>
</section>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = contacto;
    divElement.className = ("container")
    return divElement;
}