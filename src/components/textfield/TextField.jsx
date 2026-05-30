import {
  IconButton,
  InputAdornment,
  TextField as MuiTextField,
} from "@mui/material";
import { cloneElement, createElement, isValidElement } from "react";

const renderIcon = (icon) => {
  if (!icon) {
    return null;
  }

  if (isValidElement(icon)) {
    return cloneElement(icon, {
      sx: { color: "#7B7F85", fontSize: "20px", ...icon.props.sx },
    });
  }

  return createElement(icon, {
    sx: { color: "#7B7F85", fontSize: "20px" },
  });
};

const TextField = ({
  icon,
  placeholder,
  iconButton,
  onIconButtonClick,
  width = "100%",
  height = "40px",
  type = "text",
  className = "",
  InputProps,
  slotProps,
  ...props
}) => {
  const startAdornment = icon ? (
    <InputAdornment position="start">{renderIcon(icon)}</InputAdornment>
  ) : (
    InputProps?.startAdornment || slotProps?.input?.startAdornment
  );

  const endAdornment = iconButton ? (
    <InputAdornment position="end">
      <IconButton
        aria-label="input action"
        edge="end"
        onClick={onIconButtonClick}
        sx={{ color: "#7B7F85", padding: "4px" }}
      >
        {renderIcon(iconButton)}
      </IconButton>
    </InputAdornment>
  ) : (
    InputProps?.endAdornment || slotProps?.input?.endAdornment
  );

  return (
    <MuiTextField
      {...props}
      type={type}
      placeholder={placeholder}
      className={className}
      sx={{
        width,
        "& .MuiOutlinedInput-root": {
          height,
          borderRadius: "8px",
          backgroundColor: "#fff",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgb(227, 227, 227)",
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#C1C4C8",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--color-primary-light-alpha6)",
        },
        "& .MuiInputBase-input": {
          color: "#2B2E33",
          fontSize: "14px",
          paddingTop: 0,
          paddingBottom: 0,
        },
        "& .MuiInputBase-input::placeholder": {
          color: "#7B7F85",
          opacity: 1,
        },
        "& .MuiInputAdornment-root": {
          color: "#7B7F85",
        },
      }}
      InputProps={{
        ...InputProps,
        startAdornment,
        endAdornment,
      }}
      slotProps={{
        ...slotProps,
        input: {
          ...slotProps?.input,
          ...InputProps,
          startAdornment,
          endAdornment,
        },
      }}
    />
  );
};

export default TextField;
