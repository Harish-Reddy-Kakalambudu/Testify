import { Select, MenuItem } from "@mui/material";
import { styles } from "./styles";

const Dropdown = ({
  value,
  options = [],
  onChange,
  placeholder = "Select Option",
  className = "",
}) => {
  return (
    <Select
      value={value}
      displayEmpty
      onChange={(e) => onChange(e.target.value)}
      className={`${styles.dropdown} ${className}`}
      MenuProps={{
        PaperProps: {
          sx: {
             // gap between select and dropdown
            borderRadius: "8px",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
            overflow: "hidden",
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
         fontSize: "0.815rem",
    },
      }}
      renderValue={(selected) => {
        if (!selected) {
          return (
            <span className="text-text-sub text-[0.815rem]">
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
          sx={{
            transition: "all 0.2s ease",
            fontSize:"0.8rem",
            "&:hover": {
              backgroundColor:
                "var(--color-primary-light-alpha1)",
            },

            "&.Mui-selected": {
              backgroundColor:
                "var(--color-primary-light-alpha2)",
              color: "var(--color-text-title)",
            },

            "&.Mui-selected:hover": {
              backgroundColor:
                "var(--color-primary-light-alpha3)",
            },
          }}
        >
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;