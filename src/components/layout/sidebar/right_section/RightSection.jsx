import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../../button/Button";
import { styles } from "./styles";

const RightSection = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Typography className={styles.title}>
          Collections
        </Typography>

        <Button
          label="New"
          width="60px"
          height="30px"
          bgcolor="var(--pri-500)"
          startIcon={<AddIcon />}
        />
      </Box>

      <Box className={styles.collectionContainer}>
        <Box className={styles.collection}>
          <Typography sx={{ color: "var(--txt-main)", fontSize: "var(--fs-md)" }}>
            Products
          </Typography>
        </Box>

        <Box className={styles.collection}>
          <Typography sx={{ color: "var(--txt-main)", fontSize: "var(--fs-md)" }}>
            Authentication
          </Typography>
        </Box>

        <Box className={styles.collection}>
          <Typography sx={{ color: "var(--txt-main)", fontSize: "var(--fs-md)" }}>
            Orders
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RightSection;
