const posts = [
  { title: "Post 1", tags: ["js", "web", "html"] },
  { title: "Post 2", tags: ["css", "web", "design"] },
  { title: "Post 3", tags: ["js", "node", "backend"] }
];

const uniqueTags = posts.reduce((acc, post) => {
   for (let tag of post.tags) {
        if(!acc.find(item => item === tag)) {
            acc.push(tag);
        }
   }
    return acc;

}, []);

console.log(uniqueTags);