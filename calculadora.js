function calcular_media(numeros) {
    if (numeros.length === 0) {
        throw new Error("No se puede calcular la media de una lista vacía.");
    }

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

// Esta función calcula el total de una lista de precios aplicando un IVA del 21 %.
function calcular_total_con_iva(precios) {
    // Empezamos en 0; aquí acumulamos los precios con IVA.
    let total_con_iva = 0;

    // Recorremos uno por uno todos los precios de la lista.
    for (let precio of precios) {
        // Solo contamos los precios positivos; los valores 0 o negativos se ignoran.
        if (precio > 0) {
            // Aplicamos el 21 % de impuesto multiplicando el precio por 1.21.
            // Después, sumamos ese importe al total acumulado.
            total_con_iva += precio * 1.21;
        }
    }

    // Redondeamos el total a dos decimales (céntimos) y lo devolvemos.
    return Math.round(total_con_iva * 100) / 100;
}

/**
 * Devuelve los números pares de la lista, cada uno multiplicado por 2.
 * @param {number[]} numeros - Lista de números que se va a revisar.
 * @returns {number[]} Nuevo array con los números pares duplicados.
 */
function obtener_pares_duplicados(numeros) {
    let pares_duplicados = [];
    for (let numero of numeros) {
        if (numero % 2 === 0) { // Comprobamos si el número es par
            pares_duplicados.push(numero * 2);
        }
    }
    return pares_duplicados;
}

/**
 * Verifica si una persona es mayor de edad.
 * @param {number} edad - La edad de la persona.
 * @returns {boolean} True si es mayor de edad, false en caso contrario.
 * @throws {TypeError} Si la edad no es un número finito no negativo.
 */
function es_mayor_de_edad(edad) {
    if (typeof edad !== "number" || !Number.isFinite(edad) || edad < 0) {
        throw new TypeError("La edad debe ser un número finito no negativo.");
    }

    return edad >= 18;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { es_mayor_de_edad };
}