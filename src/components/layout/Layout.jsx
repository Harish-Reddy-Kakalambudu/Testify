import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Sidebar from "./sidebar/Siderbar.jsx";
import { styles } from "./styles.js";

const Layout = () => {
    return (
        <Box className={styles.main}>
            <Box className={styles.workspace}>
                <Header />
                <Box className={styles.contentShell}>
                    <Sidebar />
                    <Box className={styles.body}>
                        <Outlet />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;
