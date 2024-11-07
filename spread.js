const numeros = [1, 2, 3];

const suma = (n1, n2, n3) => {
  return n1 + n2 + n3;
};

console.log(suma(numeros[0], numeros[1], numeros[2]));

console.log(suma(...numeros));

const alumno = { nombre: "Carlos", telefono: 2323 };
const alumno2 = { ...alumno };

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const todoNums = numeros1.concat(numeros2);
const todoNums2 = [...numeros1, ...numeros2];

const otrosNumeros = [...numeros1];
const otrosNumeros2 = numeros1;

//SI UNA VARIABLE DE TIPO NO PRIMITIVO ES IGUAL A OTRA VARIABLE DE TIPO NO PRIMITIVO, CUANDO CAMBIA 1 CAMBIA LA OTRA
