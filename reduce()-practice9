const posts = [
  { title: "Post 1", tags: ["js", "web", "html"] },
  { title: "Post 2", tags: ["css", "web", "design"] },
  { title: "Post 3", tags: ["js", "node", "backend"] }
];

const tagCounts = posts.reduce((acc, post) => {
    for (let tag of post.tags) {
        if(acc[tag]) {
            acc[tag] += 1;
        } else {
            acc[tag] = 1;
        }
    } 
    return acc;


}, {});

const tagEntries = [];

for (let tag in tagCounts) {
    tagEntries.push({tag: tag, count: tagCounts[tag] });
}

const mostFrequent = tagEntries.reduce((acc, item) => {
    if(item.count > acc.count) {
        return item;
    } else {
        return acc;
    }
});

console.log(mostFrequent.tag);