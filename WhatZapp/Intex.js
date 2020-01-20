const Juan = document.querySelector('#Juan');
const Perico = document.querySelector('#Perico');
const Miranda = document.querySelector('#Miranda');
const Paola = document.querySelector('#Paola');
const Miriam = document.querySelector('#Miriam');

const TexDinamico = document.querySelector('#texto-dinamico');
const contDinamicoMenu = document.querySelector('#contenido-dinamico-menu');


// limpiar carga de paginas en menu
document.getElementById('contenido-dinamico-menu').src += '';

Juan.addEventListener('click', irJuan);
Perico.addEventListener('click', irPerico);
Miranda.addEventListener('click', irMiranda);
Paola.addEventListener('click', irPaola);
Miriam.addEventListener('click', irMiriam);


function irJuan() {

    //establece atributos a la constante contDinamico son dos en este caso SRC y valor que le damos al src
    contDinamicoMenu.setAttribute('src', "../WhatZapp/Imagenes/Hombre1.jpg");
    TexDinamico.innerHTML = 'Juan Perez Perez';
    console.log("Prueba");
}

function irPerico() {
    contDinamicoMenu.setAttribute('src', "../WhatZapp/Imagenes/Hombre2.jpg");
    TexDinamico.innerHTML = 'Perico Casanova';
}

function irMiranda() {
    contDinamicoMenu.setAttribute('src', "../WhatZapp/Imagenes/Mujer1.jpg");
    TexDinamico.innerHTML = 'Miranda Undurraga';
}

function irPaola() {
    contDinamicoMenu.setAttribute('src', "../WhatZapp/Imagenes/Mujer2.jpg");
    TexDinamico.innerHTML = 'Paola Asenjo';
}

function irMiriam() {
    contDinamicoMenu.setAttribute('src', "../WhatZapp/Imagenes/1.jpg");
    TexDinamico.innerHTML = 'Miriam Hernandez';
}