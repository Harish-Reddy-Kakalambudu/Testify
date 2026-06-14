import { Box, Typography, Avatar, IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useEffect, useState } from "react";

import Dropdown from "../../dropdown/Dropdown";
import { styles } from "./styles";

const Header = () => {
    const [activeOption, setActiveOption] = useState("completed");
    const [time, setTime] = useState(new Date());

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
            {/* LEFT */}
            <Box className={styles.leftSection}>
                <Typography className={styles.dateTime}>
                    {date} • {currentTime}
                </Typography>
            </Box>

            {/* CENTER */}
            <Box className={styles.centerSection}>
                <Typography className={styles.workspaceName}>
                    Testify Workspace
                </Typography>
            </Box>

            {/* RIGHT */}
            <Box className={styles.rightSection}>
                <Dropdown
                    placeholder="Workspaces"
                    value={activeOption}
                    onChange={setActiveOption}
                    options={options}
                />

                <IconButton
                    sx={{
                        backgroundColor: "var(--color-grey-main)",
                        border: "1px solid var(--color-grey-light)",
                        width: 38,
                        height: 38,
                    }}
                >
                    <LightModeOutlinedIcon
                        sx={{
                            fontSize: "1.02rem",
                            color: "var(--color-text-main)",
                        }}
                    />
                </IconButton>

                <Avatar
                    sx={{
                        width: "2.4rem",
                        height: "2.4rem",
                        bgcolor: "var(--color-primary-light-alpha2)",
                        color: "var(--color-text-title)",
                        border: "1px solid var(--color-primary-light-alpha3)",
                        fontSize:"1rem",
                        fontWeight:"500"
                    }}
                >
                    A
                </Avatar>
            </Box>
        </Box>
    );
};

export default Header;