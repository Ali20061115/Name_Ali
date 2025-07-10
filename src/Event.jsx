import{use,useState} from 'react' 

function Event() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
        
    }
    function handleClick1() {
        setCount(count - 1)
    }
    function resut(){
        setCount(count == 0)  
    }
    return (
        <div>
            <button onClick={handleClick}>+</button>  <button onClick={handleClick1}>-</button>
            <p>{count}</p>
            <button onClick={resut}>resut</button>
        </div>
    )
}






export default Event