import { Box, Button, Typography } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";

import { layoutTabsConfig } from "../../config/layout_config.js";
import Tabs from "../tabs";
import Dropdown from "../dropdown/Dropdown.jsx";
import Header from "./header/Header";
import Sidebar from "./sidebar/Siderbar.jsx";
import { styles } from "./styles.js";

const requestMethodOptions = [
    { label: "POST", value: "POST" },
    { label: "GET", value: "GET" },
    { label: "PUT", value: "PUT" },
    { label: "PATCH", value: "PATCH" },
    { label: "DELETE", value: "DELETE" },
];

const requestTabs = [
    "Params",
    "Auth",
    "Headers",
    "Body",
    "Scripts",
    "Tests",
    "Docs",
];

const bodyTypes = ["JSON", "XML", "Form Data", "x-www-form-urlencoded", "Binary", "None"];

const RequestWorkspace = ({ activeTab }) => {
    const activeLabel = activeTab?.label || "Login API";

    return (
        <Box className={styles.requestWorkspace}>
            <Box className={styles.requestTitleRow}>
                <Typography className={styles.requestTitle}>
                    {activeLabel}
                </Typography>
                <Box className={styles.protocolTabs}>
                    <Button className={`${styles.protocolButton} ${styles.protocolActive}`} startIcon={<PublicOutlinedIcon />}>
                        HTTP
                    </Button>
                    <Button className={styles.protocolButton} startIcon={<CodeOutlinedIcon />}>
                        WS
                    </Button>
                    <Button className={styles.protocolButton} startIcon={<AccountTreeOutlinedIcon />}>
                        GQL
                    </Button>
                </Box>
            </Box>

            <Box className={styles.requestBar}>
                <Dropdown
                    value="POST"
                    onChange={() => {}}
                    options={requestMethodOptions}
                    className={styles.methodDropdown}
                />
                <Box className={styles.urlInput}>
                    https://api.acme.io/v2/auth/login
                </Box>
                <Button className={styles.saveButton} startIcon={<SaveOutlinedIcon />}>
                    Save
                </Button>
                <Button className={styles.sendButton} startIcon={<SendOutlinedIcon />}>
                    Send
                </Button>
            </Box>

            <Box className={styles.editorResponseGrid}>
                <Box className={styles.editorPane}>
                    <Box className={styles.requestTabRow}>
                        {requestTabs.map((tab) => (
                            <Box
                                key={tab}
                                className={`${styles.requestTab} ${tab === "Body" ? styles.requestTabActive : ""}`}
                            >
                                {tab}
                                {tab === "Headers" && <Box className={styles.tabCount}>2</Box>}
                            </Box>
                        ))}
                    </Box>

                    <Box className={styles.bodyTypeRow}>
                        {bodyTypes.map((type) => (
                            <Box key={type} className={styles.bodyType}>
                                <Box className={`${styles.radioDot} ${type === "JSON" ? styles.radioDotActive : ""}`} />
                                <Typography className={styles.bodyTypeText}>{type}</Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box className={styles.codeEditor}>
                        <Box className={styles.codeHeader}>
                            <Typography className={styles.codeTitle}>JSON BODY</Typography>
                            <Box className={styles.codeActions}>
                                <Typography>Beautify</Typography>
                                <Typography>Clear</Typography>
                            </Box>
                        </Box>
                        <Box className={styles.codeBlock}>
                            <Typography component="pre" className={styles.codeText}>
{`{
  "email": "alex@acme.io",
  "password": "••••••••"
}`}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box className={styles.responsePane}>
                    <NearMeOutlinedIcon className={styles.emptyIcon} />
                    <Typography className={styles.emptyTitle}>No response yet</Typography>
                    <Typography className={styles.emptySub}>Hit Send to execute the request</Typography>
                </Box>
            </Box>
        </Box>
    );
};

const Layout = ()=>{
    return(
        <Box className={styles.main}>
            <Box className={styles.workspace}>
                <Header/>
                <Box className={styles.contentShell}>
                    <Sidebar/>
                    <Box className={styles.body}>
                        <Tabs
                            tabs={layoutTabsConfig}
                            closable
                            className={styles.requestArea}
                        >
                            {(activeTab) => (
                                <RequestWorkspace activeTab={activeTab} />
                            )}
                        </Tabs>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout;
