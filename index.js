const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


//Ejercicio A
console.log('Nuestras pizzas impares:');
const pizzasImpar = pizzas.filter(pizzaImpar => {
  return pizzaImpar.id % 2 === 1;
});

pizzasImpar.forEach(pizzas => {
  console.log(`- ${pizzas.nombre}`);
});

console.log('-------------------------');


//Ejercicio B
const pizzasBaratas = pizzas.find(pizzaBarata => {
  return pizzaBarata.precio < 600;
});

console.log(`- La pizza más barata de nuestro menú es: ${pizzasBaratas.nombre} con un valor de $${pizzasBaratas.precio}. Excelente para disfrutar en familia y con amigos!`);

console.log('-------------------------');


//Ejercicio C
console.log('Nuestro menú contiene una gran variedad de pizzas:');
const catalogoDePizzas = pizzas.forEach(catalogoDePizza => {
  console.log(`- ${catalogoDePizza.nombre} y su precio $${catalogoDePizza.precio}`);
});

console.log('-------------------------');


//Ejercicio D
const ingredientesPizzas = pizzas.forEach(ingredientePizza => {
  console.log(`La ${ingredientePizza.nombre} tiene los siguientes ingredientes:`);
  ingredientePizza.ingredientes.forEach(ingrediente => {
    console.log(`- ${ingrediente}`);
  });
});