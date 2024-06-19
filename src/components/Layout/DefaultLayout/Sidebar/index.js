import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MultiLevelSidebar from "~/components/MultiLevelSidebar";

const Sidebar = (props) => {
    const [scrollY, setScrollY] = useState(0);
    const { pathname } = useLocation();

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`pt-[30px] mt-20 shadow text-cyan-500 transition z-10 ${
                pathname !== "/" ? "" : scrollY >= 750 ? "fixed left-0" : "fixed left-0 translate-x-[-350px]"
            }`}
        >
            <MultiLevelSidebar />
        </div>
    );
};

export default Sidebar;
