import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

import { PageNames } from "../routes/PageNames";

export const SidebarMenu = [
    {
        link: PageNames.COLLECTIONS,
        icon: <FolderOutlinedIcon fontSize="small" />,
        name: "Collections",
    },
    {
        link: PageNames.ENVIRONMENTS,
        icon: <TuneOutlinedIcon fontSize="small" />,
        name: "Environments",
    },
    {
        link: PageNames.HISTORY,
        icon: <HistoryOutlinedIcon fontSize="small" />,
        name: "History",
    },
];
