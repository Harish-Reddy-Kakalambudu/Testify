import { useState } from "react"
import { Box } from "@mui/material"
import HttpLayout from "./http/HttpLayout"
import WebSocketLayout from "./websocket/WebsocketLayout"
import GraphQlLayout from "./graphql/GraphQlLayout"
import Tabs from "../../../components/tabs/Tabs"
import TypeBar from "../components/type_bar/TypeBar"
import { apiRequestTabsConfig } from "../../../config/tabs_config"

const CollectionsLayout = () => {
  const [activeTab, setActiveTab] = useState("1")
  

  

  const requestType = "Http"
  let LayoutComponent;
  switch (requestType) {
    case "Http":
      LayoutComponent = <HttpLayout />;
      break;
    case "Websocket":
      LayoutComponent = <WebSocketLayout />;
      break;
    case "GraphQl":
      LayoutComponent = <GraphQlLayout />;
      break;
  }

  return (
    <Box className="flex flex-col h-full w-full gap-0">
      <Box className="bg-color-soft">
        <Tabs
          tabs={apiRequestTabsConfig}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          
        />
      </Box>

      <TypeBar />
      {LayoutComponent}
    </Box>
  )
}

export default CollectionsLayout;