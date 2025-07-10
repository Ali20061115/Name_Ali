import './HelloWorld.css'
import Lesson1 from './lesson1'

function HelloWorld(props) {
    return <div>
        <h1 id='hello' >Сәлем,{props.name}!😊👨</h1>
        <Lesson1/>
    </div>
}

export default HelloWorld