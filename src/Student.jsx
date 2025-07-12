import PropTypes from 'prop-types'
/*function Student(props){
return(
   <div className="student">
    <p>Name:{props.name}</p>
    <p>Age:{props.age}</p>
    <p>Student:{props.isStudent ? " Yes" : " No"}</p>

   </div>
)
}
Student.propTypes =  {
   name: PropTypes.string,
   age : PropTypes.number,
   isStudent : PropTypes.bool,
}
Student.defaultProps = {
   name :"AAAA",
   age :23 ,
   isStudent :true,
}*/
function Student({
   name = "Guest",
   age = 0,
   isStudent = false,
 }) {
   return (
     <div className="student">
       <p>Name: {name}</p>
       <p>Age: {age}</p>
       <p>Student: {isStudent ? " Yes" : " No"}</p>
     </div>
   );
 }
 Student.propTypes =  {
   name: PropTypes.string.isRequired,
   age : PropTypes.number.isRequired,
   isStudent : PropTypes.bool.isRequired,
}
 
export default Student