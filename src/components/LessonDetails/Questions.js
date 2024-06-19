import React from "react";
import Quiz from "./Quiz";

const Questions = ({ lesson }) => {
    return (
        <>
            <h1 className="text-3xl font-bold text-center uppercase mb-3 pt-3">Câu hỏi trắc nghiệm {lesson.title}</h1>
            <Quiz questions={lesson.questions} />
        </>
    );
};

export default Questions;
