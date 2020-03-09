const array = [1, 2, 3, 4, 5];
let sum = 0;

array.map(val => {
  sum += val;
});

console.log(sum);

// forを使ったやり方
/*
for (let i = 0; i < array.length; i++) {
  sum += array[i];
} 
*/

// reduceを使ったやり方
// 少し難しいので無理して使う必要はない
/*
const result = array.reduce((sum, current) => sum + current, 0);
console.log(result);
*/
