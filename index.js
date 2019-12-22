
//Creado por :  kristopher Gonzalez


//create function 
function validador (){

    //accediendo a campos de texto correo y passw de html. y guardando en variables
  let correo =  window.document.querySelector('#correo_id');
  let clave = window.document.querySelector('#passwd_id');

   //accediendo al valor ingresado en el campo y pasando parametro a la variable usuario y pass
   let usuario   = correo.value;
   let pass      = clave.value;

   //muestra datos por consola
   console.log('Usuario: ' + usuario + ', Contraseña: '+ pass);

  //actualiza los campos usuario y pass y los enfoca nuevamente  
   correo.value = '';
   correo.focus();

   clave.value = '';
   clave.focus();

   //validando datos 

   if (usuario != 'ejemplo@gmail.com' && pass != '123456') {
    console.log('Email y/o contraseña son incorrectos')
     }
     else{
        console.log('Iniciando Sesión...')
    }


}

//accediendo a campo boton del html y se deja en variable boton1
let boton1 = window.document.querySelector('#Boton');
//funcion se ejecuta cuando se dispara el evento al hacer click sobre el boton
boton1.addEventListener('click',validador);