const posts = [
  { title: "Post 1", tags: ["js", "web", "html"] },
  { title: "Post 2", tags: ["css", "web", "design"] },
  { title: "Post 3", tags: ["js", "node", "backend"] }
];

const tagsAndValues = posts.reduce((acc, post) => {
    for (let tag of post.tags) {
        if(acc[tag]) {
            acc[tag] += 1;
        } else {
            acc[tag] = 1;
        }
    }
    return acc;
}, {});

console.log(tagsAndValues);