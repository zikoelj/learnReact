//5th part conditional rendering 
import PropTypes from 'prop-types'
function UserGreeting(props){
 /*if(props.isLoggedIn){
    return <h2>welcome {props.username}</h2>
 }
else {
 return <h2>Please login to continue!!!</h2>
}
}*/
const welcomeMessage = <h2 className="welcome-message">
                         welcome {props.username} 
                        </h2>
const loginPrompt =  <h2 className="login-prompt">
                        please login to continue !!!
                        </h2>
return(
    props.isLoggedIn ? welcomeMessage : loginPrompt
    );
}
// ✅ Validation des types avec PropTypes
UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
  };
  
  // ✅ Valeurs par défaut si aucune prop n’est fournie
  UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
  };

export default UserGreeting