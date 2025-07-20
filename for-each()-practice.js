const students = [
  { name: 'Andrii', score: 75 },
  { name: 'Oksana', score: 58 },
  { name: 'Dmytro', score: 91 },
  { name: 'Iryna', score: 42 }
];

students.forEach((student) => {
    if (student.score < 60) {
        console.log(`Student ${student.name} failed with ${student.score} points.`)
    }

    else {
        console.log(`Student ${student.name} passed with ${student.score} points.`)
    }
}); 