import ComponentC from "./ComponentC.jsx"

function ComponentB(){
    // jei naudojam props drilling reikia perduoti props i ContextB(props)
    return(
        <div className="box">
        <h1>Component B</h1>
        {/* <ComponentC user={props.user}></ComponentC> */}
        <ComponentC></ComponentC>

        </div>
    );
}
export default ComponentB;