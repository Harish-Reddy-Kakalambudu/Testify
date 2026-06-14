import { useState } from "react";
import { Box,Typography } from "@mui/material";
import { styles } from "./styles";
import Logo from "../../../assets/testify.svg"

const Sidebar = ()=>{
    return(
        <Box className={styles.sidebar}>
            <Box className={styles.logo}>
                <img src={Logo} alt="Testify" className={styles.image}/>
                <Typography className={styles.title}>Testify</Typography>
            </Box>
        </Box>
    )
}

export default Sidebar;