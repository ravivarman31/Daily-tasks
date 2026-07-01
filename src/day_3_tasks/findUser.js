const users = [
  { id: 1, name: "Sudhan" },
  { id: 2, name: "Kumar" },
  { id: 3, name: "Ravi" }
];

const user = users.find(item => item.id === 2);

console.log("User Details:");
console.log("ID:", user.id);
console.log("Name:", user.name);