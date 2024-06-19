import React from "react";
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
import { Link, useLocation } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";

import { HelpOutline, PlayCircleOutline } from "@mui/icons-material";

const Content = ({ lesson, course }) => {
    const lectures = lesson.lecture;
    const location = useLocation();
    const getQueryParam = (param) => {
        const params = new URLSearchParams(location.search);
        return params.get(param);
    };

    const slug = getQueryParam("slug");
    return (
        <div className="hidden lg:block lg:max-h-[calc(100vh-175px-56px)] xl:max-h-[calc(100vh-175px)] lg:overflow-y-auto scroll-hidden rounded-lg w-[350px]">
            <Accordion defaultExpanded className="shadow-none">
                <ListItem className="pb-0">
                    <ListItemButton className="rounded-t-xl border border-solid border-[#e5e7eb]">
                        <AccordionSummary
                            className="px-0 min-h-0 w-full justify-between"
                            aria-controls="panel1-content"
                            id="panel1-header"
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <ListItemIcon className="min-w-fit pr-4">
                                <WalletOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Danh sách bài học" className="text-gray-700" />
                        </AccordionSummary>
                    </ListItemButton>
                </ListItem>
                <AccordionDetails className="px-4 pt-0">
                    <List className="py-2 border border-solid border-[#e5e7eb] rounded-b-xl border-t-0 flex flex-col gap-3">
                        {lectures.map((lecture) => {
                            return (
                                <Link
                                    key={lecture.id}
                                    to={`/${course.course}/lesson?slug=${lecture.slug}`}
                                    className="border-b border-dashed last:border-b-0 border-b-slate-200 first:pb-2"
                                >
                                    <ListItem className="p-0">
                                        <ListItemButton
                                            className={`rounded-xl gap-4 hover:bg-transparent transition-all ${
                                                slug === lecture.slug
                                                    ? "text-[#2c8fff] font-bold cursor-default"
                                                    : "font-medium text-gray-700 hover:text-[#2c8fff]"
                                            }`}
                                        >
                                            <ListItemIcon className="min-w-fit">
                                                <PlayCircleOutline
                                                    color={`${slug === lecture.slug ? "info" : "inherit"}`}
                                                />
                                            </ListItemIcon>
                                            <span className="text-inherit text-sm font-semibold">{lecture.title}</span>
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            );
                        })}
                    </List>
                </AccordionDetails>
            </Accordion>

            <List className="py-2 px-4">
                <Link to={`/${course.course}/lesson?slug=questions`} className="p-0">
                    <ListItem className="p-0 border border-solid border-slate-200 py-2 px-4 rounded-xl">
                        <ListItemButton
                            className={`rounded-xl gap-4 hover:bg-transparent transition-all px-0 ${
                                slug === lesson.questions.slug
                                    ? "text-[#2c8fff] font-bold cursor-default"
                                    : "font-medium text-gray-700 hover:text-[#2c8fff]"
                            }`}
                        >
                            <ListItemIcon className="min-w-fit">
                                <HelpOutline color={`${slug === lesson.questions.slug ? "info" : "inherit"}`} />
                            </ListItemIcon>
                            <span className="text-inherit text-sm font-semibold">Câu hỏi trắc nghiệm</span>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </div>
    );
};

export default Content;
