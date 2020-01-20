// agregar escuchador de evento sobre el boton phara darle funcionalidad, se agrega id en el html ala boton
//document = objeto , queryselector = metodo o funcion
const WapZap = document.querySelector('#wap');
const zpotify = document.querySelector('#zpotify');

const contDinamicoMenu = document.querySelector('#contenido-dinamico-menu');
const TexDinamico = document.querySelector('#texto-dinamico');

const Home = document.querySelector('#home');

// limpiar carga de paginas en menu
document.getElementById('contenido-dinamico-menu').src += '';

//darle funcionalidad al boton , se ingresan dos parametros. 
//1.- se ingresa el elemento que queremos escuchar en este caso 'Click'
//2.- le funcion que queremos ejecutar cada vez que se hace click 
WapZap.addEventListener('click', irWapZap);
zpotify.addEventListener('click', irzpotify);
Home.addEventListener('click', irHome);



//definir funcion
function irWapZap() {

    //establece atributos a la constante contDinamico son dos en este caso SRC y valor que le damos al src
    contDinamicoMenu.setAttribute('src', "../WhatZapp/index.html");
    TexDinamico.innerHTML = 'WhatZapp';


}

//definir funcion
function irzpotify() {

    //establece atributos a la constante contDinamico son dos en este caso SRC y valor que le damos al src
    contDinamicoMenu.setAttribute('src', "../Zpotify/index.html");
    TexDinamico.innerHTML = 'Zpotify';
}


//definir funcion
function irHome() {

    //establece atributos a la constante contDinamico son dos en este caso SRC y valor que le damos al src
    contDinamicoMenu.setAttribute('src', "../Home/index.html");
    TexDinamico.innerHTML = 'HOME';
}