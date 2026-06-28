import {useState} from "react"
import { Box,Typography } from "@mui/material"
import Button from "../../../../components/button/Button"


const TypeBar = ()=>{
    return(
        <Box className="flex justify-between items-center px-2 py-3  bg-card border-y border-border-main">
            <Typography className="text-title! text-fs-xl! font-semibold!">Update Order</Typography>
            <Box className="flex justify-end">
                <Button label="Variables" color="" bgcolor={""} />
            </Box>
            

        </Box>
    )
}

export default TypeBar;