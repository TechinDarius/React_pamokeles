import { useContext } from 'react';
import { UserContext } from './ComponentA.jsx';

function ComponentD() {
    // jei naudojam props drilling reikia perduoti props i ContextD(props)

    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>Component D</h1>
            <h2>{`bye ${user}`}</h2>

        </div>
    );
}
export default ComponentD;