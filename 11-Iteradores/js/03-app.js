//Fizz Buzz

//3,,6,9,12... Fizz

//5, 10, 15, 20... Buzz

//15, 38, 45... Fizz Buzz

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log(`${i} fizz buzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} buzz`);
  }
}
