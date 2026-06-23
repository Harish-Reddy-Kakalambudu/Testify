import { Box, Tab, Tabs as MuiTabs, Typography } from "@mui/material";
import { useMemo, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import IconButton from "../icon_button/IconButton";
import { apiRequestTabsConfig } from "../../config/tabs_config";
import { styles } from "./styles";

const Tabs = ({
  tabs = apiRequestTabsConfig,
  value,
  defaultValue,
  onChange,
  onClose,
  onAdd,
  closable = false,
  children,
  className = "",
  panelClassName = "",
}) => {
  const [tabsState, setTabsState] = useState({
    sourceTabs: tabs,
    visibleTabs: tabs,
  });

  if (tabsState.sourceTabs !== tabs) {
    setTabsState({
      sourceTabs: tabs,
      visibleTabs: tabs,
    });
  }

  const visibleTabs =
    tabsState.sourceTabs === tabs ? tabsState.visibleTabs : tabs;

  const firstTabValue = visibleTabs[0]?.value;

  const [internalValue, setInternalValue] = useState(
    defaultValue || firstTabValue
  );

  const activeValue = value ?? internalValue;

  const activeTab = useMemo(
    () =>
      visibleTabs.find((tab) => tab.value === activeValue) || visibleTabs[0],
    [activeValue, visibleTabs]
  );

  const handleTabChange = (nextValue) => {
    const nextTab = visibleTabs.find(
      (tab) => tab.value === nextValue
    );

    if (!nextTab || nextTab.disabled) {
      return;
    }

    if (value === undefined) {
      setInternalValue(nextTab.value);
    }

    onChange?.(nextTab.value, nextTab);
  };

  const handleTabClose = (event, closingTab) => {
    event.stopPropagation();

    const closingIndex = visibleTabs.findIndex(
      (tab) => tab.value === closingTab.value
    );

    const nextTabs = visibleTabs.filter(
      (tab) => tab.value !== closingTab.value
    );

    const nextActiveTab =
      nextTabs[closingIndex] ||
      nextTabs[closingIndex - 1] ||
      nextTabs[0];

    setTabsState({
      sourceTabs: tabs,
      visibleTabs: nextTabs,
    });

    onClose?.(closingTab.value, closingTab);

    if (closingTab.value === activeTab?.value) {
      const nextValue = nextActiveTab?.value;

      if (value === undefined) {
        setInternalValue(nextValue);
      }

      onChange?.(nextValue, nextActiveTab);
    }
  };

  const content =
    typeof children === "function"
      ? children(activeTab)
      : children;

  return (
    <Box className={`${styles.container} ${className}`}>
      <Box className={styles.header}>
        <MuiTabs
          value={activeTab?.value ?? false}
          onChange={(_, nextValue) =>
            handleTabChange(nextValue)
          }
          variant="scrollable"
          scrollButtons="auto"
          className={styles.list}
          sx={{
            minHeight: 42,

            "& .MuiTabs-indicator": {
              height: "2px",
              backgroundColor: "var(--pri-500)",
            },

            "& .MuiTabs-scrollButtons": {
              width: "32px",
            },

            "& .MuiTabs-flexContainer": {
              gap: 0,
            },
          }}
        >
          {visibleTabs.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
              disableRipple
              className={styles.tab}
              sx={{
                minHeight: 42,
                height: 42,

                borderRight: "1px solid var(--bd-light)",

                transition: "all .2s ease",

                "&:hover": {
                  backgroundColor: "var(--bg-hover)",
                },

                "&.Mui-selected": {
                  backgroundColor: "var(--bg-card)",
                  color: "var(--txt-title)",
                },

                "&.Mui-focusVisible": {
                  outline: "none",
                  backgroundColor: "transparent",
                },

                "&:focus": {
                  outline: "none",
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
                      className={`${styles.methodText} ${styles[
                        `method${tab.method}`
                      ] || ""
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
                        marginLeft: "auto",
                        transition: "opacity .2s ease",
                      }}
                    >
                      <IconButton
                        icon={CloseIcon}
                        tooltip={false}
                        width="16px"
                        height="16px"
                        color="var(--txt-sub)"
                        onClick={(event) =>
                          handleTabClose(event, tab)
                        }
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
            width: "42px",
            height: "42px",
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

      <Box
        role="tabpanel"
        className={`${styles.panel} ${panelClassName}`}
      >
        {content}
      </Box>
    </Box>
  );
};

export default Tabs;