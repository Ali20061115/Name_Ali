import UseSearchFilter from "./UseSearchFilter"
import { useState } from "react"
function ClothestList(){
    const[items,setItems] = useState([
        {name: 'T-shirt', brand: 'Nike', price: 1000},
    
        {name: 'Jeans', brand: 'Levis', price: 1200},
        {name: 'Jacket', brand: 'Zara', price: 1500},
        {name: 'Sneakers', brand: 'Adidas', price: 2000},
        {name: 'Dress', brand: 'H&M', price: 1300},
        {name: 'Hat', brand: 'Puma', price: 700},
        {name: 'Sweater', brand: 'Uniqlo', price: 1100},
        {name: 'Shorts', brand: 'Reebok', price: 900},
        
    
    ])

    const{search,setSearch,filteredItems}= UseSearchFilter(items)


    return(
        <div>
            <input type="" onChange= {(e)=>setSearch(e.target.value)} />
            {
                filteredItems.map((item)=>{
                    return(

                        <div>
                            
                        <p>{item.name}</p>
                        
                        <p>{item.brand}</p>
                        
                        <p>{item.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ClothestList