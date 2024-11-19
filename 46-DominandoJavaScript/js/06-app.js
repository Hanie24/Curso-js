// New Binding
function Car(model, color) {
  this.model = model;
  this.color = color;
}

const car = new Car("Camaro", "Azul");

console.log(car);

// Window Binding

window.color = "negro";
function otherColor() {
  console.log(color);
}

otherColor();
