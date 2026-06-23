import { useState } from "react";
import { Box } from "@mui/material";
import RequestBar from "./components/request_bar/RequestBar";
import RequestConfigTabs from "./components/request_config_tabs/RequestConfigsBar";
import RequestEditor from "./components/request_editor/RequestEditor";
import RequestContent from "./components/request_content/RequestContent";
import ResponseViewer from "./components/response_viewer/ResponseViewer";

const HttpLayout = () => {
    return (
        <Box className="w-full h-full flex flex-col">
            <RequestBar />
            <RequestContent/>
            <ResponseViewer />

        </Box>
    )
}

export default HttpLayout;