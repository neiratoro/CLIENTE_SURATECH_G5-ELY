import{buscarMedicamento}from "../../services/serviciosMedicamento.js"

buscarMedicamento()
.then(function (respuestaBack) {
    console.log(respuestaBack)

        //2.crear una referencia a una etiqueta html donde vamos a reanderizar
    let fila = document.getElementById("fila")

    // 3. Se recorren los datos para obtenerlo de forma separada 
    respuestaBack.forEach( function(medicamento){
        console.log(medicamento)
        // 4. se crean columnas
        let columna=document.createElement("div")
        columna.classList.add("col")

        // 5. Se crean tarjetas 
        let tarjetas = document.createElement("div")
        tarjetas.classList.add("card","p-5","h-100","shadow")

        // 6. Se crea una etiqueta para poner el nombre del paciente 
        let nombre = document.createElement("h2")
        nombre.textContent=medicamento.nombre

        let presentacion = document.createElement("h2")
        presentacion.textContent=medicamento.presentacion

        let dosis = document.createElement("h2")
        dosis.textContent=medicamento.dosis


        //paso final (ORDENANDO LAS CARTAS)
        tarjetas.appendChild(nombre)
        tarjetas.appendChild(presentacion)
        tarjetas.appendChild(dosis)
        columna.appendChild(tarjetas)
        fila.appendChild(columna) 
    })
})

