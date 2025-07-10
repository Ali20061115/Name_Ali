import React,{useState} from "react";
import UseSearchFilter from "./UseSearchFilter";


function BookList(){

    const[items,setItems] = useState(['Abay zholy','Titanik',"Martin Iden",])

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

export default BookList