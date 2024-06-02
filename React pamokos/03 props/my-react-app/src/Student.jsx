import PropTypes from 'prop-types'
function Student (props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isSudent?"Yes":"No"}</p>
        </div>
    );
}

//prop types
Student.propTypes={
name:PropTypes.string,
age:PropTypes.number,
isStudent: PropTypes.bool,
}
//default
Student.defaultProps={
    name:"Guest",
    age:0,
    isStudent:false,
}
export default Student