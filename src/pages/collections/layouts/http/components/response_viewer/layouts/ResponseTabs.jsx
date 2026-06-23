import { Box, Typography } from "@mui/material";

const responseTabs = [
  "Response",
  "Headers",
  "Cookies",
  "Console",
];

const ResponseTabs = ({
  value,
  onChange,
}) => {
  return (
    <Box
      className="
        w-full
        h-[42px]
        bg-card
        border-b
        border-border
        flex
        items-center
        px-3
      "
    >
      {responseTabs.map((tab) => (
        <Box
          key={tab}
          onClick={() => onChange(tab)}
          className="
            h-full
            px-4
            flex
            items-center
            cursor-pointer
            transition-all
            duration-200
          "
          sx={{
            borderBottom:
              value === tab
                ? "2px solid var(--pri-500)"
                : "2px solid transparent",
          }}
        >
          <Typography
            className={
              value === tab
                ? "text-pri-500 font-semibold"
                : "text-main"
            }
          >
            {tab}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ResponseTabs;