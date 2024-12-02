export async function buscarSignoVital() {
        const URL="http://localhost:8080/api/signovital";


    let peticion = {
        method:"GET"
    }


    let respuestaServidor = await fetch(URL, peticion)
    let signoVital = await respuestaServidor.json()
    return signoVital
}

export async function registrarSignovital(datosSignovital) {
    const URL ="http://localhost:8080/api/signovital"
    let peticion = {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosSignovital)
    }
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal = await respuestaInicial.json()
    return respuestaFinal
}


