// Namespace
const restaurantApp = {};

restaurantApp.saucers = [
  {
    saucers: "Pizza",
    price: 30,
  },
  {
    saucers: "Hot Dog",
    price: 20,
  },
  {
    saucers: "Hamburguesa",
    price: 35,
  },
];

restaurantApp.functions = {
  showMenu: (saucers) => {
    console.log("Bienvenidos a nuestro menu");

    saucers.forEach((saucer, index) => {
      console.log(`${index} : ${saucer.saucers} $${saucer.price}`);
    });
  },
  order: (id) => {
    console.log(
      `Tu platillo: ${restaurantApp.saucers[id].saucers} se esta preparando`
    );
  },
};

const { saucers } = restaurantApp;

restaurantApp.functions.showMenu(saucers);

restaurantApp.functions.order(1);
