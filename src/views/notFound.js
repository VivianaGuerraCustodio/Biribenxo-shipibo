export default () => {
    const error = `
    Pagina no encontrada :) 
    <button id="Back"> <a href="#">Regresar</a> </button>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = error;
    divElement.className = ("container")
    return divElement;
}