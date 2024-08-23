const a = [1, 2, 34, 6, 0, 201, 2331, 333, 1230, 25];

function linersearch(a, num) {
  for (let index = 0; index < a.length; index++) {
    if (a[index] === num) {
      return `${num} \tValue is present in array`;
    }
  }
  return `${num}\t Value is not present in array`;
}

let num = 6;

console.log(linersearch(a, num));
