import { Button as MuiButton } from "@mui/material";

const Button = ({
  label,
  color = "var(--pri-50)",
  bgcolor = "var(--pri-500)",
  height = "40px",
  width = "100%",
  startIcon,
  endIcon,
  className = "",
  type = "button",
  onClick,
  ...props
}) => {
  return (
    <MuiButton
      {...props}
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      className={className}
      sx={{
        width,
        height,
        color,
        background: bgcolor,
        borderRadius: "var(--radius-md)",
        fontSize: "var(--fs-lg)",
        fontWeight: "var(--fw-semibold)",
        textTransform: "none",
        boxShadow: "none",
        "&:hover": {
          background: bgcolor,
          boxShadow: "none",
        },
      }}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
