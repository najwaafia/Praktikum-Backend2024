const fruits = require("./Data.js");

//using arror function
const index = () => {
    for(const fruit of fruits){
        return fruits;   
    }
};

const store = (name) => {
    fruits.push(name);
    return fruits;
}

const update = (position, name) => {
    if (position < 0 || position >= fruits.length) {
        return "Position out of range";
      }
      fruits[position] = name;
      return fruits;
}

const destroy = (position) => {
    if (position < 0 || position >= fruits.length) {
        return "Position out of range";
      }
      fruits.splice(position, 1);
      return fruits;
}

module.exports = {index, store, update, destroy};