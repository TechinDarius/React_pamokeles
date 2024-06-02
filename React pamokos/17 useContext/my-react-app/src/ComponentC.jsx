import ComponentD from "./ComponentD.jsx"
import { useContext } from 'react';
import { UserContext } from './ComponentA.jsx';

function ComponentC(){
        // jei naudojam props drilling reikia perduoti props i ContextC(props)

        const user = useContext(UserContext);

    return(
        <div className="box">
        <h1>Component C</h1>
        {/* <ComponentD user={props.user}></ComponentD> */}
        <h2>{`Hello again ${user}`}</h2>
        <ComponentD ></ComponentD>

        </div>
    );
}
export default ComponentC;