import { useState } from "react";



// ---------------------------------------------

const StateInObject01 = () => {

  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 

function updateGreeting(){
    // you can do this but it is not ideal
    setGreeting({greet: "Hello, world wide web"});
}

// ---------------------------------------------

    // The correct way to update the 
    // state object in React when using useState

const [greeting2, setGreeting2] = useState({greet: "Hello World 2"});

function updateGreeting2(){
    const newGreeting2={...greeting2}
    newGreeting2.greet="Hello World Wide Web 2";
    setGreeting2(newGreeting2);
}

    return (
        <>
        <h3>SateInObject01</h3>
        <p>An example of holding state in an object 
            and updating it based on user-generated events</p>
            <p><span className="green">{greeting.greet}</span></p>
            <p><button onClick={updateGreeting}>Update Greeting</button></p>
            <hr/>
             <p><span className="green">{greeting2.greet}</span></p>
            <p><button onClick={updateGreeting2}>Update Greeting</button></p>           

         </>   
    )
}

export default StateInObject01;