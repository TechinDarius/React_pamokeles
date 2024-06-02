
//inline scc style
function Button() {
    const styles={
            backgroundColor: "#00aaff",
            color: "#ffffff",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
    }
 return(
 <button style={styles}>Click me</button>
    );   
}
export default Button;

//modules css

//import styles from './Button.module.css'

// function Button
// () {
//  return(
//  <button className={styles.button}>Click me</button>
//     );   
// }
// export default Button;