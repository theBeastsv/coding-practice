let arr = [1, 2, 2, 3, 1, 1, 4, 5, 3, 2, 1];

function bub(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
}

console.log("buble.sort", bub(arr));

function occ(arr) {
  let count = {};
  arr.forEach((element) => {
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  });
  return count;
}

console.log("occ:", occ(arr));
