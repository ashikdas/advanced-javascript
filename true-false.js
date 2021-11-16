//Falsy
// 0
// ""
// null
// undefined
// NaN
// false

//Truthy
// '0', ' ', []

let name = ' ';
console.log(name);
if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}