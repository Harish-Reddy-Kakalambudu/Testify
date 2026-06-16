import { Box } from "@mui/material";

import LeftSection from "./left_section/LeftSection";
import RightSection from "./right_section/RightSection";

import { styles } from "./styles";

const Sidebar = () => {
  return (
    <Box className={styles.sidebar}>
      <Box className={styles.content}>
        <LeftSection />
        <RightSection />
      </Box>
    </Box>
  );
};

export default Sidebar;
