import { Routes,Route } from "react-router-dom";
import { PageNames } from "../PageNames";
import SignIn from "../../pages/signin/SignIn";
import SignUp from "../../pages/signup/SignUp";
import Layout from "../../components/layout/Layout";

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/layout" element={<Layout/>}/>
        </Routes>
    )
}

export default AppRoutes;
