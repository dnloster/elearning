import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import GroupsIcon from "@mui/icons-material/Groups";

import { courses } from "~/assets/data/courses";

const MultiLevelSidebar = () => {
    // const [open, setOpen] = useState(1);

    // const handleOpen = (value) => {
    //     setOpen(open === value ? 0 : value);
    // };

    // let { path } = useLocation();
    // let match = path.match(/\/([^\/]+)\/?$/);
    // let slug = match ? match[1] : null;

    return (
        <div className="px-4 sticky top-[106px] flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-110px)] shadow-xl shadow-blue-gray-900/5">
            <List>
                <Accordion defaultExpanded className="shadow-none">
                    <ListItem className="pb-0">
                        <ListItemButton className="rounded-xl">
                            <AccordionSummary
                                className="px-0 min-h-0 w-full justify-between"
                                aria-controls="panel1-content"
                                id="panel1-header"
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <ListItemIcon className="min-w-fit pr-4">
                                    <WalletOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Danh sách bài giảng" className="text-gray-700" />
                            </AccordionSummary>
                        </ListItemButton>
                    </ListItem>
                    <AccordionDetails className="p-0">
                        <List className="p-0 pl-4">
                            {courses.map((course) => {
                                return (
                                    <Link key={course.id} to={`/course-details/${course.slug}`}>
                                        <ListItem className="first:pt-0">
                                            <ListItemButton className="rounded-xl">
                                                <ListItemIcon className="min-w-fit pr-4">
                                                    <MenuBookIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={course.title} className="text-gray-700" />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                );
                            })}
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Link to="/documents">
                    <ListItem className="pb-0">
                        <ListItemButton className="rounded-xl">
                            <ListItemIcon className="min-w-fit pr-4">
                                <LibraryBooksIcon />
                            </ListItemIcon>
                            <ListItemText primary="Tài liệu tham khảo" className="text-gray-700" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/authors">
                    <ListItem className="pb-0">
                        <ListItemButton className="rounded-xl">
                            <ListItemIcon className="min-w-fit pr-4">
                                <GroupsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Nhóm tác giả" className="text-gray-700" />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </div>
    );
};

export default MultiLevelSidebar;
