import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
function Child(){
const[email,setEmail]= useState('')
const[password,setPassword]= useState('')
const[response,setResponse]= useState('')
const[data,setData] = useState ([])
const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('');
  
function send(){
    axios.get('https://683ffb195b39a8039a5658ce.mockapi.io/users',{
        email:email,
        password:password
    })
    .then(res =>setResponse("Өтініш жіберілді" + res.data.id))
}
useEffect(()=>{
    setLoading(true);
    setButtonText('Деректер жіберіліп  жатыр...');
    const timer  = setTimeout(()=>{
       console.log(response) 
       setButtonText('Деректер жіберілді');
       setLoading(false);


    },3000)
    // return()=>{
    //     clearInterval(timer);
    //     console.log("Компанет өшірілді!");
    // };
    
},[response])


function get_data(){
   setLoading(true);
    setButtonText('Деректер алынып жатыр...');
    const time  = setTimeout(()=>{
         axios.get("https://683ffb195b39a8039a5658ce.mockapi.io/users")
    .then(res => setData(res.data))
    setButtonText('Деректер алынды');
          setLoading(false);
     },3000)
    
}
   
return(


    <div>
     
     <input type="email" onChange={(e)=>setEmail(e.target.value)} />
     <input type="password" onChange={(e)=>setPassword(e.target.value)} />
     <button onClick={send}  disabled={loading} >submit {buttonText}</button>
     {response}



     {/* <button onClick={get_data}>Деректерді алу</button> */}
     <button onClick={get_data} disabled={loading}>
        {buttonText}
      </button>

     {data.map((n) =>{

        return(
            <div>
                <p>{n.name}</p>
                <p>{n.email}</p>
                <p>{n.username}</p>
                <p>{n.phone}</p>
                <p>{n.password}</p>
                <p>{n.confirm_password}</p>
                <p>{n.id}</p>
            </div>
        )
     })}
    </div>
)

}

export default Child