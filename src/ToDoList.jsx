import React,{useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState(["Eat Breakfast","take a shower","walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i)=> 
        i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]] = 
            [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] = 
            [updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(<div className="todolist">
            <h1>To-Do-List</h1>

            <div>
                <input 
                    type="text"
                    placeholder="Enter a task ...."
                    value={newTask}
                    onChange={handleInputChange}/>
                <button className="addbutton"
                        onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task,index)=> 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                        className="deletebutton"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>

                    <button
                        className="movebutton"
                        onClick={() => moveTaskUp(index)}>
                      Up
                    </button>

                    <button
                        className="movebutton"
                        onClick={() => moveTaskDown(index)}>
                       Down
                    </button>
                   
                </li>
                )}
            </ol>
          </div>);
}
export default ToDoList