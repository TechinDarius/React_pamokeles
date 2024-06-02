import PropTypes from 'prop-types'
function UserGreeting(props){

const welcomeMsg =  <h2 className="welcome-msg">Welcome {props.userName}</h2>
const loginMsg = <h2 className="login-prompt">Please log in to continue</h2>

    return(props.isLoggedIn?welcomeMsg:loginMsg)

}

UserGreeting.propTypes = {
    isLoggedIn:PropTypes.bool,
    userName:PropTypes.string,
}
UserGreeting.defaultProps ={
    isLoggedIn:false,
    userName:"Guest",

}

export default UserGreeting

// function UserGreeting(props){

//     if(props.isLoggedIn){
//         return <h2 className="welcome-msg">Welcome {props.userName}</h2>
//     }

//     return <h2 className="login-prompt">Please log in to continue</h2>
    

// }
// export default UserGreeting