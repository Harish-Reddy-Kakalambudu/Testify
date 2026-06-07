import { useState } from "react";
import { Box,Typography } from "@mui/material";
import {styles} from "./styles.js"


const Header = ()=>{
    return(
        <Box className={styles.header}>
            <Typography>Header</Typography>
        </Box>
    )
}

export default Header;