const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let personas = [];

function preguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}

async function main() {
  console.log("=== SISTEMA DE REGISTRO DE PERSONAS ===");

  while (true) {
    console.log("\nIngrese los datos de una persona");

    let nombre = await preguntar("Nombre: ");
    let edad = parseInt(await preguntar("Edad: "));
    let nota = parseFloat(await preguntar("Nota: "));

    personas.push([nombre, edad, nota]);

    let opcion;

    while (true) {
      opcion = (
        await preguntar("\n¿Desea agregar otra persona? (si / finalizar): ")
      )
        .trim()
        .toLowerCase();

      if (opcion === "si" || opcion === "finalizar") {
        break;
      } else {
        console.log("Opción inválida. Solo puede escribir 'si' o 'finalizar'.");
      }
    }

    if (opcion === "finalizar") {
      break;
    }
  }

  console.log("\n=== LISTADO COMPLETO DE DATOS CARGADOS ===");
  for (let persona of personas) {
    console.log(
      `Nombre: ${persona[0]} | Edad: ${persona[1]} | Nota: ${persona[2]}`,
    );
  }

  let personasOrdenadas = [...personas].sort((a, b) => b[2] - a[2]);

  console.log("\n=== LISTADO ORDENADO POR NOTA (MAYOR A MENOR) ===");
  for (let persona of personasOrdenadas) {
    console.log(
      `Nombre: ${persona[0]} | Edad: ${persona[1]} | Nota: ${persona[2]}`,
    );
  }

  let sumaNotas = 0;
  for (let persona of personas) {
    sumaNotas += persona[2];
  }

  let promedio = sumaNotas / personas.length;

  console.log("\n=== PROMEDIO GENERAL DE NOTAS ===");
  console.log(`Promedio: ${promedio.toFixed(2)}`);

  rl.close();
}

main();
