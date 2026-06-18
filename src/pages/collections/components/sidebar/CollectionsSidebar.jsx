import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import Button from "../../../../components/button/Button";
import SearchFilter from "../../../../components/search_filter";
import {collections} from "../../../../config/collections_config.js"
import { styles } from "./styles";

const CollectionsSidebar = () => {
  const [searchText, setSearchText] = useState("");
  const [openCollections, setOpenCollections] = useState(() =>
    collections.reduce((acc, collection) => ({ ...acc, [collection.id]: true }), {})
  );

  const filteredCollections = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    if (!query) {
      return collections;
    }

    return collections
      .map((collection) => {
        const matchedRequests = collection.requests.filter((request) =>
          [request.type, request.name, request.path].some((value) =>
            value.toLowerCase().includes(query)
          )
        );

        if (collection.name.toLowerCase().includes(query)) {
          return collection;
        }

        return matchedRequests.length
          ? { ...collection, requests: matchedRequests }
          : null;
      })
      .filter(Boolean);
  }, [searchText]);

  const handleAccordionToggle = (collectionId) => {
    setOpenCollections((previousState) => ({
      ...previousState,
      [collectionId]: !previousState[collectionId],
    }));
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.controls}>
        <Box className={styles.searchBox}>
          <SearchFilter
            className={styles.searchInput}
            width="100%"
            height="30px"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
            placeholder="Filter..."
        />
        </Box>

        <Box className={styles.actions}>
          <Button
            label="Import"
            color="var(--txt-title)"
            bgcolor="var(--bg-card)"
            className={styles.importButton}
          />
          <Button
            label="New"
            bgcolor="var(--pri-300)"
            startIcon={<AddIcon />}
            className={styles.newButton}
          />
        </Box>
      </Box>

      <Box className={styles.collectionList}>
        {filteredCollections.map((collection) => {
          const isOpen = openCollections[collection.id];

          return (
            <Box key={collection.id} className={styles.collectionGroup}>
              <Box
                className={styles.collectionHeader}
                onClick={() => handleAccordionToggle(collection.id)}
              >
                <Box className={styles.collectionTitleWrap}>
                  {isOpen ? (
                    <KeyboardArrowUpOutlinedIcon className={styles.arrowIcon} />
                  ) : (
                    <KeyboardArrowDownOutlinedIcon className={styles.arrowIcon} />
                  )}
                  <FolderOutlinedIcon className={styles.folderIcon} />
                  <Typography className={styles.collectionTitle}>
                    {collection.name}
                  </Typography>
                </Box>

                <Typography className={styles.requestCount}>
                  {collection.requests.length}
                </Typography>
              </Box>

              {isOpen && (
                <Box className={styles.requestList}>
                  {collection.requests.map((request) => (
                    <Box key={request.id} className={styles.requestItem}>
                      <Typography className={`${styles.method} ${styles[`method${request.type}`]}`}>
                        {request.type}
                      </Typography>
                      <Box className={styles.requestText}>
                        <Typography className={styles.requestName}>
                          {request.name}
                        </Typography>
                        <Typography className={styles.requestPath}>
                          {request.path}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          );
        })}

        {!filteredCollections.length && (
          <Box className={styles.emptyState}>
            <Typography className={styles.emptyTitle}>No collections found</Typography>
            <Typography className={styles.emptyText}>Try a different search term.</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CollectionsSidebar;
