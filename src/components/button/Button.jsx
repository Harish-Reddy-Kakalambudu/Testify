import { Button as MuiButton } from "@mui/material";

const defaultGradient =
  "linear-gradient(to right, #2268e9, #0081ef, #0096eb, #00a7e0, #06b5d4)";

const Button = ({
  label,
  startIcon,
  onClick,
  bgcolor,
  color,
  disabled,
  border,
  type = "button",
  variant,
  width = "100%",
  endIcon,
  height = "30px",
  className = "",
  sx,
  ...props
}) => {
  const buttonBackground = disabled
    ? "#eeeeee"
    : bgcolor || defaultGradient;

  return (
    <MuiButton
      {...props}
      disabled={disabled}
      type={type}
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      className={className}
      sx={{
        borderRadius: "6px",
        background: buttonBackground,
        border: border || "none",
        fontWeight: "600",
        height,
        width,
        color: color || "#fff",
        textTransform: "capitalize",
        outline: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          background: buttonBackground,
          boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)",
        },
        "&:focus": {
          outline: "none",
          boxShadow: "none",
        },
        "&:active": {
          outline: "none",
          boxShadow: "none",
        },
        ...sx,
        fontSize: "var(--fs-sm)",
      }}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
