import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div id='box' style={{
            display: "flex", 
            justifyContent: 'space-around',
            textDecoration:'none',
            color:'black',
            fontSize:'30px'
        }}>
   <Link to="/home_page">Home</Link>
   <Link to="/book_gallery">Book gallery</Link>
        </div>
     
    )
}

export default Navbar