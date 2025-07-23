//Provider Component
/* useContext() = React Hook its allows to share values between 
multiple levels of components without passing props through each level*/
import ComponentB from "./ComponentB";
import React,{useState, createContext} from "react";

export const UserContext = createContext();
function ComponentA(){

    const [user, setUser] = useState("zakariaa");
    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
            
        </div>
    );
}
    export default ComponentA