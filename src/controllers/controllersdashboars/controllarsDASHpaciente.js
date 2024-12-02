// import{buscarPaciente}from "../../services/serviciosPacientes.js"

// //Objetivo: Recibir datos del BACK y hacerles render (render=pintarlos)
// // PASO 1 -> llmar al api
// buscarPaciente()
// .then(function(respuestaBack) {
//     console.log(respuestaBack)
// //2.crear una referencia a una etiqueta html donde vamos a reanderizar
// let fila = document.getElementById("fila")

// // 3. Se recorren los datos para obtenerlo de forma separada 
// respuestaBack.forEach( function(paciente){
//     console.log(paciente)
//     // 4. se crean columnas
//     let columna=document.createElement("div")
//     columna.classList.add("col")

//     // 5. Se crean tarjetas 
//     let tarjetas = document.createElement("div")
//     tarjetas.classList.add("card","p-5","h-100","shadow")

//     // 6. Se crea una etiqueta para poner el nombre del paciente 
//     let nombre = document.createElement("h1")
//     nombre.textContent=paciente.nombre

//     let correo = document.createElement("h2")
//     correo.textContent=paciente.correo

//     //paso final (ORDENANDO LAS CARTAS)
//     tarjetas.appendChild(nombre)
//     tarjetas.appendChild(correo)
//     columna.appendChild(tarjetas)
//     fila.appendChild(columna) 
// })

// })

import { buscarPaciente } from "../../services/serviciosPacientes.js";

// Objetivo: Recibir datos del BACK y hacerles render (render=pintarlos)
buscarPaciente()
.then(function(respuestaBack) {
    console.log(respuestaBack);

    // 2. Crear una referencia a una etiqueta HTML donde vamos a renderizar
    let fila = document.getElementById("fila");

    // 3. Se recorren los datos para obtenerlos de forma separada
    respuestaBack.forEach(function(paciente) {
        console.log(paciente);

        // 4. Se crean columnas
        let columna = document.createElement("div");
        columna.classList.add("col");

        // 5. Se crean tarjetas
        let tarjetas = document.createElement("div");
        tarjetas.classList.add("card", "p-4", "h-100", "shadow");

        // 6. Se crea una etiqueta para poner el nombre del paciente
        let nombre = document.createElement("h5");
        nombre.classList.add("card-title");
        nombre.textContent = paciente.nombre;

        let correo = document.createElement("p");
        correo.classList.add("card-text");
        correo.textContent = paciente.correo;

        let telefono = document.createElement("p");
        telefono.classList.add("card-text");
        telefono.textContent = paciente.telefono;

        let grupoIngresos = document.createElement("p");
        grupoIngresos.classList.add("card-text");
        grupoIngresos.textContent = paciente.grupoIngresos;

        let ips = document.createElement("p");
        ips.classList.add("card-text");
        ips.textContent = paciente.ips;

        // 7. Asignar el color del badge según el campo "grupoIngresos" o el estado
        let estado = document.createElement("span");
        estado.classList.add("badge", "rounded-pill", "text-white");

        // Asignamos colores según el valor de "grupoIngresos"
        switch(paciente.grupoIngresos) {
            case "Urgente":
                estado.classList.add("bg-urgente");
                estado.textContent = "Urgente";
                break;
            case "Estable":
                estado.classList.add("bg-estable");
                estado.textContent = "Estable";
                break;
            case "Recuperacion":
                estado.classList.add("bg-recuperacion");
                estado.textContent = "Recuperación";
                break;
            case "En tratamiento":
                estado.classList.add("bg-en-tratamiento");
                estado.textContent = "En tratamiento";
                break;
            default:
                estado.classList.add("bg-secondary");
                estado.textContent = "Desconocido";  // Valor por defecto si no se encuentra un valor conocido
                break;
        }

        // 8. Agregar los elementos a la tarjeta
        tarjetas.appendChild(nombre);
        tarjetas.appendChild(correo);
        tarjetas.appendChild(telefono);
        tarjetas.appendChild(ips);
        tarjetas.appendChild(grupoIngresos);
        tarjetas.appendChild(estado);
        columna.appendChild(tarjetas);

        // 9. Agregar la tarjeta a la fila
        fila.appendChild(columna);
    });
})
.catch(function(error) {
    console.error("Error al cargar los pacientes", error);
});
