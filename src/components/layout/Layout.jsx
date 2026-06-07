import { useState } from "react";
import { Box } from "@mui/material";
import {styles} from "./styles.js"
import Header from "./header/Header";
import Sidebar from "./sidebar/Siderbar.jsx";

const Layout = ()=>{
    return(
        <Box className={styles.main}>
            <Sidebar/>
            <Header/>
        </Box>
    )
}

export default Layout;