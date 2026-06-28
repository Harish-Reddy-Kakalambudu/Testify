import { useState } from "react";
import { Box } from "@mui/material";
import Dropdown from "../../../../components/dropdown/Dropdown";
import { ConfigDropdownOptions } from "../../../../config/collections_config";
import TextField from "../../../../components/textfield/TextField";
import Button from "../../../../components/button/Button";
import RequestLayout from "./layouts/request_layout/RequestLayout";
import ResponseLayout from "./layouts/response_layout/ResponseLayout";


const HttpLayout = () => {
    const [activeOption, setActiveOption] = useState("POST")
    return (
        <Box className="h-full w-full flex flex-col ">
            <Box className="flex gap-2 h-13 w-full border-b border-r  border-border-main bg-card px-3 py-2">
                {/* Url Section */}
                <Box className="flex items-center">
                    <Dropdown options={ConfigDropdownOptions} value={activeOption} onChange={setActiveOption} />
                </Box>
                <Box className="flex flex-1">
                    <TextField placeholder={"http://abc.com"} className="bg-page" />
                </Box>
                <Box className="flex gap-1 items-center">
                    <Button label="Save" height="100%" />
                    <Button label="Send" height="100%" />
                </Box>
                {/* Request and Response Section */}

            </Box>
            <Box className="flex h-full w-full">
                <RequestLayout/>
                <ResponseLayout/>
            </Box>
        </Box>

    )
}

export default HttpLayout;