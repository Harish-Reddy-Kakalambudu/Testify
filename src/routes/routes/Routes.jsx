import { Routes,Route } from "react-router-dom";
import { PageNames } from "../PageNames";
import SignIn from "../../pages/signin/SignIn";
import SignUp from "../../pages/signup/SignUp";

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    )
}

export default AppRoutes;
