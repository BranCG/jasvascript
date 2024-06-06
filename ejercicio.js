function unir() {
    let arreglo = ["uno", "dos", "tres", "cuatro", "cinco"];
    let barra = arreglo.join("/");
    console.log(barra);
};

function multiplicadorDeArreglo(a) {
    let arreglo2 = [a, 4, 6, 8, 9];
    let respuesta = [];
    for (const numerito of arreglo2) {
        respuesta.push(numerito * a);
    }
    console.log(arreglo2)
    console.log("[" + respuesta.toString() + "]");
};