function cuadrado(num){
    return num * num
}

console.log(cuadrado(2))

let coche = {marca: "honda"}

function cambiarMarca(objeto){
    objeto.marca = "Toyota"
}

cambiarMarca(coche)

console.log(coche)

//Funciones anidadas

function crearCuadrado(n1, n2){
    function cuad(n3){
        return n3*n3
    }

    return cuad(n1) + cuad(n2);
}

console.log(crearCuadrado(3, 4))

function funcionFuera(){
    let x = 5

    function funcionDentro(x){
        return x*2
    }
    return funcionDentro
}

console.log(funcionFuera()(10))