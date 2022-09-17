import React,{useState} from "react";
import Axios from "axios";


function App(){
    const [name,setName] = useState("");
    const [reg,setReg] = useState(0);
    const [department,setDepartment] = useState("");
    const [year,setYear] = useState(0);

    const [studentData,setStudentData] = useState([]);

    const add = (event) =>{
    event.preventDefault();
    Axios.post("http://localhost:3001/create",{
        name:name,
        reg:reg,
        department:department,
        year:year
    }).then(()=>{
        console.log("success");
    })
    }

    const show = (event) =>{
        event.preventDefault();
        Axios.get("http://localhost:3001/show").then((response)=>{
            setStudentData(response.data);
        })
        }

    return (
    <div className="info">
        <form >
            <label>Name</label>
            <input type="text" onChange={(event) => {
                setName(event.target.value)
            }} />
            <label>Reg. Number</label>
            <input type="number" onChange={(event) => {
                setReg(event.target.value)
            }} />
            <label>Department</label>
            <input type="text" onChange={(event) => {
                setDepartment(event.target.value)
            }} />
            <label>Year</label>
            <input type="number" onChange={(event) => {
                setYear(event.target.value)
            }} />
            <button onClick={add}>Submit</button>
            <div className="show">
                <button onClick={show}>Student Data</button>
                {
                    studentData.map((val,key) => {
                        return (
                        <div className="data">
                            <p>Name: {val.name}</p>
                            <p>Reg. No:{val.reg}</p>
                            <p>Department: {val.department}</p>
                            <p>Year: {val.year}</p>
                        </div>
                        )
                    })
                }
            </div>
        </form>
    </div>
    )
}

export default App;