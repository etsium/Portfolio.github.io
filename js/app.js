import { validar } from "./validaciones.js";

const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');

inputs.forEach( input => {
    input.addEventListener('blur', (input) => {
        console.log(input);
        validar(input.target);
    });
});


textArea.addEventListener('blur', () => {
    validar(textArea);
});