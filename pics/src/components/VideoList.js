import React from "react";
import VideoItem from "./Videoitem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} />;
  });

  return <div> {renderedList} </div>;
};

export default VideoList;
