import { Routes,Route } from "react-router-dom";
import { PageNames } from "../PageNames";
import Home from "../../pages/home/Home";

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default AppRoutes;