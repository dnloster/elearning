import React from "react";
import LessonPlayer from "./LessonPlayer";

const Player = ({ lesson, slug }) => {
    const lectures = lesson.lecture;
    const lectureIndex = lectures?.findIndex((l) => l.slug === slug);
    if (lectureIndex === -1) return <div>Lesson not found</div>;
    const nextLecture = lectures[lectureIndex + 1]?.slug;
    const prevLecture = lectures[lectureIndex - 1]?.slug;
    return (
        <>
            <h1 className="text-3xl font-bold text-center uppercase my-3">Bài giảng {lesson.title}</h1>
            <LessonPlayer
                videoId={lectures[lectureIndex].src}
                lectureDetails={lectures[lectureIndex]}
                nextLecture={nextLecture}
                prevLecture={prevLecture}
                slug={slug}
            />
        </>
    );
};

export default Player;
