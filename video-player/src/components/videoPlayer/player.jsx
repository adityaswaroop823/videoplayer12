import React, { useState } from "react";
import ReactPlayer from "react-player";
import { videos } from "./video.js";
import "./player.css";
const Player = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // State and video array definition here

    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"12px"}}>
            <h1 >Video Player</h1>
            <ReactPlayer width="100%" url={videos[currentVideoIndex].url} controls={true} />
            <div className="thumbnail-circles">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentVideoIndex(index)}
                        className={index === currentVideoIndex ? "active" : ""}
                    >
                        <img height={50} width={50} style={{ borderRadius: "50%" }} src={video.thumbnail} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Player;
