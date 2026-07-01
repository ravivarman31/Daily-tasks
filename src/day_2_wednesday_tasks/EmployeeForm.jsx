import React from 'react'
import {useState} from 'react'

const EmployeeForm = () => {

    const [name,setName] = useState("");
    const [employees,setEmployees] = useState([]);
    const [department,setDepartment] = useState("");
    const [salary,setSalary] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = { name,department,salary };
    setEmployees([...employees, newEmployee]);
    setName("");
    setDepartment("");
    setSalary("");
};

  return (
    <div>

        <h2>Employee Form</h2>

        <form onSubmit={handleSubmit}>
           <input type="text" placeholder= 'name' value={name} onChange={(e) => setName(e.target.value)} />
           <br/>
           <br/>
           <input type="text" placeholder= 'department' value={department} onChange={(e) => setDepartment(e.target.value)} />
           <br/>
           <br/>
           <input type="number" placeholder= 'salary' value={salary} onChange={(e) => setSalary(e.target.value)} />
           <br/>
           <br/>
           <button type="submit">Add Employee</button>

        </form>


        <h3>Total Employees: {employees.length}</h3>

        <ul>

            {employees.map((employee, index) => (
                <li key={index}>
                    <strong>{employee.name}</strong> - {employee.department} - ${employee.salary}
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default EmployeeForm
