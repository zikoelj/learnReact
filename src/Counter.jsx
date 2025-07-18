import React ,{useState} from "react";

function Counter(){
    
    const [count,setCount] = useState(0);

    const incrementCounter = () =>{
        //using updater function ,its take the previous value
        //of the count and apply to it the change
        //however using setCount(count + 1) even three time 
        // it will give us always 1 because this approach 
        //based on the initial value of count
        //asynchronous function setCount(count + 1)

        //by the way for showing youre are using updater 
        //function we take the first character of the state
        //variable or "prev"NameStateVariable

        setCount(count + 1); //count = 0 -> count = 1
        setCount(count + 1); //count = 0 -> count = 1
        setCount(count + 1); //count = 0 -> count = 1

        setCount(c => c + 1); //c = 0 -> c = 1
        setCount(c => c + 1); //c = 1 -> c = 2
        setCount(c => c + 1); //c = 2 -> c = 3
    }

    const decrementCounter = () =>{
        setCount(c => c - 1); //c = 0 -> c = -1
        setCount(c => c - 1); //c = -1 -> c = -2
        setCount(c => c - 1); //c = -2 -> c = -3

    }

    const resetCounter = () =>{
        setCount(0);
    }
    
    return(<div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={incrementCounter}>Increment</button>
                <button className="counter-button" onClick={resetCounter}>Reset</button>
                <button className="counter-button" onClick={decrementCounter}>Decrement</button>
            </div>)
}
export default Counter