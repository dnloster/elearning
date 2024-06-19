import React from "react";
import SidebarDoc from "./Sidebar";

const DocumentsLayout = ({ children }) => {
    return (
        <>
            <div className="container">
                <SidebarDoc />
                <div className="content">{children}</div>
            </div>
        </>
    );
};

export default DocumentsLayout;
