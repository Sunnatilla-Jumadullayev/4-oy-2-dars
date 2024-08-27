// 1 - masala
{
  console.log(`1-masala`);
  let a = 5;
  if (a > 0) {
    a++;
    console.log(a);
  } else {
    console.log(a);
  }
}
// 2- masala
{
  console.log(`2 - masala`);
  let a = -6;
  if (a > 0) {
    a++;
    console.log(a);
  } else {
    a -= 2;
    console.log(a);
  }
}
// 3 - masala
{
  console.log(`3 - masala`);
  let a = -8;
  if (a > 0) {
    a++;
    console.log(a);
  } else if (a < 0) {
    a -= 2;
    console.log(a);
  } else {
    a = 10;
    console.log(a);
  }
}
// 4 - masala
{
  console.log(`4 - masala`);
  let a = -9;
  let b = -8;
  let d = 3;
  let musbatSon = 0;
  if (a > 0) {
    musbatSon++;
  }
  if (b > 0) {
    musbatSon++;
  }
  if (d > 0) {
    musbatSon++;
  }
  console.log(`Bu yerda ${musbatSon} ta musbat son bor`);
}
// 5 - masala
{
  console.log(`5 - masala`);
  let a = -3;
  let b = 7;
  let d = 12;
  let musbatSon = 0;
  let manfiySon = 0;
  if (a > 0) {
    musbatSon++;
  } else {
    manfiySon++;
  }
  if (b > 0) {
    musbatSon++;
  } else {
    manfiySon++;
  }
  if (d > 0) {
    musbatSon++;
  } else {
    manfiySon++;
  }
  console.log(
    `Bu yerda ${musbatSon} ta musbat son va ${manfiySon} ta manfiy son bor`
  );
}
// 6 - masala+
{
  console.log(` 6 - masala`);
  let a = 7;
  let b = 8;
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
// 7 - masala+
{
  console.log(` 7 - masala`);
  let a = 9;
  let b = 8;
  if (a > b) {
    console.log(2);
  } else {
    console.log(1);
  }
}
// 8 - masala+
{
  console.log(` 8 - masala`);
  let a = 723;
  let b = 800;
  if (a > b) {
    console.log(a);
    console.log(b);
  } else {
    console.log(b);
    console.log(a);
  }
}
// 9 - masala
{
  console.log(` 9 - masala`);
  let a = 9;
  let b = 5;
  let c;
  //   c = 4;
  if (a > b) {
    c = b;
    b = a;
    a = c;
    console.log(b);
    console.log(a);
  }
}
// 10 - masala
{
  console.log(`10 - masala`);
  a = 9;
  b = 98;
  c = a + b;
  if (a === b) {
    a = c;
    b = c;
    console.log(a);
    console.log(b);
  } else {
    a = 0;
    b = 0;
    console.log(a);
    console.log(b);
  }
}
