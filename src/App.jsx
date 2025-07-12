// import Footer from "./Footer"
// import Header  from "./Header"
// import Food from "./Food"
//import Card from "./Card.jsx"

/* 4th part Props
porps:
These are read-only properties that are shared between components. A parent component can send data to a
 child component.
To use props, we have to pass props as a parameter for the component function. And we can use props' values in HTML.*/

/*prop types:
It is a mechanism to check the passed props value is required data type.
It is good practice to use prop types. (for debbuging such integer for age ...etc)
We have to import prop-types from the node module to the child component .jsx file.
*/ 
//import Button  from "./Button"
//import Student from "./Student"
import UserGreeting from "./UserGreeting"
function App(){
    return(
     /* first part 
      <>
          <Header/>
          <Food/>
          <Food/>
          <Food/>
          <Footer/>
      </> */
      /* second part<> 
      <Card/>
      <Card/>
      <Card/>
      </> */
     //3rd part css in react compenant not including framework or preprocessors
      //1-EXTERNAL
      //2-MODULES
      //3-INLINE
      //<Button/>
/*       <>
      <Student name="SpongeBob" age={20}
       isStudent={true}
      />
      <Student name="Patrik" age={50}
       isStudent={false}
      />
      <Student name="Zakariaa" age={23}
       isStudent={true}
      />
      <Student name="L'Morphine" age={41}
       isStudent={false}
      />
      <Student name="hamza" age={22}
       isStudent={true}/> 

      <Student/>
      </> */
    <>
    <UserGreeting 
    isLoggedIn = {true}
    username = "zakariaa"
    />
    </>
     )
    }
export default App
