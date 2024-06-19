import React from "react";

const LessonLayout = ({ children }) => {
    return (
        <div className="h-[calc(100vh-56px)] sm:h-auto transition-all relative -mx-5 -mb-7 lg:mb-0 lg:mx-0">
            {children}
        </div>
    );
};

export default LessonLayout;
