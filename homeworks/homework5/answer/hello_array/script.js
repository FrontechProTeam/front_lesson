const array = ["h", "e", "l", "l", "o"];

array.map(val => {
  console.log(val);
});

// forを使ったやり方
/*
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
*/

// for..ofを使ったやり方
/*
for (let val in array) {
  console.log(val);
}
*/

