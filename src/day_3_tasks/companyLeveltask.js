const orders = [
  { id: 1, customer: "John", amount: 5000, status: "Completed" },
  { id: 2, customer: "David", amount: 3000, status: "Pending" },
  { id: 3, customer: "Sam", amount: 7000, status: "Completed" },
  { id: 4, customer: "Peter", amount: 2000, status: "Pending" }
];

// map()
console.log("All Orders:");
orders.map(order => {
  console.log(order.id, order.customer, order.amount, order.status);
});

// filter()
console.log("\nCompleted Orders:");
const completedOrders = orders.filter(
  order => order.status === "Completed"
);

completedOrders.map(order => {
  console.log(order.customer, "-", order.amount);
});

// find()
console.log("\nOrder ID 3:");
const order = orders.find(
  order => order.id === 3
);

console.log(order);

// reduce()
const totalRevenue = orders.reduce(
  (total, order) => total + order.amount,
  0
);

console.log("\nTotal Revenue:", totalRevenue);