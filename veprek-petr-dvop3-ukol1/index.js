const Array = ["Lodash","React","Next","Strapi","Axios","Typescript"]

//Vytvoření cyklu
for(let i = 0; i < 6; i++){
    console.log(Array[i])
}

for(let i = Array.length - 1; i > 0 ; i--){
    console.log(Array[i])
}

// const serazenePole = Array.sort()
// console.log(serazenePole)

let car = {
    type:"Fiat",
    model:"500",
    color:"white"
}
console.log(car.type,car.model,car.color)
let x = 1;
let y = 555;
const nahodneCislo = Math.random(x,y);
console.log(`Náhodné číslo je ${nahodneCislo}`);
