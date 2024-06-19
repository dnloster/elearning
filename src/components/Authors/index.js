import { Typography } from "@mui/material";
import React, { forwardRef } from "react";
import AuthorCard from "./Card";
import AuthorsData from "~/assets/data/author";

const Authors = (props, ref) => {
    return (
        <div
            className="container mx-auto"
            ref={props.authorsRef}
            data-aos={props.animation}
            data-aos-offset={props.offset}
            data-aos-easing={props.easing}
            id="authors"
        >
            <div className="container mx-auto mb-20 text-center">
                <Typography variant="h2" className="mb-4 text-blue-gray-900 text-4xl font-semibold leading-[1.3]">
                    NHÓM TÁC GIẢ
                </Typography>
                <Typography variant="h4" className="mx-auto w-full px-4 text-xl font-normal !text-gray-500 lg:w-6/12">
                    Bộ môn Kỹ thuật máy tính - Khoa Công nghệ thông tin
                </Typography>
            </div>
            <div className="container mx-auto flex justify-evenly p-[30px] mx-[-30px]">
                {AuthorsData.map((props, idx) => (
                    <AuthorCard key={idx} {...props} />
                ))}
            </div>
        </div>
    );
};

export default forwardRef(Authors);
