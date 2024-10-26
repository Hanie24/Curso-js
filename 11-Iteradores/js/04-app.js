let i = 1;

// while (i < 10) {
//   console.log(`Número ${i}`);

//   i++;
// }

while (i < 100) {
  if (i % 15 === 0) {
    console.log(`${i} fizz buzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} buzz`);
  }

  i++;
}
