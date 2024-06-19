import React, { Fragment } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

const DefaultLayout = ({ children }) => {
    const { pathname } = useLocation();
    return (
        <>
            <Header />
            {pathname === "/" ? <Sidebar animation="fade-right" offset="500" easing="ease-in-sine" /> : Fragment}
            <div className="flex">
                {pathname !== "/" ? <Sidebar animation="fade-right" offset="500" easing="ease-in-sine" /> : Fragment}
                <div className="relative flex-1">{children}</div>
            </div>
        </>
    );
};

export default DefaultLayout;
