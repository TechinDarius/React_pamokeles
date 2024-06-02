
function Button(){

const handleClick = (e)=>e.target.textContent = "DONE!";

    return(
        <button onClick={(e)=>handleClick(e)}>Click me!</button>
//        <button onDoubleClick={(e)=>handleClick(e)}>Click me!</button>
    );
}
export default Button

// function Button(){

//     let count =0;

//     const handleClick = (name)=>{

//         if (count <3){
//             count++;
//             console.log(`${name} you clicked me ${count} time/s`);
//         }
//         else {
//             console.log(`${name} stop clicking me!`);
//         }
//     };
//     //const handleClick2 = (name)=>console.log(`${name} Stop clicking me!`);

//     return(
//         <button onClick={()=>handleClick("Dude")}>Click me!</button>
//     );
// }
// export default Button