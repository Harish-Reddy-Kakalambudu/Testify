import {useState} from "react"
import { Box } from "@mui/material"
import HttpLayout from "./http/HttpLayout"
import WebSocketLayout from "./websocket/WebsocketLayout"
import GraphQlLayout from "./graphql/GraphQlLayout"


const CollectionsLayout = ()=>{
  const requestType = "Http"
  
  switch(requestType) {
    case "Http":
      return <HttpLayout/>;
    case "Websocket":
      return <WebSocketLayout/>;
    case "GraphQl":
      return <GraphQlLayout/>;
  }
}

export default CollectionsLayout;