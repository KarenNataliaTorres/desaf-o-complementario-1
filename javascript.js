// declaro valor de pi y función de conversión
const pi = 3.14159
let gradoIngresado 
function gradosARadianes(gradoIngresado){
    return radianes = gradoIngresado * pi/180
}

//algoritmo para convertir grados en radianes

while(gradoIngresado = prompt(`Ingrese grado que desea convertir a radianes`) ){

    if (isNaN(gradoIngresado) || gradoIngresado === null || gradoIngresado ===" "){
        alert("Debes ingresar un número, no letras")
    } else{
        radianes = gradosARadianes(gradoIngresado)
        alert(`Los grados ingresados corresponden a ${radianes} radianes`)
    }
}



    

