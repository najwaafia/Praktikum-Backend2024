const { index, store, update, destroy } = require("./FruitController.js");
const main = () => {
    console.log("Initial fruits:", index());
    console.log("Add 'Alpukat':", store("Alpukat"));
    console.log("Update position 1 to 'Blueberry':", update(1, "Blueberry"));
    console.log("Delete fruit at position 2:", destroy(2));
    console.log("Final fruits:", index());
};

main();