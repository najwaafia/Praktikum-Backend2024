const name1 = "Najwa Afia";
const age1 = "22";
const major1 = "IT";

console.log(name1, age1, major1);

const nilai = 90;
let grade = "";

if (nilai > 90){
    grade = "A";
} else if(nilai > 80){
    grade = "B";
} else {
    grade = "C";
}

console.log(`Nilai anda : ${grade}`);



console.log(`----------------------------`);
console.log(`Contoh Object`);

const user = {
    name: "Najwa Afia",
    address: "Depok",
    age: 22,
    isMarried: false,
}

const {name, address, age, isMarried} = user;
console.log(name, address, age, isMarried);
