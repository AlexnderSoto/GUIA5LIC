/*utilizaremos la API DOM para la creacion de una tabla*/
let table = "<table>";

table = `
<table>
    <thead>
    <tr>
        <th scope='col'></th>
        <th scope='col'>Nombre</th>
        <th scope='col'>Apellido</th>
        <th scope='col'>Correo Electrónico</th>
    </tr>
    </thead>

    <tbody>
    <tr>
        <td scope='row'>1</td>
        <td>Marcos Antonio</td>
        <td>Alas</td>
        <td>marcos.alas@estudiante.udb.edu.sv</td>
    </tr>

    <tr>
        <td scope='row'>2</td>
        <td>Ana Paola</td>
        <td>Rivas Polanco</td>
        <td>paola.rivas@estudiante.udb.edu.sv</td>
    </tr>
    <tr>
        <td scope='row'>3</td>
        <td>Alexis Armando</td>
        <td>Quintanilla Peña</td>
        <td>alexis.quintanilla@estudiante.udb.edu.sv</td>
    </tr>
    <tr>
        <td scope='row'>4</td>
        <td>Vanessa Alejandra</td>
        <td>Bermúdez Urquilla</td>
        <td>vanessa.bermudez@estudiante.udb.edu.sv</td>
    </tr>

    <tr>
        <td scope='row'>5</td>
        <td>Oscar Armando</td>
        <td>López Rodriguez</td>
        <td>oscar.lopez@estudiante.udb.edu.sv</td>
    </tr>

    </tbody>
    
    
</table>`;

const contenedor = document.querySelector("#idContenedor");
contenedor.innerHTML=table;
