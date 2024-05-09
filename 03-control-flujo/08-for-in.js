let user = {
    id: 1,
    name: "Brandon Castro",
    age: 25,
};


//iterar los elementos del diccionario de esta manera (FOR IN)
for (let prop in user ){
    console.log(prop,user[prop]);
}

let animales =["Chanchito feliz", "Dragon", "Canguro"]

for (let indice in animales){
    console.log(indice, animales[indice])
}