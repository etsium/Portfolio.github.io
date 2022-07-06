import { validar } from "./validaciones.js";

const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const perfilImagen = document.querySelector('#imagen__perfil');

inputs.forEach( input => {
    input.addEventListener('input', (input) => {
        validar(input.target);
    });
});


textArea.addEventListener('input', () => {
    validar(textArea);
});

document.querySelector('.formulario__contacto').addEventListener('submit', (e) => {
    e.preventDefault();
    const remitente = document.querySelector('#email').value;
    const nombre = document.querySelector('#nombre').value;
    const asunto = document.querySelector('#asunto').value;
    const mensaje = document.querySelector('#mensaje').value;

    window.open(`mailto:juanpablomota96@hotmail.com?cc=${remitente}&subject=${asunto + " - " + nombre}&body=${mensaje}`);
    window.location.href = "index.html";
});

perfilImagen.addEventListener('click', () => {
    if(perfilImagen.classList.value === 'contenedor__principal__imagen__cartoon'){
        perfilImagen.style.animation = 'cartoontocommon 1s';
    }else{
        perfilImagen.style.animation = 'commontocartoon 1s';
    }
    perfilImagen.classList.toggle('contenedor__principal__imagen__cartoon');
    perfilImagen.classList.toggle('contenedor__principal__imagen');
});