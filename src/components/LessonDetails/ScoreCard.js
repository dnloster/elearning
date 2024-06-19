import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const createData = (sum, correct, wrong, percent) => {
    return { sum, correct, wrong, percent };
};

const ScoreCard = ({ quizResult, questions }) => {
    const percentage = (quizResult.score / (questions.length * 5)) * 100;

    const rows = [
        createData("Tổng số câu hỏi:", questions.length),
        createData("Số câu trả lời đúng:", quizResult.correctAnswers),
        createData("Số câu trả lời sai:", quizResult.wrongAnswers),
        createData("Tỉ lệ:", percentage + "%"),
    ];
    return (
        <>
            <div className="card p-4">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.sum} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.sum}
                                    </TableCell>
                                    <TableCell align="right">{row.correct}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
};

export default ScoreCard;
