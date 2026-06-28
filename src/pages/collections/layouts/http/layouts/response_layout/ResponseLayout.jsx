import {useState} from "react"
import { Box , Typography } from "@mui/material"
import { Send } from "lucide-react"

const ResponseLayout = ()=>{
    return(
        <Box className="bg-transparent flex items-center justify-center border-x border-border-main h-full w-full">
            <Box className="flex flex-col gap-1.5 items-center">
                <Send fontSize={24} color="var(--color-pri-300)"/>
                <Typography className="text-fs-lg! text-title! font-semibold!">No Response Yet!</Typography>
                <Typography className="text-fs-md! text-main! font-medium! ">Send the request to see the response</Typography>
            </Box>
        </Box>
    )
}

export default ResponseLayout;