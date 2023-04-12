/* function palidromo(palabra) {
  let x = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    x += palabra[i];
  }
  if (palabra == x) {
    console.log("esta palabra es palidromo");
  } else {
    console.log("esta palabra no es palidroma");
  }
}

palidromo("menem");

function esPalindromo(palabra) {
  const palabraInvertida = palabra.split("").reverse().join("");
  if (palabra === palabraInvertida) {
    console.log(`${palabra} es un palíndromo`);
  } else {
    console.log(`${palabra} no es un palíndromo`);
  }
}

esPalindromo("menem");
 */

/**
 * Escribe una función en JavaScript que tome dos arreglos y devuelva un nuevo arreglo que contenga solo los elementos comunes entre los dos arreglos originales.

function datosIguales(a, b) {
  let nuevoArray = [];
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) != -1 && nuevoArray.indexOf(a[i]) == -1) {
      nuevoArray.push(a[i]);
    }
  }
  console.log(nuevoArray);
}

datosIguales([1, 1, 3], [1, 1, 3]);
 */

/**
 * numero primos
function esPrimo(num) {
  let esPrimo = true;
  for (let i = 2; i < num / 2; i++) {
    esPrimo = false;
  }
  if (esPrimo) {
    console.log("es un numero primo");
  } else {
    console.log("no es primo");
  }
}
 */

/* function fiz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizz buzz");
  } else if (num % 5 == 0) {
    console.log("buzz");
  } else if (num % 3 == 0) {
    console.log("fizz ");
  }
}
function fiz(num) {
  return num % 3 === 0 && num % 5 === 0
    ? "fizz buzz"
    : num % 5 === 0
    ? "buzz"
    : num % 3 === 0
    ? "fizz"
    : num.toString();
}
 */

/**
 * Crea una función que tome un arreglo de números como argumento y devuelva un nuevo arreglo con los números ordenados de forma ascendente.
function ordenar(array) {
  let nuevoArray = array.sort();
  return nuevoArray;
}
 */

/**
 * Crea una función que tome una cadena como argumento y devuelva una nueva cadena con todas las palabras en orden inverso. Por ejemplo, si la cadena es "Hola mundo", la función debería devolver "mundo Hola".
function cadena(txt) {
  return txt.split(" ").reverse().join(" ");
}
const cadena = (txt) => txt.split(" ").reverse().join(" ");
 */

/**
 * Crea una función que tome un objeto y una clave como argumentos, y devuelva true si el objeto contiene la clave, o false si no lo hace.
 * 
 * function obj(objeto, clave) {
  if (objeto.hasOwnProperty(clave)) {
    console.log(true);
  } else {
    console.log(false);
  }
}
function obj(objeto, clave) {
  return clave in objeto;
}

 */

/**
 * Crea una función que tome un número entero como argumento
 *  y devuelva la suma de todos los números enteros positivos menores o iguales al número dado.
function numeros(num) {
  let i = 0;
  let suma = 0;
  if (num > 0) {
    while (i <= num) {
      suma += i;
      i++;
    }
  } else {
    return "ingresa un numero positivo";
  }

  return suma;
}
function numeros(num) {
  return num > 0 ? (num * (num + 1)) / 2 : "Ingresa un número positivo";
}

// Define la función
function numeroMayor(array) {
  let numMayor = Math.max(...array);
  let numMenor = Math.min(...array);
  console.log(numMayor);
  console.log(numMenor);
}

// Llama a la función con un arreglo como argumento
numeroMayor([44, 2, 5, 1, 7, 8, 33]);

// Output en la consola:
// 44
// 1
 */

/* 
function eliminarDuplicados(array) {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (nuevoArray.indexOf(array[i]) == -1) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}

 [1, 2, 2, 3, 3, 3, 4], la función debe devolver [1, 2, 3, 4].
 */

let nombre = document.getElementById("nombre").value;
let apellido;
let mail;

mail.style.display = "none";
if (nombre != "" && apellido != "") {
  mail.style.display = "";
}
$("nombre").hide();

$("nombre").show();
