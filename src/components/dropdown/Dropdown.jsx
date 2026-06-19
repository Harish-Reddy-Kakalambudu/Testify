import { Select, MenuItem } from "@mui/material";
import { styles } from "./styles";

const Dropdown = ({
  value,
  options = [],
  onChange,
  placeholder = "Select Option",
  className = "",
}) => {
  const menuItemStyles = {
    minHeight: "36px",
    transition: "all 0.2s ease",
    color: "var(--txt-main)",
    backgroundColor: "var(--bg-card)",
    fontSize: "var(--fs-sm)",
    "&:hover": {
      backgroundColor: "var(--bg-hover)",
      color: "var(--txt-title)",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "var(--bg-hover)",
    },
    "&.Mui-selected": {
      backgroundColor: "var(--bg-soft)",
      color: "var(--txt-title)",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "var(--bg-hover)",
    },
  };

  return (
    <Select
      value={value}
      displayEmpty
      onChange={(e) => onChange(e.target.value)}
      className={`${styles.dropdown} ${className}`}
      MenuProps={{
        PaperProps: {
          sx: {
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-md)",
            backgroundColor: "var(--bg-card)",
            color: "var(--txt-main)",
            border: "1px solid var(--bd-light)",
            overflow: "hidden",
          },
        },
        MenuListProps: {
          sx: {
            padding: 0,
            backgroundColor: "var(--bg-card)",
            "& .MuiMenuItem-root": menuItemStyles,
          },
        },
        transitionDuration: 250,
      }}
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        transition: "all 0.2s ease-in-out",
        "& .MuiSelect-select": {
          color: "var(--txt-title)",
          fontSize: "var(--fs-sm)",
        },
        "& .MuiSvgIcon-root": {
          color: "var(--txt-main)",
        },
      }}
      renderValue={(selected) => {
        if (!selected) {
          return (
            <span className="text-sub text-fs-sm">
              {placeholder}
            </span>
          );
        }

        return options.find(
          (option) => option.value === selected
        )?.label;
      }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          sx={menuItemStyles}
        >
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
