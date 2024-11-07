let listaFrutas = ["Manzana", "Platano", "Naranja"];

console.log(listaFrutas[0]);

let ultimaPos = listaFrutas[listaFrutas.length - 1];
console.log(ultimaPos);

listaFrutas.forEach(function (elemento, indice, array){
    console.log(elemento); 
});