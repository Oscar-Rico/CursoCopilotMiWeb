const { test } = require("node:test");
const assert = require("node:assert/strict");
const { es_mayor_de_edad } = require("./calculadora.js");

const casos = [
    { edad: 17, esperado: false, descripcion: "17 años no es mayor de edad" },
    { edad: 18, esperado: true, descripcion: "18 años es mayor de edad" },
    { edad: 19, esperado: true, descripcion: "19 años es mayor de edad" },
];

for (const { edad, esperado, descripcion } of casos) {
    test(descripcion, () => {
        assert.equal(es_mayor_de_edad(edad), esperado);
    });
}

const edades_invalidas = [
    { edad: -1, descripcion: "rechaza una edad negativa" },
    { edad: "18", descripcion: "rechaza una edad escrita como texto" },
    { edad: null, descripcion: "rechaza null" },
    { edad: Number.NaN, descripcion: "rechaza NaN" },
    { edad: Number.POSITIVE_INFINITY, descripcion: "rechaza infinito" },
];

for (const { edad, descripcion } of edades_invalidas) {
    test(descripcion, () => {
        assert.throws(() => es_mayor_de_edad(edad), TypeError);
    });
}
