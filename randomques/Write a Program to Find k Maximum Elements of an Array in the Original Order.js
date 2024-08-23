let a = [50, 8, 45, 12, 25, 40, 84];
let k = 3;

function sorted(a) {
  for (let i = 0; i < a.length; i++) {
    let swap = true;

    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] < a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swap = true;
      }
    }
    if (!swap) break;
  }
  return a;
}

console.log("Sorted arr", sorted(a));

function high(a) {
  let final = [];
  for (let i = 0; i < k; i++) {
    final.push(a[i]);
  }
  return final;
}

console.log("high k value:", high(a));
