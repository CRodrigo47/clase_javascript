function funcion(){
    this.nombre = "Dani"
    return "hola mundo";
}

const f = new funcion();
console.log(f);

const arf = () => {
    this.telefono = 2323232
    console.log(this)
    return "hola mundo"
};

const f2 = arf();
console.log(f2);