import React from "react";
import { useLocation, useParams } from "react-router-dom";

import LessonLayout from "./LessonLayout";
import Questions from "~/components/LessonDetails/Questions";
import Player from "~/components/LessonDetails/Player";
import LessonDesktopAside from "~/components/LessonDetails/LessonDesktopAside";
import Content from "~/components/LessonDetails/Content";
import { courses } from "~/assets/data/courses";

const LessonDetails = () => {
    let lesson;
    const params = useParams();
    const location = useLocation();
    const getQueryParam = (param) => {
        const params = new URLSearchParams(location.search);
        return params.get(param);
    };

    const slug = getQueryParam("slug");

    courses.forEach((course) => {
        if (course.slug === params.course) {
            lesson = course;
        }
    });

    return (
        <div className="max-w-[1320px] mx-auto pt-40 flex">
            <div className="px-8 min-w-[964px] basis-2/3">
                <LessonLayout>
                    <div className="overflow-hidden flex-shrink-0 w-full">
                        {slug === "questions" ? <Questions lesson={lesson} /> : <Player lesson={lesson} slug={slug} />}
                    </div>
                </LessonLayout>
            </div>
            <LessonDesktopAside>
                <Content lesson={lesson} course={params} />
            </LessonDesktopAside>
        </div>
    );
};

export default LessonDetails;
