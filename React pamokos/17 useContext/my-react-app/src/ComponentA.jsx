import { useState, createContext} from "react";
import ComponentB from "./ComponentB.jsx"

export const UserContext = createContext();

function ComponentA(){

    const [user,setUser] = useState("Darius");

    return(
        <div className="box">
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value ={user}>
        <ComponentB></ComponentB>
        </UserContext.Provider>

        {/* <ComponentB user={user}></ComponentB> */}
        </div>
    );
}
export default ComponentA;