const students = [
  { name: "Anna", presentDays: [true, true, false, true] },
  { name: "Bohdan", presentDays: [true, false, false, false] },
  { name: "Lena", presentDays: [true, true, true, true] },
  { name: "Ivan", presentDays: [false, false, true, false] }
];


function evaluateAttendance(students) {
    return students.map(student => {
    let count = 0;

    for (let day of student.presentDays) {
        if (day === true) {
            count++;
        }
    }

    let status = count >= 3 ? 'ok' : 'problem'

    return {
        ...student,
        status: status
        };
    });
}
console.log(evaluateAttendance(students));