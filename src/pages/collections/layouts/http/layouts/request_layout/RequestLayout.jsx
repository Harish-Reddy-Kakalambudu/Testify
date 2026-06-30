import { useState } from "react";
import { Box, Typography } from "@mui/material"
import SimpleTabs from "../../components/tabs/SimpleTabs";
const RequestLayout = () => {
    const [activeTab, setActiveTab] = useState("Params")
    const RequestTabs = ["Params", "Auth", "Headers", "Body", "Scripts", "Tests", "Docs"]


    return (
        <Box className="flex h-[30px] w-full border-x border-border-main">
            <Box className="bg-card w-full">
                <SimpleTabs tabs={RequestTabs} activeTab={activeTab} onChange={setActiveTab} />
            </Box>

        </Box>
    )
}

export default RequestLayout;