import { Box } from "@mui/material";
import { useState } from "react";

import Editor from "../../../../../../components/editor/Editor";
import BodyTypeTabs from "./BodyTypeTabs";
import KeyValueTable from "../../../../components/key_value_table/KeyValueTable"

const RequestEditor = () => {
  const [bodyType, setBodyType] =
    useState("JSON");

  const [jsonBody, setJsonBody] =
    useState(`{
  "email": "user@testify.dev",
  "password": "123456"
}`);

  return (
    <Box
      className="
        flex-1
        flex
        flex-col
        bg-card
      "
    >
      <BodyTypeTabs
        value={bodyType}
        onChange={setBodyType}
      />

      <Box className="flex-1">
        {(bodyType === "JSON" ||
          bodyType === "Raw") && (
          <Editor
            language={
              bodyType === "JSON"
                ? "json"
                : "plaintext"
            }
            value={jsonBody}
            onChange={setJsonBody}
          />
        )}

        {bodyType === "Form Data" && (
          <KeyValueTable/>
        )}

        {bodyType === "URL Encoded" && (
         <KeyValueTable/>
        )}

        {bodyType === "Binary" && (
          <Box className="p-4 text-main">
            File Upload Component
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RequestEditor;