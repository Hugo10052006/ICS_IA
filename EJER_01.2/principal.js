"use strict";
// ============================================================
// 1. Variables con tipo INFERIDO (TypeScript deduce el tipo)
// ============================================================
let edad = 25; // TypeScript infiere: number
let esActivo = true; // TypeScript infiere: boolean
// ============================================================
// 2. Variables con tipo ANOTADO explícitamente
// ============================================================
let nombre = "Ana";
let altura = 1.68;
let ciudad; // declarada sin valor: aquí la anotación es necesaria
ciudad = "Gijón";
console.log(nombre, edad, esActivo, altura, ciudad);
// ============================================================
// 3. Provocar errores de tipos
//    Quita el // de UNA línea cada vez, ejecuta  tsc principal.ts
//    y observa el error. Después vuelve a comentarla.
// ============================================================
// edad = "veinte";
// ERROR TS2322: Type 'string' is not assignable to type 'number'.
// esActivo = "sí";
// ERROR TS2322: Type 'string' is not assignable to type 'boolean'.
// let curso: string = 2;
// ERROR TS2322: Type 'number' is not assignable to type 'string'.
// ---- Corrección: asignar un valor del tipo correcto ----
edad = 26;
esActivo = false;
let curso = "2.º DAW";
console.log(edad, esActivo, curso);
// ============================================================
// 4. Objeto tipado
// ============================================================
let persona = {
    nombre: "Luis",
    edad: 30,
    esSocio: true,
};
console.log(persona);
// persona.apellido = "Pérez";
// ERROR TS2339: Property 'apellido' does not exist on type
//               '{ nombre: string; edad: number; esSocio: boolean; }'.
// let otra: { nombre: string; edad: number; esSocio: boolean } = { nombre: "Eva", edad: 22 };
// ERROR TS2741: Property 'esSocio' is missing in type '{ nombre: string; edad: number; }'.
// ---- Corrección: usar solo las propiedades que existen ----
persona.nombre = "Luis Pérez";
persona.edad = 31;
persona.apellido = "oe";
console.log(persona);
