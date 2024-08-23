const a = [1, 2, 34, 6, 0, 201, 2331, 333, 1230, 25];

let max = a[0];
let min = a[0];
for (let i = 1; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
  } else if (min > a[i]) {
    a[i] = min;
  }
}

console.log("values:", min, max);
