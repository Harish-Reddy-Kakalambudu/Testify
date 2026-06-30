import {useState} from "react"
import { Box, Typography } from "@mui/material"
const SimpleTabs = ({tabs,onChange,activeTab})=>{
    
    return(
        <Box className="h-7.5 w-full py-0.5 px-1 flex gap-3">
            {tabs.map((tab) => {
                return (
                    <Box key={tab} onClick={()=>onChange(tab)}
                        className={`h-full flex items-center justify-center cursor-pointer px-2 py-4 border-b-3 ${activeTab === tab ? "border-pri-500" : "border-transparent"}`}
                    >
                        <Typography className={`text-fs-lg! ${activeTab === tab ? "text-title!" : "text-main!"}`}>{tab}</Typography>
                    </Box>
                )
            })}
        </Box>
    )
}

export default SimpleTabs;