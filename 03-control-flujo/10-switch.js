//Donde queremos que este se vaya dependiendo del valor de una variable.

let accion = "hola"

switch (accion) {
    case "listar":
        console.log("Accion de listar");
        break;
    case "guardar":
        console.log("Accion de guardar");  
        break;
    default:
        console.log("Accion no reconocida")      
}


//en if y else puedes hacerlo igualmente, pero switch es mas productivo.
if (accion == "listar"){
    console.log("Accion de listar");
}
else if(accion == "guardar"){
    console.log("Accion de guardar");
}
else {
    console.log("Accion no reconocida");
}