for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log(`Este es el número ${i}`);
    break;
  }
  console.log("break", `Número: ${i}`);
}

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log(`CINCO`);
    continue;
  }
  console.log("continue", `Número: ${i}`);
}
