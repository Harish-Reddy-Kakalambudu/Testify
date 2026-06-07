import { useState } from "react";
import { Box,Typography } from "@mui/material";
import { styles } from "./styles";

const Sidebar = ()=>{
    return(
        <Box className={styles.sidebar}>
            <Typography>Sidebar</Typography>
        </Box>
    )
}

export default Sidebar;