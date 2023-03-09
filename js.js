"use strict";

let myObjects = [
  { name: "Tip", type: "bird", color: "blue" },
  { name: "Pepe", type: "bird", color: "green" },
  { name: "John", type: "bird", color: "green" },
  { name: "Flipper", type: "penguin", color: "grey" },
  { name: "Pepe", type: "bear", color: "green" },
];

function filterOn(objToFilterOn, objOfFilters) {
  const arrayOfPropNames = Object.getOwnPropertyNames(objOfFilters);

  const returnVal = objToFilterOn.filter(myFilter);
  return returnVal;
  function myFilter(animal) {
    let arrOfBooleans = [];
    arrayOfPropNames.forEach((element, i) => {
      arrOfBooleans.push(animal[arrayOfPropNames[i]] === (objOfFilters[arrayOfPropNames[i]] === null ? animal[arrayOfPropNames[i]] : objOfFilters[arrayOfPropNames[i]]));
    });

    return !arrOfBooleans.includes(false);
  }
}
console.log(filterOn(myObjects, { name: "Pepe", type: null, color: "green" }));