const students = [
  { name: "Anna", scores: [90, 85, 100] },
  { name: "Bohdan", scores: [70, 60, 58] },
  { name: "Lena", scores: [100, 100, 95] },
  { name: "Ivan", scores: [45, 50, 55] }
];

function evaluatePerformance(students) {
    return students.map(student => {
        let sum = 0;
        
    
    for (let score of student.scores) {
        sum += score;
    }

    let average = Math.round(sum / student.scores.length);

    let status = average >= 90 ? 'excellent' : average >= 70 && average <= 89 ? 'good' : 'poor';

    return {
        ...student,
        average: average,
        status: status
        };
    });
}

console.log(evaluatePerformance(students));