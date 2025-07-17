const users = [
  { name: "Tom", likes: ["bananas", "apples", "chocolate"] },
  { name: "Linda", likes: ["oranges", "tea"] },
  { name: "Kate", likes: ["apples", "grapes"] },
  { name: "John", likes: ["water", "coffee"] },
  { name: "Sam", likes: [] }
];

const dontLikeApples = users
    .filter(user => !user.likes.some(item => item === "apples"))
    .map(user => user.name)
    
    console.log(dontLikeApples);