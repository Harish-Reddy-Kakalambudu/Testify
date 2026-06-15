import { Box, Typography } from "@mui/material";

import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

import { styles } from "./styles";

const menus = [
  {
    label: "Collections",
    icon: <FolderOutlinedIcon fontSize="small" />,
  },
  {
    label: "APIs",
    icon: <ApiOutlinedIcon fontSize="small" />,
  },
  {
    label: "Environments",
    icon: <SettingsOutlinedIcon fontSize="small" />,
  },
  {
    label: "History",
    icon: <HistoryOutlinedIcon fontSize="small" />,
  },
];

const LeftSection = () => {
  return (
    <Box className={styles.container}>
      {menus.map((item) => (
        <Box
          key={item.label}
          className={styles.menuItem}
        >
          {item.icon}

          <Typography className={styles.label}>
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default LeftSection;