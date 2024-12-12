const {Prepare, BoildWater, Cook} = require("./Prepare.js");

const main = () =>{
    Prepare().then((res)=>{
        console.log(res);
        return BoildWater();
    }).then((res)=>{
        console.log(res);
        return Cook();
    }).then((res)=>{
        console.log(res);
    });
}

main();
