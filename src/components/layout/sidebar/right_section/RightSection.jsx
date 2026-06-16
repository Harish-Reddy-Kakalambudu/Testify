import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Button from "../../../button/Button";
import { styles } from "./styles";

const collections = [
  {
    name: "Authentication",
    open: true,
    requests: [
      { method: "POST", label: "Login API" },
      { method: "POST", label: "Register" },
      { method: "DELETE", label: "Logout" },
      { method: "WS", label: "Auth Events" },
    ],
  },
  {
    name: "Products",
    open: true,
    requests: [
      { method: "GET", label: "List Products" },
      { method: "POST", label: "Create Product" },
      { method: "PUT", label: "Update Product" },
      { method: "DELETE", label: "Delete Product" },
      { method: "GQL", label: "Product Schema" },
    ],
  },
  { name: "Orders", open: false, requests: [] },
  { name: "Payments", open: false, requests: [] },
];

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

      <Box className={styles.searchBox}>
        <SearchOutlinedIcon sx={{ fontSize: 18, color: "var(--txt-sub)" }} />
        <Typography className={styles.searchText}>Filter...</Typography>
      </Box>

      <Box className={styles.collectionContainer}>
        {collections.map((collection) => (
          <Box key={collection.name} className={styles.collectionGroup}>
            <Box className={styles.collection}>
              {collection.open ? (
                <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 18 }} />
              ) : (
                <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 18 }} />
              )}
              <FolderOutlinedIcon sx={{ fontSize: 17, color: "var(--pri-500)" }} />
              <Typography className={styles.collectionTitle}>
                {collection.name}
              </Typography>
            </Box>

            {collection.open && (
              <Box className={styles.requestList}>
                {collection.requests.map((request) => (
                  <Box key={`${collection.name}-${request.label}`} className={styles.requestItem}>
                    <Typography className={`${styles.method} ${styles[`method${request.method}`] || ""}`}>
                      {request.method}
                    </Typography>
                    <Typography className={styles.requestLabel}>
                      {request.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RightSection;
