import React, { useEffect } from "react";

import Logo from "~/assets/images/TCDKTTT.jpg";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const Header = () => {
    const [isScrolling, setIsScrolling] = React.useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={
                pathname !== "/"
                    ? "fixed top-0 z-50 border-0 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] pt-2.5 pb-4 transition duration-500 w-full bg-white"
                    : isScrolling
                    ? "fixed top-0 z-50 border-0 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] pt-2.5 pb-4 transition duration-500 bg-white w-full"
                    : "fixed top-0 z-50 border-0 bg-transparent w-full py-4"
            }
        >
            <div className="container mx-auto flex items-center lg:justify-center justify-between">
                <a href="/" className="items-center flex grow">
                    <img
                        width={80}
                        height={80}
                        src={Logo}
                        className="rounded-full object-cover object-center"
                        alt="online course"
                    />
                    <Typography
                        className={`${
                            pathname !== "/"
                                ? "pl-3 lg:text-4xl text-2xl font-bold select-none text-center text-cyan-500"
                                : isScrolling
                                ? "pl-3 lg:text-4xl text-2xl font-bold select-none text-center text-cyan-500"
                                : "pl-3 lg:text-4xl text-2xl font-bold select-none text-center text-white"
                        }`}
                    >
                        TRƯỜNG CAO ĐẲNG KỸ THUẬT THÔNG TIN
                    </Typography>
                </a>
                <div
                    className={`transition grow-0 ${
                        pathname !== "/"
                            ? "mx-auto lg:flex items-center justify-end gap-6 text-cyan-500"
                            : isScrolling
                            ? "mx-auto lg:flex items-center justify-end gap-6 text-cyan-500"
                            : "mx-auto lg:flex items-center justify-end gap-6 text-white"
                    }`}
                >
                    {pathname !== "/" ? (
                        <>
                            <Link
                                to="/courses"
                                className={`font-bold text-xl select-none p-[10px] text-inherit transition-all cursor-pointer hover:bg-[#adadad17] hover:text-cyan-600 rounded-lg`}
                            >
                                Danh sách bài học
                            </Link>
                            <Link
                                to="/authors"
                                className={`font-bold text-xl select-none p-[10px] text-inherit transition-all cursor-pointer hover:bg-[#adadad17] hover:text-cyan-600 rounded-lg `}
                            >
                                Nhóm tác giả
                            </Link>
                        </>
                    ) : (
                        <>
                            <a
                                href="#courses"
                                className={`font-bold text-xl select-none p-[10px] text-inherit transition-all cursor-pointer ${
                                    !isScrolling
                                        ? "hover:text-[#00bcd4]"
                                        : "hover:bg-[#adadad17] hover:text-cyan-600 rounded-lg"
                                }`}
                            >
                                Danh sách bài học
                            </a>
                            <a
                                href="#authors"
                                className={`font-bold text-xl select-none p-[10px] text-inherit transition-all cursor-pointer ${
                                    !isScrolling
                                        ? "hover:text-[#00bcd4]"
                                        : "hover:bg-[#adadad17] hover:text-cyan-600 rounded-lg"
                                }`}
                            >
                                Nhóm tác giả
                            </a>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
