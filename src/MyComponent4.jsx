import React,{useState} from "react";
function MyCompenent4(){

    const [cars, setCars] = useState([]);
    
    const [carYear, setCarYear] = useState(new Date().getFullYear());

    const [carMake, setCarMake] = useState("");

    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {year : carYear,
                        make : carMake, 
                        model : carModel};

        setCars(c =>[...c, newCar]);

        setCarYear(new Date().getFullYear());        
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_, i)=>{i !== index}));
    }

    function handleChangeYear(event){
        setCarYear(event.target.value);
    }

    function handleChangeMake(event){
        setCarMake(event.target.value);
    }

    function handleChangeModel(event){
        setCarModel(event.target.value);
    }

    return(<div>
             <h2>List Of Car Object</h2>
             <ul>
                {cars.map((car, index) =>
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>)}
             </ul>

             <input type="number" value={carYear} onChange={handleChangeYear}/><br/>

             <input type="text" value={carMake} onChange={handleChangeMake}
             placeholder="enter car make"/> <br/>

             <input type="text" value={carModel} onChange={handleChangeModel}
             placeholder="enter car model"/> <br/>

             <button onClick={handleAddCar}>Add Car</button>
           </div>);
}
export default MyCompenent4