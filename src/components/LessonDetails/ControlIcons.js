import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { PlayArrowSharp } from "@mui/icons-material";
import { PauseSharp } from "@mui/icons-material";
import { VolumeUp } from "@mui/icons-material";
import { VolumeOff } from "@mui/icons-material";
import { Fullscreen } from "@mui/icons-material";
import Popover from "@mui/material/Popover";
import Tooltip from "@mui/material/Tooltip";
import { useLocation, useNavigate } from "react-router-dom";

function PlayerControl({ onClick, action }) {
    return (
        <button
            onClick={onClick}
            className={`flex size-10 border-none rounded items-center bg-white justify-center absolute top-1/2 -translate-y-1/2 z-10 hover:!bg-[#06b6d4] hover:!text-white transition-all cursor-pointer ${
                action === "prev" ? "left-5" : "right-5"
            }`}
        >
            {action === "next" ? <ArrowForward /> : <ArrowBack />}
        </button>
    );
}

const ControlIcons = ({
    playandpause,
    playing,
    rewind,
    fastForward,
    muting,
    muted,
    volumeChange,
    volumeSeek,
    volume,
    playRate,
    playerbackRate,
    fullScreenMode,
    onSeek,
    played,
    onSeekMouseUp,
    onSeekMouseDown,
    fullMovieTime,
    playedTime,
    nextLecture,
    prevLecture,
}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const handlePopOver = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeLesson = (url) => {
        if (!url) return;
        const searchParams = new URLSearchParams(location.search);
        searchParams.set("slug", url);
        const newUrl = `${location.pathname}?${searchParams.toString()}`;
        navigate(newUrl);
    };

    const open = Boolean(anchorEl);
    const id = open ? "playbackrate-popover" : undefined;

    function ValueLabelComponent(props) {
        const { children, value } = props;

        return (
            <Tooltip enterTouchDelay={0} placement="top" title={value}>
                {children}
            </Tooltip>
        );
    }

    const PrettoSlider = styled(Slider)({
        height: 5,
        "& .MuiSlider-track": {
            border: "none",
        },
        "& .MuiSlider-thumb": {
            height: 16,
            width: 16,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                boxShadow: "inherit",
            },
            "&:before": {
                display: "none",
            },
        },
        "& .MuiSlider-valueLabel": {
            lineHeight: 1.2,
            fontSize: 12,
            background: "unset",
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: "50% 50% 50% 0",
            backgroundColor: "#52af77",
            transformOrigin: "bottom left",
            transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
            "&:before": { display: "none" },
            "&.MuiSlider-valueLabelOpen": {
                transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
            },
            "& > *": {
                transform: "rotate(45deg)",
            },
        },
    });
    return (
        <div className="absolute inset-0 flex flex-col justify-between z-[2] group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            {/* Middle Controls */}
            <Grid container direction="row" alignItems="center" justifyContent="center">
                {prevLecture && (
                    <PlayerControl action="prev" onClick={() => handleChangeLesson(prevLecture)}></PlayerControl>
                )}
                {nextLecture && (
                    <PlayerControl action="next" onClick={() => handleChangeLesson(nextLecture)}></PlayerControl>
                )}
            </Grid>

            {/* Bottom Controls */}
            <Grid container direction="row" alignItems="center" justifyContent="space-between" style={{ padding: 16 }}>
                <Grid item xs={12}>
                    <PrettoSlider
                        min={0}
                        max={100}
                        value={played * 100}
                        onChange={onSeek}
                        onMouseDown={onSeekMouseDown}
                        onChangeCommitted={onSeekMouseUp}
                        slots={{ valueLabel: ValueLabelComponent }}
                    />
                </Grid>

                <Grid item xs={7}>
                    <Grid container alignItems="center" direction="row" wrap="nowrap">
                        <IconButton
                            className="text-white text-[50px] scale-90 hover:text-[#fff] hover:scale-100"
                            aria-label="reqind"
                            onClick={rewind}
                        >
                            <img src="/image/backward-5.svg" alt="" className="w-8 text-white" />
                        </IconButton>
                        <IconButton
                            className="text-white text-[50] scale-90 hover:text-[#fff] hover:scale-100"
                            aria-label="reqind"
                            onClick={playandpause}
                        >
                            {playing ? (
                                <PauseSharp fontSize="large" style={{ color: "white" }} />
                            ) : (
                                <PlayArrowSharp fontSize="large" style={{ color: "white" }} />
                            )}
                        </IconButton>
                        <IconButton
                            className="text-white text-[50px] scale-90 hover:text-[#fff] hover:scale-100"
                            aria-label="reqind"
                            onClick={fastForward}
                        >
                            <img src="/image/forward-5.svg" alt="" className="w-8 text-white" />
                        </IconButton>
                        <IconButton
                            className="text-white text-[50] scale-90 hover:text-[#fff] hover:scale-100"
                            aria-label="reqind"
                            onClick={muting}
                        >
                            {muted ? (
                                <VolumeOff fontSize="large" style={{ color: "white" }} />
                            ) : (
                                <VolumeUp fontSize="large" style={{ color: "white" }} />
                            )}
                        </IconButton>
                        <Slider
                            min={0}
                            max={100}
                            value={volume * 100}
                            onChange={volumeChange}
                            onChangeCommitted={volumeSeek}
                            className="w-[92px]"
                        />
                        <Typography variant="h7" style={{ color: "white", marginLeft: "20px" }}>
                            {playedTime} {" / "}
                        </Typography>

                        <Typography variant="h7" style={{ color: "white" }}>
                            {fullMovieTime}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item>
                    <Button
                        variant="text"
                        onClick={handlePopOver}
                        // onMouseLeave={handleClose}
                        className="text-[#fff]"
                    >
                        <Typography>{playerbackRate}X</Typography>
                    </Button>

                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                    >
                        <Grid container direction="column-reverse">
                            {[0.5, 1, 1.5, 2].map((rate, index) => (
                                <Button variant="text" onClick={() => playRate(rate)} key={index}>
                                    <Typography color={rate === playerbackRate ? "secondary" : "default"}>
                                        {rate}
                                    </Typography>
                                </Button>
                            ))}
                        </Grid>
                    </Popover>

                    <IconButton className="text-[#fff]" onClick={fullScreenMode}>
                        <Fullscreen fontSize="large" />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
};

export default ControlIcons;
