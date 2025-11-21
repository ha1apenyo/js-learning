const desserts = [
  { type: "cake", flavors: ["chocolate", "vanilla"] },
  { type: "mousse", flavors: ["strawberry"] },
  { type: "croissant", flavors: ["almond", "butter"] }
];

const menuLabels = desserts.flatMap(dessert => dessert.flavors.map(flavor => `${flavor} ${dessert.type}`));

console.log(menuLabels);

