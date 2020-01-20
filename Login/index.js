//Creado por :  kristopher Gonzalez
//create function 


//accediendo a campos de texto correo y passw de html. y guardando en variables
const correo = window.document.querySelector('#correo_id');
const clave = window.document.querySelector('#passwd_id');
const boton1 = window.document.querySelector('#Boton');
const msgError = window.document.querySelector('.msg-error');
const msgError2 = window.document.querySelector('.msg-error2');


//escuchador de evento, boton reacciona a cierto evento en este caso al hacer click   
boton1.addEventListener('click', validador);


function validador() {



    //accediendo al valor ingresado en el campo y pasando parametro a la variable usuario y pass
    const usuario = correo.value;
    const pass = clave.value;

    //muestra datos por consola
    console.log('Usuario: ' + usuario + ', Contraseña: ' + pass);

    //actualiza los campos usuario y pass y los enfoca nuevamente  
    correo.value = '';
    correo.focus();

    clave.value = '';
    clave.focus();

    //validando datos 

    if (usuario == "" || pass == "") {
        console.log("Los campos usuario y/o contraseña no pueden quedar vacios");
        msgError.classList.add(['hide']);
        msgError2.classList.remove(['hide']);
        //return true;
    }


    if (usuario !== 'ejemplo@gmail.com' || pass !== '123456') {
        console.log('Email y/o contraseña son incorrectos');
        msgError.classList.remove(['hide']);
        msgError2.classList.add(['hide']);

    } else {
        console.log('Iniciando Sesión...');
        msgError.classList.add(['hide']);
        msgError2.classList.add(['hide']);

        // redirecciona hacia otro documento HTML
        document.location.assign('../Layout/index.html');

    }




}