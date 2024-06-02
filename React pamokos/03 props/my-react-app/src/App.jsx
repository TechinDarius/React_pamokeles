import Student from "./Student";
function App() {
return(
  <>
<Student name="Bob" age="30" isSudent={true}/>
<Student name="Patrick" age={42} isSudent={false}/>
<Student name="Squid" age={50} isSudent={false}/>
<Student name="Sandy" age={27} isSudent={true}/>
<Student />

</>
);
}

export default App
