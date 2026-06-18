import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import { SidebarMenu } from "../../../../config/sidebar_config";
import { styles } from "./styles";

const LeftSection = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.topGroup}>
        {SidebarMenu.map((item) => (
          <NavLink
            key={item.name}
            to={item.link}
            className={({ isActive }) => `${styles.menuItem} ${isActive ? styles.activeMenuItem : ""}`}
          >
            {item.icon}

            <Typography className={styles.label}>
              {item.name}
            </Typography>
          </NavLink>
        ))}
      </Box>
    </Box>
  );
};

export default LeftSection;
