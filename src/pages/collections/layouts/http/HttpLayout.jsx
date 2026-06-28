import { useState } from "react";
import { Box } from "@mui/material";
import Dropdown from "../../../../components/dropdown/Dropdown";
import { ConfigDropdownOptions } from "../../../../config/collections_config";
import TextField from "../../../../components/textfield/TextField";
import Button from "../../../../components/button/Button";

const HttpLayout =()=>{
    const [activeOption,setActiveOption] = useState("POST")
    return(
        <Box className="flex gap-2 h-13 w-full border-b border-r  border-border-main bg-card px-3 py-2">
            <Box className="flex items-center">
                <Dropdown options={ConfigDropdownOptions} value={activeOption} onChange={setActiveOption}/>
            </Box>
            <Box className="flex flex-1">
                <TextField placeholder={"http://abc.com"} className="bg-page"/>
            </Box>
            <Box className="flex gap-1 items-center">
                <Button label="Save" height="100%"/>
                <Button label="Send" height="100%"/>
            </Box>
        </Box>
    )
}

export default HttpLayout;