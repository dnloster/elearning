import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const DetailsItem = ({ title, icon, children }) => {
    return (
        <div className="rounded-lg p-5 bg-white border border-solid border-[rgb(229_231_235/1)] flex flex-col items-start gap-1">
            <h4 className="text-lg text-slate-800 ">{title}</h4>
            <div className="flex items-center gap-1">
                {icon}
                <span>{children}</span>
            </div>
        </div>
    );
};

function ListItem1({ title }) {
    return (
        <li className="flex items-center gap-3">
            <div className="size-6 p-0.5 rounded bg-primary text-cyan-500 flex-shrink-0">
                <CheckCircleIcon />
            </div>
            <p>{title}</p>
        </li>
    );
}

function BoxList({ title, data }) {
    if (data.length === 0) return null;
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold">{title}</h2>
            <ul className="flex flex-col gap-2">
                {data.map((item, index) => (
                    <ListItem1 key={index} title={item} />
                ))}
            </ul>
        </div>
    );
}

function WidgetItem({ children }) {
    return <div className="flex items-center gap-3">{children}</div>;
}

const CourseDetailPage = ({ data }) => {
    const lectures = data.lecture;
    const lessonCount = data.lecture.length;
    const totalMinutes = lectures.reduce((acc, cur) => {
        return acc + cur.duration;
    }, 0);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalMinutesLeft = totalMinutes % 60;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr),400px] gap-60 items-start relative" key={data.id}>
            <div className="">
                <div className="aspect-video relative mb-8">
                    <img
                        alt=""
                        width={1200}
                        height={600}
                        src={data.img}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <h1 className="font-bold text-3xl lg:text-3xl mb-8">Bài giảng {data.title}</h1>
                {lectures.length > 0 && (
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl font-bold">Mô tả</h2>
                            <p className="text-lg leading-relaxed">{data.desc}</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl font-bold">Chi tiết</h2>
                            <div className="grid grid-cols-2 gap-5">
                                <DetailsItem title="Bài học" icon={<PlayCircleOutlinedIcon />}>
                                    {lessonCount}
                                </DetailsItem>
                                <DetailsItem title="Tổng thời gian" icon={<AccessTimeOutlinedIcon />}>
                                    {totalHours}h{totalMinutesLeft}p
                                </DetailsItem>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl font-bold">Nội dung</h2>
                            <Accordion
                                defaultExpanded
                                className="shadow-none rounded-lg border border-solid border-[rgb(229_231_235/1)]"
                            >
                                <ListItem>
                                    <ListItemButton className="rounded-xl">
                                        <AccordionSummary
                                            className="px-0 min-h-0 w-full justify-between"
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            expandIcon={<ExpandMoreIcon />}
                                        >
                                            <ListItemIcon>
                                                <WalletOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Nội dung bài học" className="text-gray-700" />
                                        </AccordionSummary>
                                    </ListItemButton>
                                </ListItem>
                                <AccordionDetails className="p-0">
                                    <List className="pt-0 pb-4 pl-4 flex flex-col gap-3">
                                        {lectures?.map((item) => {
                                            return (
                                                <div className="flex items-center ml-10" key={item.id}>
                                                    <ListItemIcon className="min-w-10">
                                                        <PlayCircleOutlinedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item.title} className="text-gray-700" />
                                                </div>
                                            );
                                        })}
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <BoxList title="Mục tiêu" data={data.gained}></BoxList>
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-5 sticky top-5 xl:top-[104px] right-0">
                <div className="p-5 rounded-lg border border-solid border-[rgb(229_231_235/1)]">
                    <h4 className="text-base font-semibold mb-3">Bài học bao gồm:</h4>
                    <div className="flex flex-col gap-3 text-sm text-slate-600 mb-5">
                        <WidgetItem>
                            <PlayCircleOutlinedIcon />
                            <p>{totalHours} giờ học</p>
                        </WidgetItem>
                        <WidgetItem>
                            <PlayCircleOutlinedIcon />
                            <p>Video quay Full HD</p>
                        </WidgetItem>
                        <WidgetItem>
                            <MenuBookIcon />
                            <p>Tài liệu kèm theo</p>
                        </WidgetItem>
                    </div>
                    <Link to={`/${data.slug}/lesson?slug=${data.lecture[0].slug}`} className="w-full">
                        <Button className="w-full rounded-full text-sm bg-cyan-500 text-white font-bold text-sm py-3 px-8">
                            Học ngay
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailPage;
