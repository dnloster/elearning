import { Button, Typography } from "@mui/material";
import React from "react";
import heroBG from "~/assets/images/hero_background.jpg";
import TextGenerateEffect from "./TextGenerateEffect";

const words = `Bài học sẽ cung cấp đầy đủ khái niệm, phân loại, chức năng và công nghệ sản xuất mới nhất hiện nay cũng như cách lựa chọn nâng cấp và thay thế cho bộ nguồn và bo mạch chủ`;

const Hero = () => {
    return (
        <div
            className="relative min-h-screen w-full bg-cover bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${heroBG})` }}
        >
            <div className="absolute inset-0 h-full w-full bg-[rgb(33_33_33)] bg-opacity-60" />
            <div className="min-h-screen px-8 relative flex justify-center flex-col items-center">
                <div className="container relative z-10 mx-auto grid place-items-center text-center">
                    <Typography variant="h1" className="text-white text-5xl font-semibold leading-tight">
                        BÀI GIẢNG ĐIỆN TỬ PHỤC VỤ TỰ HỌC
                    </Typography>
                    <Typography
                        variant="h2"
                        className="text-white mt-6 mb-10 antialiased tracking-normal leading-[1.3] text-4xl font-semibold"
                    >
                        Bộ video giới thiệu bo mạch chủ và bộ nguồn
                    </Typography>
                    <TextGenerateEffect words={words} />
                </div>
                <a href="#courses" className="mt-[5%]">
                    <Button
                        variant="contained"
                        color="primary"
                        className="w-fit text-3xl px-[40px] rounded-full text-white text-3xl font-bold py-3 px-10 hover:bg-[#24cde3] "
                    >
                        HỌC NGAY
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default Hero;
