const students =[

 {id:1,name: "Arun", mark:85},
 {id:2,name: "Adhi", mark:49},
 {id:3,name: "Vijay", mark:90},
 {id:4,name: "Ravi", mark:35}

];


// map()

console.log("All the Students");
students.map(student  =>  {
  console.log(student.name,"-", student.mark);

});



//find()

console.log("\nStudent with ID 3:");
const student = students.find(student => student.id===3);
console.log(student);


//reduce()

const totalMarks = students.reduce( 
    (total,student) => total + student.mark,
    0
);

console.log("\n Total Marks:", totalMarks);

//Average

const averageMark=totalMarks/ students.length;
console.log("Average Mark:", averageMark);
