const { json } = require("express");

const a = [1, 2, 34, 6, 0, 201, 2331, 333, 1230, 25];
// first we willl sort this with bubble sort

function buu(a) {
  for (let i = 0; i < a.length; i++) {
    let swap = false;

    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swap = true;
      }
    }
    if (!swap) break;
  }
  return a;
}

console.log("sorted arr:", buu(a));

function binary(a, target) {
  let max = a.length - 1;
  let min = 0;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (target === a[mid]) {
      return `${target} has found`;
    } else if (target < a[mid]) {
      max = mid - 1;
    } else if (target > a[mid]) {
      min = mid + 1;
    } else {
      return `${target} not found`;
    }
  }
}

let target = 25;
console.log("bINARY SEARCH :", binary(a, target));
