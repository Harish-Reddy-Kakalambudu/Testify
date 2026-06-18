import { Box } from "@mui/material";

import LeftSection from "./left_section/LeftSection";

import { styles } from "./styles";

const Sidebar = () => {
  return (
    <Box className={styles.sidebar}>
      <Box className={styles.content}>
        <LeftSection />
      </Box>
    </Box>
  );
};

export default Sidebar;
