
import EmployeeBonus from "./day_1_tasks/EmployeeBonus";
import LoginForm from "./day_1_tasks/LoginForm";
import ProductCalculator from "./day_1_tasks/ProductCalculator";
import StudentGradeSystem from "./day_1_tasks/StudentGradeSystem";
import TodoTaskCounter from "./day_1_tasks/TodoTaskCounter";
import UserSearch from "./day_1_tasks/UserSearch";

function App() {

  return (
    <div>
       <h1>Login Validation </h1>
       <LoginForm />
       <br/>
       <h1>Product Calculator</h1>
       <ProductCalculator/>
       <br/>
       <h1>Student Grade System</h1>
       <StudentGradeSystem/>  
       <br/>
       <h1>Employee Bonus</h1>
       <EmployeeBonus/>
       <br/>
       <h1>Todo Task Counter</h1>
       <TodoTaskCounter/>
       <br/>
       <h1>User Search</h1>
       <UserSearch/>
    </div>
  );
}

export default App;