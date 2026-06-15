import { Box, Typography } from "@mui/material";

import { layoutTabsConfig } from "../../config/layout_config.js";
import Tabs from "../tabs";
import Header from "./header/Header";
import Sidebar from "./sidebar/Siderbar.jsx";
import { styles } from "./styles.js";

const Layout = ()=>{
    return(
        <Box className={styles.main}>
            <Sidebar/>
            <Box className={styles.workspace}>
                <Header/>
                <Box className={styles.body}>
                    <Tabs
                        tabs={layoutTabsConfig}
                        closable
                        className={styles.requestArea}
                    >
                        {(activeTab) => (
                            <Box className={styles.requestPreview}>
                                {activeTab ? (
                                    <>
                                        <Typography className={styles.requestTitle}>
                                            {activeTab.label}
                                        </Typography>
                                        <Typography className={styles.requestMeta}>
                                            {activeTab.method} request tab
                                        </Typography>
                                    </>
                                ) : (
                                    <Typography className={styles.requestMeta}>
                                        No request tabs open
                                    </Typography>
                                )}
                            </Box>
                        )}
                    </Tabs>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout;
