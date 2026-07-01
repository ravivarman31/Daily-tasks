import React, { useState } from 'react'

const DarkModeToggle = () => {

    const[darkMode,setDarkMode]= useState(false);

  return (
    <div

     style={{
     backgroundColor:darkMode ? "black" : "White",
     color: darkMode ? "White" : "black",

     minHieght: "100vh",
     textAlign: "centre",
     paddingTop: "50px",

     }}
     >

        <h2>Dark Mode Toggle</h2>

        <h3>
      
      Current Mode : {darkMode ? "Dark" : "Light Mode"}


        </h3>


        <button onClick={() => setDarkMode(!darkMode)}>
            
         switch Mode
            
            </button>
            
            
        
      
    </div>
  )
}

export default DarkModeToggle