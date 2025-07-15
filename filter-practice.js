const courses = [
  {
    title: "JavaScript",
    students: [
      { name: "Alice", grade: 85 },
      { name: "Bob", grade: 42 },
      { name: "Clara", grade: 51 }
    ]
  },
  {
    title: "Python",
    students: [
      { name: "Daniel", grade: 47 },
      { name: "Eva", grade: 33 }
    ]
  },
  {
    title: "Java",
    students: [
      { name: "Frank", grade: 95 },
      { name: "Grace", grade: 54 }
    ]
  }
];

const filtredCourses = courses
    .filter(course => course.students
    .filter(student => student.grade >= 50).length > 0)
    .map(course => ({
      title: course.title,
      students: course.students.filter(s => s.grade >= 50)
    }));
  
console.log(filtredCourses);




