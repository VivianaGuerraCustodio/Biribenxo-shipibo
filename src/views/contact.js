export default () => {
    const contacto = `
    Pronto encontraras un formulario de contacto aqui
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = contacto;
    divElement.className = ("container")
    return divElement;
}