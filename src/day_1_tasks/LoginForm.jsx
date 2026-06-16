import {useState} from "react";

function LoginForm() {

 const[email,setEmail] = useState("");
 const[password,setPassword]= useState("");
 const[message,setMessage] = useState("");


 const handleSubmit = (e) => {
    e.preventDefault();

    if(email ==="")  {
      setMessage("Email required");
    } else if(password.length <6) {
        setMessage("Password must be at least 6 characters");
    
    } else {
        setMessage("Login Successful");

    }
 };

    return (

    

            <form onSubmit={handleSubmit}>
            <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value )}
            />

            <br/><br/>

            <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}

            />

            <br /><br/>

            <button type="submit">Login</button>

            <p>{message}</p>

        </form>

    );

}

export default LoginForm;