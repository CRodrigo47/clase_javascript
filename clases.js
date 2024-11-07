//CLASES

//Declaracion de clases:

//Forma 1:

class Alumno {
  nombre = "";
  telefono;

  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

//Crear objeto:
const alumno1 = new Alumno("Carlos", 666552233);

console.log(alumno1);

//Forma 2: Expresiones de clase:

let Alumno2 = class {
  //estamos creando una expresión de clase anonima (no tiene nombre)
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
};

console.log(Alumno2);
Alumno2.nombre = "Marcos";
Alumno2.telefono = 777889922;
console.log(Alumno2);

let a2 = new Alumno2("Ana", 44455522);
console.log(a2);

class Persona {
  constructor(nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
  }

  saludar() {
    console.log("Hola " + this.nombre);
    console.log(`Hola ${this.nombre}`);
  }
}

const pers1 = new Persona("Adrian", "Garica");
console.log(pers1);
pers1.saludar();


class Operaciones{
    static pi = 3.14

    static sumar(n1, n2){
        return n1 + n2
    }
}

console.log(Operaciones.pi)
console.log(Operaciones.sumar(3, 5))

class Animal{
    constructor(nombre){
        this.nombre = nombre
    }

    hablar(){
        console.log(this.nombre + " ha hecho un ruido")
    }
}

class Perro extends Animal{
    constructor(nombre, raza){
        super(nombre)
        this.raza = raza
    }
    hablar(){
        console.log(this.nombre + " ha ladrado")
    }
}

let perrete = new Perro("Rex", "Pastor Aleman")
console.log(perrete)
perrete.hablar();