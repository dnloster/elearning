import { Button } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";

import ScoreCard from "./ScoreCard";
import { createPortal } from "react-dom";

const Quiz = ({ questions }) => {
    const question = questions.question;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [answerChecked, setAnswerChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [quizResult, setQuizResult] = useState({ score: 0, correctAnswers: 0, wrongAnswers: 0 });

    const { ask, answers, correctAnswer } = question[currentQuestionIndex];

    const onAnswerSelected = (answer, idx) => {
        setSelectedAnswerIndex(idx);
        setSelectedAnswer(answer);
        setAnswerChecked(true);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === correctAnswer) {
            setQuizResult((prev) => ({
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
            }));
        } else {
            setQuizResult((prev) => ({
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1,
            }));
        }
        if (currentQuestionIndex !== question.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            showSwal();
        }
        setSelectedAnswer("");
        setSelectedAnswerIndex(null);
        setAnswerChecked(false);
    };

    const [swalShown, setSwalShown] = useState(false);

    const showSwal = () => {
        Swal.fire({
            icon: "info",
            didOpen: () => setSwalShown(true),
            didClose: () => setSwalShown(false),
            confirmButtonText: "Thực hiện lại",
        }).then((result) => {
            if (result.isConfirmed) {
                setCurrentQuestionIndex(0);
                setQuizResult({ score: 0, correctAnswers: 0, wrongAnswers: 0 });
            }
        });
    };

    return (
        <div className="container mt-5">
            <div className="card p-4">
                <h1 className="text-2xl font-bold">Câu hỏi: {ask}</h1>
                <ul className="mt-2">
                    {answers.map((answer, idx) => (
                        <li
                            key={idx}
                            onClick={() => onAnswerSelected(answer, idx)}
                            className="rounded-lg p-4 cursor-pointer mt-4 hover:bg-[#f0ffed]"
                            style={{
                                backgroundColor: `${selectedAnswerIndex === idx ? "#f0ffed" : "#f6f7f9"}`,
                            }}
                        >
                            {answer}
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between mt-6">
                    <b>
                        Câu hỏi: {currentQuestionIndex + 1}/{question.length}
                    </b>
                    <Button
                        onClick={handleNextQuestion}
                        variant="contained"
                        className="text-white text-[12px] px-6 py-3 font-semibold hover:bg-cyan-400"
                        disabled={!answerChecked}
                    >
                        {currentQuestionIndex === questions.length - 1 ? "Xác nhận" : "Câu tiếp theo"}
                    </Button>
                    {swalShown &&
                        createPortal(
                            <ScoreCard quizResult={quizResult} questions={question} />,
                            Swal.getHtmlContainer()
                        )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
