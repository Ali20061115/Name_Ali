import { Navigate } from "react-router-dom";

const Protected_Routes = ({isAutheticated,children})=>{
    return isAutheticated ? children : <Navigate to ="/Login"/>;
};



export default Protected_Routes