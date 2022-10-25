let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let [cakes, pie, eggMcMuffin, sausageMcMuffin, coffee, hashBrown] = order;

console.log(
  `QTY          ITEM                 TOTAL
${cakes.quantity}            ${cakes.itemName}            ${cakes.unitPrice}
${pie.quantity}            ${pie.itemName}            ${pie.unitPrice}
${eggMcMuffin.quantity}            ${eggMcMuffin.itemName}         ${eggMcMuffin.unitPrice}
${sausageMcMuffin.quantity}            ${sausageMcMuffin.itemName}     ${sausageMcMuffin.unitPrice}
${coffee.quantity}            ${coffee.itemName}           ${coffee.unitPrice}
${hashBrown.quantity}            ${hashBrown.itemName}           ${hashBrown.unitPrice}
`
);
let total = 0;
order.map((num) => (total += num.quantity * num.unitPrice));
console.log(`Total: ${total}`);
