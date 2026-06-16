import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  IconButton,
  Tab,
  Tabs as MuiTabs,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";

import { apiRequestTabsConfig } from "../../config/tabs_config";
import { styles } from "./styles";

const Tabs = ({
  tabs = apiRequestTabsConfig,
  value,
  defaultValue,
  onChange,
  onClose,
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
    const nextTab = visibleTabs.find((tab) => tab.value === nextValue);

    if (!nextTab) {
      return;
    }

    if (nextTab.disabled) {
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
      nextTabs[closingIndex] || nextTabs[closingIndex - 1] || nextTabs[0];

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
    typeof children === "function" ? children(activeTab) : children;

  return (
    <Box className={`${styles.container} ${className}`}>
      <MuiTabs
        value={activeTab?.value ?? false}
        onChange={(_, nextValue) => handleTabChange(nextValue)}
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
            alignItems: "flex-end",
            gap: "4px",
          },
        }}
      >
        {visibleTabs.map((tab) => {
          return (
            <Tab
              key={tab.value}
              value={tab.value}
              disabled={tab.disabled}
              className={styles.tab}
              label={
                <Box className={styles.tabLabel}>
                  {tab.method && (
                    <Typography component="span" className={`${styles.methodText} ${styles[`method${tab.method}`] || ""}`}>
                      {tab.method}
                    </Typography>
                  )}
                  <Typography component="span" className={styles.tabText}>
                    {tab.label}
                  </Typography>
                  {closable && (
                    <IconButton
                      aria-label={`Close ${tab.label}`}
                      size="small"
                      onClick={(event) => handleTabClose(event, tab)}
                      className={styles.closeButton}
                    >
                      <CloseIcon sx={{ fontSize: 12 }} />
                    </IconButton>
                  )}
                </Box>
              }
            />
          );
        })}
        <Tab
          aria-label="New tab"
          value="__new_tab__"
          disabled
          className={`${styles.tab} ${styles.addTab}`}
          label={<AddIcon sx={{ fontSize: 18 }} />}
        />
      </MuiTabs>

      <Box role="tabpanel" className={`${styles.panel} ${panelClassName}`}>
        {content}
      </Box>
    </Box>
  );
};

export default Tabs;
