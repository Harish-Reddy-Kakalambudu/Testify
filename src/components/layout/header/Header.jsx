import { Avatar, Box, IconButton, Typography } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useEffect, useState } from "react";

import Dropdown from "../../dropdown/Dropdown";
import { styles } from "./styles";

const Header = () => {
    const [activeOption, setActiveOption] = useState("completed");
    const [time, setTime] = useState(new Date());
    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains("dark")
    );

    const options = [
        { label: "All", value: "all" },
        { label: "Processing", value: "processing" },
        { label: "Completed", value: "completed" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleThemeToggle = () => {
        document.documentElement.classList.toggle("dark");
        setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    const date = time.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
    });

    const currentTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <Box className={styles.header}>
            <Box className={styles.leftSection}>
                <Typography className={styles.dateTime}>
                    {date} | {currentTime}
                </Typography>
            </Box>

            <Box className={styles.centerSection}>
                <Typography className={styles.workspaceName}>
                    Testify Workspace
                </Typography>
            </Box>

            <Box className={styles.rightSection}>
                <Dropdown
                    placeholder="Workspaces"
                    value={activeOption}
                    onChange={setActiveOption}
                    options={options}
                />

                <IconButton
                    aria-label="Toggle theme"
                    onClick={handleThemeToggle}
                    sx={{
                        width: 38,
                        height: 38,
                        border: "1px solid var(--bd-light)",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--bg-soft)",
                        transition: "all 0.2s ease",
                        "&:hover": {
                            backgroundColor: "var(--bg-hover)",
                        },
                    }}
                >
                    {isDarkMode ? (
                        <LightModeOutlinedIcon
                            sx={{
                                color: "var(--txt-main)",
                                fontSize: "var(--fs-xl)",
                            }}
                        />
                    ) : (
                        <DarkModeOutlinedIcon
                            sx={{
                                color: "var(--txt-main)",
                                fontSize: "var(--fs-xl)",
                            }}
                        />
                    )}
                </IconButton>

                <Avatar
                    sx={{
                        width: "2.4rem",
                        height: "2.4rem",
                        border: "1px solid var(--pri-200)",
                        bgcolor: "var(--pri-100)",
                        color: "var(--pri-700)",
                        fontSize: "var(--fs-xl)",
                        fontWeight: "var(--fw-medium)",
                    }}
                >
                    A
                </Avatar>
            </Box>
        </Box>
    );
};

export default Header;
