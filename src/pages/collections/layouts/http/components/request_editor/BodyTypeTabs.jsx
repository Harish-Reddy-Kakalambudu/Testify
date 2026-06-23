import { Box, Typography } from "@mui/material";

const BodyTypeTabs = ({
  value,
  onChange,
}) => {
  const tabs = [
    "JSON",
    "Form Data",
    "URL Encoded",
    "Raw",
    "Binary",
  ];

  return (
    <Box
      className="
        w-full
        h-[40px]
        flex
        items-center
        bg-card
        border-b
        border-border
        px-2
      "
    >
      {tabs.map((tab) => (
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
            className={`
              text-fs-sm
              ${
                value === tab
                  ? "text-pri-500 font-semibold"
                  : "text-main"
              }
            `}
          >
            {tab}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default BodyTypeTabs;