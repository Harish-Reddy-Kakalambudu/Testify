import { cloneElement, createElement, isValidElement } from "react";
import {
  IconButton as MuiIconButton,
  Tooltip,
} from "@mui/material";

const renderIcon = (icon, color) => {
  if (!icon) {
    return null;
  }

  const iconSx = {
    color,
    fontSize: "var(--fs-3xl)",
  };

  if (isValidElement(icon)) {
    return cloneElement(icon, {
      sx: { ...iconSx, ...icon.props.sx },
    });
  }

  return createElement(icon, { sx: iconSx });
};

const IconButton = ({
  icon,
  className = "",
  color = "var(--txt-sub)",
  tooltip = true,
  tooltipTitle = "",
  border = false,
  disabled = false,
  width = "30px",
  height = "30px",
  onClick,
  sx,
  ...props
}) => {
  const iconButton = (
    <MuiIconButton
      {...props}
      disabled={disabled}
      onClick={onClick}
      className={className}
      sx={{
        width,
        height,
        padding: 0,
        color,
        borderRadius: "6px",
        border: border ? "1px solid var(--bd-light)" : "none",
        backgroundColor: "var(--bg-card)",
        outline: "none",
        transition: "all 0.25s ease",
        "&:hover": {
          color: "var(--txt-title)",
          borderColor: border ? "var(--bd-main)" : "transparent",
          backgroundColor: "var(--bg-hover)",
        },
        "&:focus": {
          outline: "none",
          boxShadow: "none",
        },
        "&:active": {
          outline: "none",
          boxShadow: "none",
          transform: "translateY(1px)",
        },
        "&.Mui-disabled": {
          color: "var(--txt-muted)",
          borderColor: border ? "var(--bd-light)" : "transparent",
          backgroundColor: "var(--bg-soft)",
          cursor: "not-allowed",
        },
        ...sx,
      }}
    >
      {renderIcon(icon, color)}
    </MuiIconButton>
  );

  if (!tooltip) {
    return iconButton;
  }

  return (
    <Tooltip title={tooltipTitle || props["aria-label"] || ""} arrow>
      <span>{iconButton}</span>
    </Tooltip>
  );
};

export default IconButton;
