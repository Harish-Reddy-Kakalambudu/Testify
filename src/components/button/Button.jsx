import { Button as MuiButton } from "@mui/material";

const Button = ({
  label,
  color = "#ffffff",
  bgcolor = "#7459ff",
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
        borderRadius: "8px",
        fontSize: "15px",
        fontWeight: 600,
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
