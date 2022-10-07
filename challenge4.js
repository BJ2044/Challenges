//Write a function that takes an array of students,and lists out last names


let students =    [
    {first: 'Tyler', last: 'Jefferson'},
    {first: 'Brad', last: 'Jones'},
    {first: 'Peter', last: 'Lewandowski'},
    {first: 'Emily', last: 'LaBelle'},
    ]

function listStudents(students) {
   for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(student.last)
   } 
}

listStudents(students)