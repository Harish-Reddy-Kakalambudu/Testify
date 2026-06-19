import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useEffect, useState } from "react";

import Dropdown from "../../dropdown/Dropdown";
import Logo from "../../../assets/testify.svg";
import { styles } from "./styles";

const Header = () => {
    const [activeOption, setActiveOption] = useState("personal");
    const [time, setTime] = useState(new Date());
    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains("dark")
    );

    const options = [
        { label: "Personal", value: "personal" },
        { label: "Team", value: "team" },
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
        hour: "numeric",
        minute: "2-digit",
    });

    return (
        <Box className={styles.header}>
            <Box className={styles.leftSection}>
                <Box className={styles.brandMark}>
                    <img src={Logo} alt="Testify" />
                </Box>
                <Typography className={styles.brandName}>
                    Testify
                </Typography>
                <Box className={"ml-4"}>
                    <Typography className={styles.dateTime}>
                    {date} | {currentTime}
                </Typography>
                </Box>
                
            </Box>

            <Box className={styles.centerSection}>
                <Typography className={styles.workspaceName}>
                    Testify Workspace
                </Typography>
            </Box>

            <Box className={styles.rightSection}>
                <Dropdown
                    placeholder="Workspace"
                    value={activeOption}
                    onChange={setActiveOption}
                    options={options}
                    className={styles.workspaceSelect}
                />

                <IconButton
                    aria-label="Notifications"
                    className={styles.headerIconButton}
                >
                    <Badge
                        variant="dot"
                        color="error"
                        overlap="circular"
                        sx={{
                            "& .MuiBadge-badge": {
                                minWidth: 6,
                                width: 6,
                                height: 6,
                                right: 3,
                                top: 4,
                                backgroundColor: "var(--pri-500)",
                            },
                        }}
                    >
                        <NotificationsNoneOutlinedIcon sx={{ fontSize: "var(--fs-3xl)" }} />
                    </Badge>
                </IconButton>

                <IconButton
                    aria-label="Toggle theme"
                    onClick={handleThemeToggle}
                    className={styles.headerIconButton}
                >
                    {isDarkMode ? (
                        <LightModeOutlinedIcon
                            sx={{
                                color: "var(--txt-main)",
                                fontSize: "var(--fs-3xl)",
                            }}
                        />
                    ) : (
                        <DarkModeOutlinedIcon
                            sx={{
                                color: "var(--txt-main)",
                                fontSize: "var(--fs-3xl)",
                            }}
                        />
                    )}
                </IconButton>

                <Avatar
                    sx={{
                        width: 38,
                        height: 38,
                        bgcolor: "var(--pri-500)",
                        color: "var(--pri-on)",
                        fontSize: "var(--fs-xl)",
                        fontWeight: "var(--fw-semibold)",
                    }}
                >
                    A
                </Avatar>
            </Box>
        </Box>
    );
};

export default Header;
