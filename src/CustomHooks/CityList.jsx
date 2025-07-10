import React,{useEffect, useState} from "react";
import UseSearchFilter from "./UseSearchFilter";

function CityList(){




    const[items,setItems] = useState([
    useEffect


    ])

    const{search,setSearch,filteredItems}= UseSearchFilter(items)


    return(
        <div>
            <input type="" onChange= {(e)=>setSearch(e.target.value)} />
            {
                filteredItems.map((item)=>{
                    return(
                        <p>{item}</p>
                    )
                })
            }
        </div>
    )
}

export default CityList