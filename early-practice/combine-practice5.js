const posts = [
  { title: "Intro to JS", author: "Alice" },
  { title: "CSS Basics", author: "Bob" },
  { title: "Advanced JS", author: "Alice" },
  { title: "React Guide", author: "Alice" },
  { title: "Node.js", author: "Charlie" },
  { title: "Design Systems", author: "Bob" }
];

const postsCount = posts.reduce((acc, post) => {
    if(acc[post.author]) {
        acc[post.author]++;
    } else {
        acc[post.author] = 1; 
    }

    return acc;

},{});

const postStats = Object.entries(postsCount)
    .map(([author, count])=> ({author, count}))
    .sort((a, b) => b.count - a.count);

console.log(postStats);


