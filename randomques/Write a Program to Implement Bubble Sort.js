let array = [64, 34, 25, 12, 22, 11, 90];

function bubble(array) {
  for (let i = 0; i < array.length; i++) {
    let swap = true;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swap = true;
      }
      if (!swap) break;
    }
  }
  return array;
}

console.log(bubble(array));
