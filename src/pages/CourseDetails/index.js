import React from "react";
import { useParams } from "react-router-dom";
import CourseDetailPage from "./CourseDetailPage";
import { courses } from "~/assets/data/courses";

const getCourseDetailsBySlug = (slug) => {
    return courses.find((course) => course.slug === slug);
};

const CourseDetails = () => {
    const { course } = useParams();
    const courseDetails = getCourseDetailsBySlug(course);
    return (
        <div className="max-w-[1320px] mx-auto py-40">
            <div className="px-8">
                <CourseDetailPage data={courseDetails} />
            </div>
        </div>
    );
};

export default CourseDetails;
