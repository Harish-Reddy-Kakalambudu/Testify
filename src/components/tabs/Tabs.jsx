import CloseIcon from "@mui/icons-material/Close";
import { Box, ButtonBase, IconButton, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

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
  const [visibleTabs, setVisibleTabs] = useState(tabs);
  const firstTabValue = visibleTabs[0]?.value;
  const [internalValue, setInternalValue] = useState(
    defaultValue || firstTabValue
  );

  useEffect(() => {
    setVisibleTabs(tabs);
  }, [tabs]);

  const activeValue = value ?? internalValue;

  const activeTab = useMemo(
    () =>
      visibleTabs.find((tab) => tab.value === activeValue) || visibleTabs[0],
    [activeValue, visibleTabs]
  );

  const handleTabChange = (nextTab) => {
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

    setVisibleTabs(nextTabs);
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
      <Box role="tablist" className={styles.list}>
        {visibleTabs.map((tab) => {
          const isActive = tab.value === activeTab?.value;

          return (
            <ButtonBase
              key={tab.value}
              role="tab"
              aria-selected={isActive}
              disabled={tab.disabled}
              onClick={() => handleTabChange(tab)}
              className={`${styles.tab} ${isActive ? styles.activeTab : ""}`}
            >
              <Typography
                component="span"
                sx={{
                  color: "inherit",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  lineHeight: 1,
                }}
              >
                {tab.label}
              </Typography>
              {closable && (
                <IconButton
                  aria-label={`Close ${tab.label}`}
                  size="small"
                  onClick={(event) => handleTabClose(event, tab)}
                  className={styles.closeButton}
                >
                  <CloseIcon sx={{ fontSize: "var(--fs-sm)" }} />
                </IconButton>
              )}
            </ButtonBase>
          );
        })}
      </Box>

      <Box role="tabpanel" className={`${styles.panel} ${panelClassName}`}>
        {content}
      </Box>
    </Box>
  );
};

export default Tabs;
