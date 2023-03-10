"use strict";

let myObjects = [
  { name: "Tip", type: "bird", color: "blue" },
  { name: "Pepe", type: "bird", color: "green" },
  { name: "John", type: "bird", color: "green" },
  { name: "Flipper", type: "penguin", color: "grey" },
  { name: "Pepe", type: "bear", color: "green" },
];

// function filterOn(objToFilterOn, objOfFilters) {
//   const arrayOfPropNames = Object.getOwnPropertyNames(objOfFilters);

//   return objToFilterOn.filter(myFilter);

//   function myFilter(obj) {
//     let arrOfBooleans = [];
//     arrayOfPropNames.forEach((element, i) => {
//       arrOfBooleans.push(obj[arrayOfPropNames[i]] === (objOfFilters[arrayOfPropNames[i]] === null ? obj[arrayOfPropNames[i]] : objOfFilters[arrayOfPropNames[i]]));
//     });

//     return !arrOfBooleans.includes(false);
//   }
// }
// console.log(filterOn(myObjects, { name: "Pepe", type: null, color: "green" }));

function filterOn(objToFilterOn, objOfFilters) {
  const arrayOfPropNames = Object.getOwnPropertyNames(objOfFilters);

  return objToFilterOn.filter(myFilter);

  function myFilter(obj) {
    for (let i = 0; i < arrayOfPropNames.length; i++) {
      if (!(obj[arrayOfPropNames[i]] === (objOfFilters[arrayOfPropNames[i]] === null ? obj[arrayOfPropNames[i]] : objOfFilters[arrayOfPropNames[i]]))) {
        return false;
      }
    }
    return true;
  }
}
console.log(filterOn(myObjects, { name: "Pepe", type: null, color: "green" }));
