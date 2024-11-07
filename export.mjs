const alumnos = ["Carlos", "Dani", "Juan"];

const cuadrado = (num) => {
  return num * num;
};

const doble = (num) => num * 2;

//Export con nombre
export { alumnos, cuadrado };

//Export por defecto;
export default doble;
