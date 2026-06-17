import React from 'react'
import { useState } from 'react'


const StudentGradeSystem = () => {

  const [name, setName] = useState("");
  const [grades, setGrades] = useState("");
  const [mark, setMark] = useState("");

  const calculateGrade = () => {
    const studentMarks = Number(mark);

    if (studentMarks >=90) {
        setGrades("A");
    } else if (studentMarks >=75) {
        setGrades("B");
    } else if (studentMarks >=50) {
        setGrades("C");
    }else {
        setGrades("Fail");
    }

  };



  return (
    <div>

        

        <input type="text" placeholder='Student Name' value={name} onChange={(e) => setName(e.target.value)} />

        <br/><br/>


        <input type="number" placeholder='Mark' value={mark} onChange={(e) => setMark(e.target.value)} />
        <br/><br/>

        <button onClick={calculateGrade}>Calculate Grade</button>
        <br/><br/>
        <p>Grade: {grades}</p>
      
    </div>
  )
}

export default StudentGradeSystem
