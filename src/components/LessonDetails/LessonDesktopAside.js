import React from "react";

const LessonDesktopAside = ({ children }) => {
    return (
        <div className="mt-2 flex-1 overflow-hidden lg:overflow-visible h-full lg:h-auto sticky top-10 xl:top-[112px] right-0 max-w-[356px]">
            {children}
        </div>
    );
};

export default LessonDesktopAside;
