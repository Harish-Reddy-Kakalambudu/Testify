import { useMemo, useState } from "react";
import {
  Box,
  Popover,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { styles } from "./styles";

const Dropdown = ({
  value,
  options = [],
  onChange,
  placeholder = "Select Option",
  className = "",
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option) => {
    onChange?.(option.value);
    handleClose();
  };

  return (
    <>
      <Box
        className={`${styles.trigger} ${className}`}
        onClick={handleOpen}
      >
        <Typography sx={styles.value}>
          {selectedOption?.label || placeholder}
        </Typography>

        <KeyboardArrowDownIcon
          sx={{
            color: "var(--txt-main)",
            fontSize: 20,
            transition: "transform .2s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: styles.paper,
          },
        }}
      >
        <Box sx={styles.menu}>
          {options.map((option) => (
            <Box
              key={option.value}
              onClick={() => handleSelect(option)}
              sx={{
                ...styles.item,
                ...(value === option.value
                  ? styles.selectedItem
                  : {}),
              }}
            >
              <Typography sx={styles.itemText}>
                {option.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Popover>
    </>
  );
};

export default Dropdown;