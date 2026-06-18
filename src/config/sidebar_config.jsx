import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

import { PageNames } from "../routes/PageNames";

export const SidebarMenu = [
    {
        link: PageNames.COLLECTIONS,
        icon: <FolderOutlinedIcon sx={{ fontSize: "var(--fs-4xl)" }} />,
        name: "Collections",
    },
    {
        link: PageNames.ENVIRONMENTS,
        icon: <TuneOutlinedIcon sx={{ fontSize: "var(--fs-4xl)" }} />,
        name: "Environments",
    },
    {
        link: PageNames.HISTORY,
        icon: <HistoryOutlinedIcon sx={{ fontSize: "var(--fs-4xl)" }} />,
        name: "History",
    },
];
