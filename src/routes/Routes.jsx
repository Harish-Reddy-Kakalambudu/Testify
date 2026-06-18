import { Navigate, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Collections from "../pages/collections/Collections";
import Environments from "../pages/environments/Environments";
import History from "../pages/history/History";
import { PageNames } from "./PageNames";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path={PageNames.BASE} element={<Layout />}>
                <Route path={`${PageNames.COLLECTIONS}`} element={<Collections />} />
                <Route path={`${PageNames.ENVIRONMENTS}`} element={<Environments />} />
                <Route path={`${PageNames.HISTORY}`} element={<History/>} />
            </Route>
           
            
        </Routes>
    );
};

export default AppRoutes;
