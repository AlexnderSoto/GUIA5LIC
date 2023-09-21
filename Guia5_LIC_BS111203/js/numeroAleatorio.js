//generando un número aleatorio que se encuentre en el rango del 1 al 25
const numeroAleatorio = Math.floor(Math.random()*25)+1;
//creamos una constante que permite identificar el máximo de intentos
const numeroIntentos = 3;
//guardará el numero de intentos que realiza el usuario
let intentos=1;
function generarNumeroAleatorio(){
    //definiendo una variable para impresión de mensajes
    let mensaje;
    //utilizamos el dom para acceder al párrafo creado
    const parrafo = document.querySelector("#idParrafo");

    //verificamos en que intento está el usuario
    if(intentos <= numeroIntentos){
        let numero = prompt(
            "¿Qué número se ha generado (Intento " + intentos + ")?"
        );
    

    //verificamos el numero aleatorio con el ingresado por el usuario
    if(numero==numeroAleatorio){
        mensaje=`¡Es sorprendente, pudiste adivinar el número oculto (${numeroAleatorio}).
        Refresque la página para volver a jugar.`;
    } else if(intentos == numeroIntentos) {
        mensaje = `Su número de intentos ha terminado.
            El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
    } else {
        mensaje = `Vuelve a intentar. Queda ${
            numeroIntentos - intentos
        } intentos`;
    }

    //aumentamos el valor de los intentos
    intentos++;
    } else {
        mensaje = `Su número de intentos ha terminado. El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
    }
    parrafo.innerHTML = mensaje;
}