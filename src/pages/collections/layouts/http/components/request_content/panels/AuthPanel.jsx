import { Box, Typography } from "@mui/material";
import { useState } from "react";

import Dropdown from "../../../../../../../components/dropdown/Dropdown"

const AuthPanel = () => {
  const [authType, setAuthType] =
    useState("none");

  const authOptions = [
    {
      label: "No Auth",
      value: "none",
    },
    {
      label: "Bearer Token",
      value: "bearer",
    },
    {
      label: "API Key",
      value: "apikey",
    },
    {
      label: "Basic Auth",
      value: "basic",
    },
    {
      label: "OAuth 2.0",
      value: "oauth2",
    },
  ];

  return (
    <Box className="p-4 flex flex-col gap-4">

      <Box>
        <Typography className="text-main text-sm mb-2">
          Authentication Type
        </Typography>

        <Dropdown
          value={authType}
          onChange={setAuthType}
          options={authOptions}
        />
      </Box>
    </Box>
  );
};

export default AuthPanel;