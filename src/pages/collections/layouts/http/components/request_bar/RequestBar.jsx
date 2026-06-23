import { Box, TextField } from "@mui/material";
import { useState } from "react";

import Dropdown from "../../../../../../components/dropdown/Dropdown"
import Button from "../../../../../../components/button/Button";

import { ConfigDropdownOptions } from "../../../../../../config/collections_config";

const RequestBar = () => {
  const [method, setMethod] = useState("POST");
  const [url, setUrl] = useState("");

  return (
    <Box
      className="
        w-full
        h-[56px]
        px-3
        flex
        items-center
        gap-2
        bg-card
        border-b
        border-[var(--bd-light)]
      "
    >
      {/* Method */}

      <Dropdown
        value={method}
        onChange={setMethod}
        options={ConfigDropdownOptions}
        className="w-[120px]"
      />

      {/* URL */}

      <TextField
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://api.testify.dev/auth/login"
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            height: "40px",
            borderRadius: "8px",
            backgroundColor: "var(--bg-card)",

            "& fieldset": {
              borderColor: "var(--bd-light)",
            },

            "&:hover fieldset": {
              borderColor: "var(--bd-main)",
            },

            "&.Mui-focused fieldset": {
              borderColor: "var(--pri-500)",
              borderWidth: "1px",
            },
          },

          "& .MuiInputBase-input": {
            fontSize: "13px",
            color: "var(--txt-title)",
          },
        }}
      />

      {/* Save */}

      <Button
        label="Save"
        width="80px"
        height="40px"
        color="var(--txt-main)"
        bgcolor="var(--bg-card)"
        sx={{
          border: "1px solid var(--bd-light)",
        }}
      />

      {/* Send */}

      <Button
        label="Send"
        width="90px"
        height="40px"
        bgcolor="var(--pri-500)"
      />
    </Box>
  );
};

export default RequestBar;