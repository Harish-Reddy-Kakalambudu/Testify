import { Box } from "@mui/material";
import { useState } from "react";

import ResponseHeader from "./layouts/ResponseHeader";
import ResponseTabs from "./layouts/ResponseTabs";

import ResponsePanel from "./layouts/panels/ResponsePanel";
import HeadersPanel from "./layouts/panels/HeadersPanel";
import CookiesPanel from "./layouts/panels/CookiesPanel";
import TestsPanel from "./layouts/panels/TestsPanel";
import ConsolePanel from "./layouts/panels/ConsolePanel";
import EmptyResponse from "./layouts/EmptyRespnse";

const ResponseViewer = () => {
  const [activeTab, setActiveTab] =
    useState("Response");

  const hasResponse = true;

  const panelMap = {
    Response: <ResponsePanel />,
    Headers: <HeadersPanel />,
    Cookies: <CookiesPanel />,
    Tests: <TestsPanel />,
    Console: <ConsolePanel />,
  };

  return (
    <Box
      className="
        h-[45%]
        flex
        flex-col
        border-t
        border-border
        bg-card
      "
    >
      <ResponseHeader
        status="200 OK"
        time="125 ms"
        size="2.1 KB"
      />

      <ResponseTabs
        value={activeTab}
        onChange={setActiveTab}
      />

      <Box className="flex-1 overflow-hidden">
        {hasResponse
          ? panelMap[activeTab]
          : <EmptyResponse />}
      </Box>
    </Box>
  );
};

export default ResponseViewer;