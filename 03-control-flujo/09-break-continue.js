// Estos se pueden usar para for, for in, for of, do while

let i = 0

while (i<6) {
    i++;
    if (i === 2){
        console.log("he encontrado esto sospechoso", i)
        continue;
    }
    if (i === 5){
        console.log("Hasta aqui nos quedamos", i)
        break;
    }
    console.log(i)
}