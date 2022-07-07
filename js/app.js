import { validar } from "./validaciones.js";

const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const perfilImagen = document.querySelector('#imagen__perfil');

inputs.forEach(input => {
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
    if (perfilImagen.classList.value === 'contenedor__principal__imagen__cartoon') {
        perfilImagen.style.animation = 'cartoontocommon 1s';
    } else {
        perfilImagen.style.animation = 'commontocartoon 1s';
    }
    perfilImagen.classList.toggle('contenedor__principal__imagen__cartoon');
    perfilImagen.classList.toggle('contenedor__principal__imagen');
});

window.onscroll = () => {
    var header = document.querySelector("#nav");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("nav__fixed");
    } else {
        header.classList.remove("nav__fixed");
    }
};



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

document.querySelector('.prev').addEventListener('click', () => {
    plusSlides(-1);
});
document.querySelector('.next').addEventListener('click', () => {
    plusSlides(1);
});

document.querySelectorAll('.dot').forEach(element => element.addEventListener('click', (e) =>{
    showSlides(slideIndex = e.target.id);
}));

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}