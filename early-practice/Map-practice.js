const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "editor" },
  { name: "Charlie", role: "viewer" },
  { name: "Diana", role: "admin" }
];

const mapNames = new Map();

for(const user of users) {
    const { name, role } = user;
    if (mapNames.has(role)) {
        const currentNames = mapNames.get(role);
        currentNames.push(name);
        mapNames.set(role, currentNames);
    } else {
        mapNames.set(role, [name]);
    }
} 

console.log(mapNames);