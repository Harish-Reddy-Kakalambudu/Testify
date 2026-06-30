import { Box, Tab, Tabs as MuiTabs, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import IconButton from "../icon_button/IconButton";
import { styles } from "./styles";

const Tabs = ({
  tabs = [],
  activeTab,
  onTabChange,
  onTabClose,
  onTabAdd,
  className = "",
}) => {
  return (
    <Box className={`${styles.container} ${className}`}>
      <Box className={styles.header}>
        <MuiTabs
          value={activeTab}
          onChange={(_, value) => onTabChange?.(value)}
          variant="scrollable"
          scrollButtons="auto"
          className={styles.tabs}
          sx={{
            minHeight: 42,

            "& .MuiTabs-indicator": {
              height: 2,
              backgroundColor: "var(--pri-500)",
            },
          }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              value={tab.id}
              disableRipple
              className={styles.tab}
              sx={{
                minHeight: 42,
                height: 42,
                px: 1.5,
                borderRight: "1px solid var(--bd-light)",

                "&:hover": {
                  backgroundColor: "var(--bg-hover)",
                },

                "&.Mui-selected": {
                  backgroundColor: "var(--bg-card)",
                },

                "& .tab-close": {
                  opacity: 0,
                },

                "&:hover .tab-close": {
                  opacity: 1,
                },
              }}
              label={
                <Box className={styles.tabContent}>
                  <Typography
                    component="span"
                    className={`${styles.method} ${
                      styles[`method${tab.method}`]
                    }`}
                  >
                    {tab.method}
                  </Typography>

                  <Typography
                    component="span"
                    className={styles.title}
                  >
                    {tab.title}
                  </Typography>

                  <Box
                    className="tab-close"
                    sx={{
                      ml: 1,
                      transition: "opacity .2s",
                    }}
                  >
                    <IconButton
                      icon={CloseIcon}
                      tooltip={false}
                      width="16px"
                      height="16px"
                      color="var(--txt-sub)"
                      onClick={(e) => {
                        e.stopPropagation();
                        onTabClose?.(tab.id);
                      }}
                    />
                  </Box>
                </Box>
              }
            />
          ))}
        </MuiTabs>

        <Box
          sx={{
            width: 42,
            minWidth: 42,
            height: 42,
            borderLeft: "1px solid var(--bd-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            icon={AddIcon}
            tooltip={false}
            onClick={onTabAdd}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Tabs;