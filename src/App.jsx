import EmployeeBonus from "./day_1_tuesday_tasks/EmployeeBonus";
import LoginForm from "./day_1_tuesday_tasks/LoginForm";
import ProductCalculator from "./day_1_tuesday_tasks/ProductCalculator";
import StudentGradeSystem from "./day_1_tuesday_tasks/StudentGradeSystem";
import TodoTaskCounter from "./day_1_tuesday_tasks/TodoTaskCounter";
import UserSearch from "./day_1_tuesday_tasks/UserSearch";

import DarkModeToggle from "./day_2_wednesday_tasks/DarkModeToggle";
import EmployeeForm from "./day_2_wednesday_tasks/EmployeeForm";
import PreviousSearchTracker from "./day_2_wednesday_tasks/PreviousSearchTracker";
import ProductSearch from "./day_2_wednesday_tasks/ProductSearch";
import UserDataFetch from "./day_2_wednesday_tasks/UserDataFetch";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 1 - Tuesday Tasks</h1>

      <h2>Login Validation</h2>
      <LoginForm />

      <hr />

      <h2>Product Calculator</h2>
      <ProductCalculator />

      <hr />

      <h2>Student Grade System</h2>
      <StudentGradeSystem />

      <hr />

      <h2>Employee Bonus</h2>
      <EmployeeBonus />

      <hr />

      <h2>Todo Task Counter</h2>
      <TodoTaskCounter />

      <hr />

      <h2>User Search</h2>
      <UserSearch />

      <hr />
      <hr />

      <h1>Day 2 - Wednesday Tasks</h1>

      <h2>Dark Mode Toggle</h2>
      <DarkModeToggle />

      <hr />

      <h2>Employee Form</h2>
      <EmployeeForm />

      <hr />

      <h2>Previous Search Tracker</h2>
      <PreviousSearchTracker />

      <hr />

      <h2>Product Search</h2>
      <ProductSearch />

      <hr />

      <h2>User Data Fetch</h2>
      <UserDataFetch />
    </div>
  );
}

export default App;