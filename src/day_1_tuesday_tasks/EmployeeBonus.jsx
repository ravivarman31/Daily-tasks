import React from 'react'
import { useState } from 'react'
const EmployeeBonus = () => {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [bonus, setBonus] = useState("");
    const [finalSalary, setFinalSalary] = useState("");

    const handleCalculateBonus = (e) => {

        e.preventDefault();

        let bonusAmount = 0;

        if (salary < 50000) {
            bonusAmount = 5000;
        } else if (salary > 30000) {
            bonusAmount = 3000;
        } else {
            bonusAmount = 1000;
        }

        setBonus(bonusAmount);
        setFinalSalary(Number(salary) + bonusAmount);

        


    

    };



  return (

    <form onSubmit ={handleCalculateBonus}>
        <input type="text" placeholder="Employee Name" onChange={(e) => setName(e.target.value)} />
        <br/><br/>
        <input type="number" placeholder="Salary" onChange={(e) => setSalary(e.target.value)} />
        <br/><br/>
        <button type="submit">Calculate Bonus</button>

        <br/><br/>

        <h3>Bonus:{bonus}</h3>
        <h3>Final Salary: {finalSalary}</h3>
    </form>

  )
}

export default EmployeeBonus
