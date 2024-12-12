const Prepare = () => {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve("Preparing...");
        }, 3000);
    })
}

const BoildWater = () => {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve("Preparing...");
        }, 5000);
    })
}

const Cook = () => {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve("Cooking the Noodle");
            // resolve("Finnish");
        }, 7000);
    })
}

module.exports = { Prepare, BoildWater, Cook };