import React,{useState} from "react";
import axios from 'axios'
import UseForm from "./UseForm"
function Axios1(){
    const[email,setemail] = UseState("")
    const [password,setPassword] = UseState("")
    const[error,setError] = useState('')
    function Validation(){
        const err = UseForm(email,password)
        setError(err)
    }
    return(
        <div>
            <input type="email" onChange={(e) =>setemail(e.target.value)} />
            <input type="password" onChange={(e) =>setPassword(e.target.value)} />  
            <button onClick={Validation}>button</button>

            {error}
        </div>
    )
}
export default Axios1;