
//Luke comple años.
const jedi = {nombre: "Luke Skywalker", edad: 19};
jedi.edad = 25;
console.log(jedi)

//Leia se presenta
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;
console.log("Soy "+nombre+" "+apellido+", "+"tengo "+edad+" años y soy una princesa de Alderaan.");

//Compro sable laser
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const totalPrecio = sable1.precio + sable2.precio;
console.log("La suma de comprar los dos sables asciende a: "+totalPrecio+" créditos de la República.");

//Compro nave
let precioBaseGlobal = 10000;

precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = precioBaseGlobal + nave1.precioBase;
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;

console.log("El precio del Ala-X asciende a: "+nave1.precioFinal+"y el del Halcón Milenario a: "+nave2.precioFinal+" créditos.")