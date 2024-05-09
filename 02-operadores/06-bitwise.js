//Decimal: 0,1,2,3,4,5,6,7,8,9
//Binario 0,1
//bit: 0 1
//Byte: 00000000 (8 bits)
//Byte: 00000000 = 0
//Byte: 00000001 = 1
//Byte: 00000010 = 2
//Byte: 00000011 = 3
//Byte: 00000100 = 4
//Byte: 00000101 = 5
//Byte: 00000110 = 6


//solo activa el 1 si cualquiera de los dos es 1
console.log(1 | 3); //00000011
console.log(1 | 4); //00000101
console.log(3 | 5); //00000111 

//Solo activa el 1 si los dos son 1.
console.log(1 & 3); //00000001 
console.log(1 & 4); //00000000
console.log(3 & 5); //00000001 


