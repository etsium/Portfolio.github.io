export function validar(input){
    const tipoDeInput= input.dataset.tipo;

    if(input.validity.valid){
        input.parentElement.classList.remove('input__container__invalid');
        input.parentElement.classList.remove('contacto__label__invalid');
        input.parentElement.classList.add('contacto__label__valid');
        input.classList.remove('contacto__a__invalid');
        input.classList.add('contacto__a__valid');
        input.parentElement.querySelector('.input__message__error').innerHTML = '';
    }else{
        input.parentElement.classList.remove('contacto__label__valid');
        input.classList.remove('contacto__a__valid');
        input.classList.add('contacto__a__invalid');
        
        input.parentElement.classList.add('contacto__label__invalid');
        input.parentElement.classList.add('input__container__invalid');
        input.parentElement.querySelector('.input__message__error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
        
    }
}


const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'tooLong',
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El Nombre no puede estar vacio",
    },
    email: {
        valueMissing: "El Correo no puede estar vacio",
        typeMismatch: 'El correo no es válido',
    },
    asunto: {
        valueMissing: "El Asunto no puede estar vacio",
        patternMismatch: "Mínimo 6 y máximo 15 caracteres",
    },
    mensaje: {
        valueMissing: "El mensaje no puede estar vacio",
        tooShort: "Minimo 50 caracteres.",
        tooLong: "Maximos 600 caracteres.",
    },
}

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje;
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {    
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });

    return mensaje;
}

