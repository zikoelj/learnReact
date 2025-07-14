function Button2(){

    let count = 0;

    const handleClick = (name)=> {
      if(count < 3){
        count ++;
        console.log(`${name} you clicked me ${count} time /s`);
      }
      else{
        console.log(`${name} stop clicking me !`)
      }

    };

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);
return(
    <button onClick={() => handleClick("zakariaa")}>
        Click me ☺️​
    </button>
)
}
export default Button2