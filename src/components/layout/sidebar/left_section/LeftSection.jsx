import { Box, Typography } from "@mui/material";

import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import WifiTetheringOutlinedIcon from "@mui/icons-material/WifiTetheringOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

import { styles } from "./styles";

const menus = [
  {
    label: "Collections",
    icon: <FolderOutlinedIcon fontSize="small" />,
    active: true,
  },
  {
    label: "Dashboard",
    icon: <DashboardOutlinedIcon fontSize="small" />,
  },
  {
    label: "Environments",
    icon: <TuneOutlinedIcon fontSize="small" />,
  },
  {
    label: "History",
    icon: <HistoryOutlinedIcon fontSize="small" />,
  },
  {
    label: "Mock Servers",
    icon: <DnsOutlinedIcon fontSize="small" />,
  },
  {
    label: "Monitors",
    icon: <MonitorHeartOutlinedIcon fontSize="small" />,
  },
  {
    label: "Docs",
    icon: <ArticleOutlinedIcon fontSize="small" />,
  },
  {
    label: "Team",
    icon: <GroupsOutlinedIcon fontSize="small" />,
  },
  {
    label: "Activity",
    icon: <WifiTetheringOutlinedIcon fontSize="small" />,
  },
];

const LeftSection = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.topGroup}>
        {menus.map((item) => (
          <Box
            key={item.label}
            className={`${styles.menuItem} ${item.active ? styles.activeMenuItem : ""}`}
          >
            {item.icon}

            <Typography className={styles.label}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

        <Box
          className={styles.menuItem}
        >
          <SettingsOutlinedIcon fontSize="small" />

          <Typography className={styles.label}>
            Settings
          </Typography>
        </Box>
    </Box>
  );
};

export default LeftSection;
