import { Box, Typography } from "@mui/material";

const ResponseHeader = ({
  status = "No Response",
  time = "-- ms",
  size = "-- KB",
}) => {
  return (
    <Box
      className="
        w-full
        h-[40px]
        px-3
        flex
        items-center
        gap-6
        border-b
        border-border
        bg-card
      "
    >
      <Typography
        className="
          text-get
          font-semibold
          text-fs-sm
        "
      >
        {status}
      </Typography>

      <Typography
        className="
          text-main
          text-fs-sm
        "
      >
        {time}
      </Typography>

      <Typography
        className="
          text-main
          text-fs-sm
        "
      >
        {size}
      </Typography>
    </Box>
  );
};

export default ResponseHeader;