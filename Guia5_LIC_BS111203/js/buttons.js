function aviso(){
    alert("Bienvenido al mundo JavaScript");
}

function confirmation(){
    //los valores que puede almacenar la variable confirmación son true o false

    let confirmation = confirm("¿Desea salir de la sesión");

    /*para imprimir una variable en una cadena se puede utilizar las comillas simples inversas
    `` y luego se hace el llamdo de la variable con ${aquí se debe escribir el nombre de la 
        variable}*/
    
    alert(`Valor seleccionado ${confirmacion}`);
}

function capturarDatos(){
    let nombre = prompt("¿Cuál es su nombre?");
    //nótese que en el campo del prompt se mostrará 0 por defecto
    let edad = prompt("¿Cual es su edad?", 0);
    alert(`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafo(){
    let parrafo = prompt(
        "Escriba la información que desea visualizar en el párrafo"
    );
    /*utilizaremos la API DOM para acceder al elemento 
    <p id="idParrafo"></p> que hemos creado en nuestro documento HTML*/

    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;
}