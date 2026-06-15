import { Box, Typography } from "@mui/material";

import Logo from "../../../assets/testify.svg";

import LeftSection from "./left_section/LeftSection";
import RightSection from "./right_section/RightSection";

import { styles } from "./styles";

const Sidebar = () => {
  return (
    <Box className={styles.sidebar}>
      {/* Logo Header */}
      <Box className={styles.logoContainer}>
        <img
          src={Logo}
          alt="Testify"
          className={styles.logo}
        />

        <Typography className={styles.title}>
          Testify
        </Typography>
      </Box>

      {/* Sidebar Content */}
      <Box className={styles.content}>
        <LeftSection />
        <RightSection />
      </Box>
    </Box>
  );
};

export default Sidebar;