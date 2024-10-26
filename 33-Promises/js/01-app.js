const countries = [
  "Francia",
  "México",
  "España",
  "Perú",
  "Autralia",
  "Inglaterra",
];

function newCountry(country, callback) {
  setTimeout(() => {
    countries.push(country);
    callback();
  }, 2000);
}

function showContries() {
  setTimeout(() => {
    countries.forEach((country) => {
      console.log(country);
    });
  }, 1000);
}

showContries();
newCountry("Alemania", showContries);
