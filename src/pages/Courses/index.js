import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { courses } from "~/assets/data/courses";

const Courses = () => {
    return (
        <div className="container mx-auto py-40">
            <div className="container mx-auto mb-20 text-center">
                <Typography variant="h2" className="mb-4 text-blue-gray-900 text-4xl font-semibold leading-[1.3]">
                    BÀI HỌC
                </Typography>
            </div>
            <div className="container mx-auto flex justify-evenly">
                {courses.map((course) => (
                    <Link
                        className="cursor-pointer flex flex-col justify-center border border-solid border-[#e5e7eb] rounded-lg"
                        to={`/course-details/${course.slug}`}
                        key={course.id}
                    >
                        <div className="group shadow-sm rounded-lg relative hover:after:content-[''] hover:after:bg-[#00000080] hover:after:rounded-lg hover:after:absolute hover:after:inset-0 after:opacity-0 hover:after:opacity-100 hover:after:transition-all hover:after:duration-300">
                            <button
                                style={{ transition: "all .3s ease 0s" }}
                                className="absolute top-[60%] left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-0 transition bg-white border-white rounded-full py-2.5 px-4 z-[1] group-hover:top-[50%] group-hover:opacity-100 group-hover:visible cursor-pointer"
                            >
                                Xem bài học
                            </button>
                            <img
                                src={course.img}
                                alt="course"
                                width={500}
                                height={350}
                                className="rounded-lg w-[500px] h-[350px]"
                            />
                        </div>
                        <Typography className="p-5 text-black font-semibold text-2xl leading-snug" variant="h4">
                            Bài giảng {course.title}
                        </Typography>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Courses;
