const playlist = [
  "intro",
  "track1",
  "track2",
  "ad",
  "track3",
  "track4",
  "ad",
  "outro"
];

const index1 = playlist.indexOf('ad');
playlist.splice(index1, 1, 'remix1', 'remix2');

const index2 = playlist.indexOf('ad');
playlist.splice(index2, 1);

const newPLaylist = playlist.slice(1, -1);

console.log(newPLaylist);

