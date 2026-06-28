import { Box, Tab, Tabs as MuiTabs, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import IconButton from "../icon_button/IconButton";
import { styles } from "./styles";

const Tabs = ({
  data = [],
  value,
  onChange,
  onClose,
  onAdd,
  closable = true,
  className = "",
}) => {
  return (
    <Box className={`${styles.container} ${className}`}>
      <Box className={styles.header}>
        <MuiTabs
          value={value}
          onChange={(_, nextValue) => onChange?.(nextValue)}
          variant="scrollable"
          scrollButtons="auto"
          className={styles.list}
          sx={{
            minHeight: 42,

            "& .MuiTabs-indicator": {
              height: 2,
              backgroundColor: "var(--pri-500)",
            },

            "& .MuiTabs-flexContainer": {
              gap: 0,
            },
          }}
        >
          {data.map((tab) => (
            <Tab
              key={tab.id}
              value={tab.id}
              disableRipple
              className={styles.tab}
              sx={{
                minHeight: 42,
                height: 42,

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

                "&.Mui-selected .tab-close": {
                  opacity: 1,
                },
              }}
              label={
                <Box className={styles.tabLabel}>
                  {tab.method && (
                    <Typography
                      component="span"
                      className={`${styles.methodText} ${
                        styles[`method${tab.method}`] || ""
                      }`}
                    >
                      {tab.method}
                    </Typography>
                  )}

                  <Typography
                    component="span"
                    className={styles.tabText}
                  >
                    {tab.label}
                  </Typography>

                  {closable && (
                    <Box
                      className="tab-close"
                      sx={{
                        ml: "auto",
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
                          onClose?.(tab.id);
                        }}
                      />
                    </Box>
                  )}
                </Box>
              }
            />
          ))}
        </MuiTabs>

        <Box
          sx={{
            width: 42,
            height: 42,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: "1px solid var(--bd-light)",
          }}
        >
          <IconButton
            icon={AddIcon}
            tooltipTitle="New Request"
            onClick={onAdd}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Tabs;