import{buscarEnfermedad}from "../../services/serviviosEnfermedad.js"

buscarEnfermedad()
.then (function(respuestaBack) {
    console.log(respuestaBack)


    //2.crear una referencia a una etiqueta html donde vamos a reanderizar
    let fila = document.getElementById("fila")

    // 3. Se recorren los datos para obtenerlo de forma separada 
    respuestaBack.forEach( function(enfermedad){
        console.log(enfermedad)
        // 4. se crean columnas
        let columna=document.createElement("div")
        columna.classList.add("col")

        // 5. Se crean tarjetas 
        let tarjetas = document.createElement("div")
        tarjetas.classList.add("card","p-5","h-100","shadow")

        // 6. Se crea una etiqueta para poner el nombre del paciente 
        let nombre = document.createElement("h2")
        nombre.textContent=enfermedad.nombre

        let sintomas = document.createElement("p");
        sintomas.classList.add("card-text");
        sintomas.textContent = enfermedad.sintomas;

        let clasificacion = document.createElement("p");
        clasificacion.classList.add("card-text");
        clasificacion.textContent = enfermedad.clasificacion;

        
        let grado = document.createElement("p");
        grado.classList.add("card-text");
        grado.textContent = enfermedad.grado;

        //paso final (ORDENANDO LAS CARTAS)
        tarjetas.appendChild(nombre) 
        tarjetas.appendChild(sintomas)
        tarjetas.appendChild(clasificacion)
        tarjetas.appendChild(grado)
        columna.appendChild(tarjetas)
        fila.appendChild(columna) 
    })

})


