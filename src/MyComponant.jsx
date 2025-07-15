import React ,{useState} from 'react';
function MyComponant(){

    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [isEmployed,setIsEmployed] = useState(false);
    const updateName=() => {
          //name = "SpongBob";
          //console.log(name);
          setName("SpongBob");
    }

    const incrementAge = () => {
        setAge(age + 1 );  
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>toggle Status</button>
        </div>
            );
}
export default MyComponant