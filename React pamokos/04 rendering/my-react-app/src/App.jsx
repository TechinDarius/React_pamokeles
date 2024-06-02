import UserGreeting from "./UserGreeting.jsx";

function App() {
return(
  <>
<UserGreeting isLoggedIn={true} userName="Darius"/>
<br />
<UserGreeting isLoggedIn={false} userName="Darius"/>
<br />
<UserGreeting isLoggedIn={true} />
<br />
<UserGreeting isLoggedIn={false} />
<br />
<UserGreeting />
</>
);
}

export default App
