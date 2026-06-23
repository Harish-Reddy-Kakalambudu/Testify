import { Box, Checkbox, TextField } from "@mui/material";
import { useState } from "react";

import { DeleteOutlineOutlined } from "@mui/icons-material";

import IconButton from "../../../../components/icon_button/IconButton"

const KeyValueTable = ({
  initialRows = [
    {
      id: 1,
      enabled: true,
      key: "",
      value: "",
    },
  ],
}) => {
  const [rows, setRows] =
    useState(initialRows);

  const updateRow = (
    id,
    field,
    value
  ) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]: value,
            }
          : row
      )
    );
  };

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      {
        id: Date.now(),
        enabled: true,
        key: "",
        value: "",
      },
    ]);
  };

  const removeRow = (id) => {
    setRows((prev) =>
      prev.filter(
        (row) => row.id !== id
      )
    );
  };

  return (
    <Box className="w-full h-full flex flex-col">

      {/* Header */}

      <Box
        className="
          h-[40px]
          border-b
          border-border
          grid
          grid-cols-[50px_1fr_1fr_50px]
          items-center
          px-2
          bg-soft
        "
      >
        <Box />

        <Box className="text-xs font-semibold text-main">
          Key
        </Box>

        <Box className="text-xs font-semibold text-main">
          Value
        </Box>

        <Box />
      </Box>

      {/* Rows */}

      <Box className="flex-1 overflow-auto">

        {rows.map((row) => (
          <Box
            key={row.id}
            className="
              h-[44px]
              border-b
              border-border
              grid
              grid-cols-[50px_1fr_1fr_50px]
              items-center
              px-2
            "
          >
            <Checkbox
              checked={row.enabled}
              onChange={(e) =>
                updateRow(
                  row.id,
                  "enabled",
                  e.target.checked
                )
              }
              size="small"
            />

            <TextField
              variant="standard"
              placeholder="Key"
              value={row.key}
              onChange={(e) =>
                updateRow(
                  row.id,
                  "key",
                  e.target.value
                )
              }
              InputProps={{
                disableUnderline: true,
              }}
            />

            <TextField
              variant="standard"
              placeholder="Value"
              value={row.value}
              onChange={(e) =>
                updateRow(
                  row.id,
                  "value",
                  e.target.value
                )
              }
              InputProps={{
                disableUnderline: true,
              }}
            />

            <IconButton
              icon={DeleteOutlineOutlined}
              tooltip={false}
              onClick={() =>
                removeRow(row.id)
              }
            />
          </Box>
        ))}
      </Box>

      {/* Footer */}

      <Box
        className="
          h-[40px]
          border-t
          border-border
          px-3
          flex
          items-center
          text-pri-500
          text-sm
          font-medium
          cursor-pointer
          hover:bg-hover
        "
        onClick={addRow}
      >
        + Add Row
      </Box>
    </Box>
  );
};

export default KeyValueTable;