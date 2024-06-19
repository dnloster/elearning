import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import ControlIcons from "./ControlIcons";

const format = (seconds) => {
    if (isNaN(seconds)) {
        return "00:00";
    }

    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");

    if (hh) {
        return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
    } else {
        return `${mm}:${ss}`;
    }
};

const LessonPlayer = ({ videoId, lectureDetails, nextLecture, prevLecture }) => {
    const [playerstate, setPlayerState] = useState({
        playing: true,
        muted: false,
        volume: 0.5,
        playerbackRate: 1.0,
        played: 0,
        seeking: false,
    });

    //Destructure State in other to get the values in it
    const { playing, muted, volume, playerbackRate, played, seeking } = playerstate;
    const playerRef = useRef(null);
    const playerDivRef = useRef(null);

    //This function handles play and pause onchange button
    const handlePlayAndPause = () => {
        setPlayerState({ ...playerstate, playing: !playerstate.playing });
    };

    const handleMuting = () => {
        setPlayerState({ ...playerstate, muted: !playerstate.muted });
    };

    const handleRewind = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - 5);
    };

    const handleFastForward = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 5);
    };

    const handleVolumeChange = (e, newValue) => {
        setPlayerState({ ...playerstate, volume: parseFloat(newValue / 100), muted: newValue === 0 ? true : false });
    };

    const handleVolumeSeek = (e, newValue) => {
        setPlayerState({ ...playerstate, volume: parseFloat(newValue / 100), muted: newValue === 0 ? true : false });
    };

    const handlePlayerRate = (rate) => {
        setPlayerState({ ...playerstate, playerbackRate: rate });
    };

    const handleFullScreenMode = () => {
        screenfull.toggle(playerDivRef.current);
    };

    const handlePlayerProgress = (state) => {
        if (!playerstate.seeking) {
            setPlayerState({ ...playerstate, ...state });
        }
    };

    const handlePlayerSeek = (e, newValue) => {
        setPlayerState({ ...playerstate, played: parseFloat(newValue / 100) });
        playerRef.current.seekTo(parseFloat(newValue / 100));
    };

    const handlePlayerMouseSeekDown = (e) => {
        setPlayerState({ ...playerstate, seeking: true });
    };

    const handlePlayerMouseSeekUp = (e, newValue) => {
        setPlayerState({ ...playerstate, seeking: false });
        playerRef.current.seekTo(newValue / 100);
    };

    const currentPlayerTime = playerRef.current ? playerRef.current.getCurrentTime() : "00:00";
    const movieDuration = playerRef.current ? playerRef.current.getDuration() : "00:00";
    const playedTime = format(currentPlayerTime);
    const fullMovieTime = format(movieDuration);

    return (
        <div className="lg:mb-8">
            <Container className="p-0">
                <div className="w-full group relative" ref={playerDivRef}>
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        className="aspect-video"
                        ref={playerRef}
                        url={videoId}
                        playing={playing}
                        volume={volume}
                        playbackRate={playerbackRate}
                        onProgress={handlePlayerProgress}
                        muted={muted}
                    />

                    <ControlIcons
                        key={volume.toString()}
                        playandpause={handlePlayAndPause}
                        playing={playing}
                        rewind={handleRewind}
                        fastForward={handleFastForward}
                        muting={handleMuting}
                        muted={muted}
                        volumeChange={handleVolumeChange}
                        volumeSeek={handleVolumeSeek}
                        volume={volume}
                        playerbackRate={playerbackRate}
                        playRate={handlePlayerRate}
                        fullScreenMode={handleFullScreenMode}
                        played={played}
                        onSeek={handlePlayerSeek}
                        onSeekMouseUp={handlePlayerMouseSeekUp}
                        onSeekMouseDown={handlePlayerMouseSeekDown}
                        playedTime={playedTime}
                        fullMovieTime={fullMovieTime}
                        seeking={seeking}
                        nextLecture={nextLecture}
                        prevLecture={prevLecture}
                    />
                </div>
            </Container>
            <div className="py-3">
                <h1 className="font-extrabold text-xl lg:text-2xl lg:mb-10">{lectureDetails.title}</h1>
            </div>
        </div>
    );
};

export default LessonPlayer;
