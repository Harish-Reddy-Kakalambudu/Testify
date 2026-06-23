import { Box, Typography } from "@mui/material";
import { useState } from "react";

import Editor from "../../../../../../components/editor/Editor";

import ResponseHeader from "./layouts/ResponseHeader";
import ResponseTabs from "./layouts/ResponseTabs";

const ResponseViewer = () => {
  const [activeTab, setActiveTab] =
    useState("Response");

  const [response] = useState(`{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here"
}`);

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

        {activeTab === "Response" && (
          <Editor
            language="json"
            value={response}
            readOnly
          />
        )}

        {activeTab === "Headers" && (
          <Box className="p-4 text-main">
            Response Headers
          </Box>
        )}

        {activeTab === "Cookies" && (
          <Box className="p-4 text-main">
            Response Cookies
          </Box>
        )}

        {activeTab === "Console" && (
          <Box className="p-4 text-main">
            Console Output
          </Box>
        )}

      </Box>
    </Box>
  );
};

export default ResponseViewer;