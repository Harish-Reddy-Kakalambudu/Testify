import { Box, Typography } from "@mui/material";

const EmptyResponse = () => {
  return (
    <Box
      className="
        flex-1
        flex
        flex-col
        items-center
        justify-center
        gap-2
      "
    >
      <Typography className="text-title font-semibold">
        No response yet
      </Typography>

      <Typography className="text-sub text-sm">
        Send a request to see the response
      </Typography>
    </Box>
  );
};

export default EmptyResponse;