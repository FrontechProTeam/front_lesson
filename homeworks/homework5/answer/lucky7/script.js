const randomNum = Math.floor(Math.random() * 10);
if (randomNum === 7) {
  console.log("ラッキー７😎");
} else {
  console.log(randomNum);
}

// switchを使ったやり方
// でも分岐二つの時にswitchは使わない方がいい
/*
switch (randomNum) {
  case 7:
    console.log("ラッキー７😎");
    break;

  default:
    console.log(randomNum);
}
*/
