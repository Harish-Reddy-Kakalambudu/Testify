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
      sx: { color: "var(--txt-sub)", fontSize: "var(--fs-4xl)", ...icon.props.sx },
    });
  }

  return createElement(icon, {
    sx: { color: "var(--txt-sub)", fontSize: "var(--fs-4xl)" },
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
        sx={{ color: "var(--txt-sub)", padding: "4px" }}
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
          borderRadius: "var(--radius-md)",
          backgroundColor: "var(--bg-card)",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--bd-light)",
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--bd-main)",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--pri-500)",
        },
        "& .MuiInputBase-input": {
          color: "var(--txt-title)",
          fontSize: "var(--fs-md)",
          paddingTop: 0,
          paddingBottom: 0,
        },
        "& .MuiInputBase-input::placeholder": {
          color: "var(--txt-sub)",
          opacity: 1,
        },
        "& .MuiInputAdornment-root": {
          color: "var(--txt-sub)",
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
