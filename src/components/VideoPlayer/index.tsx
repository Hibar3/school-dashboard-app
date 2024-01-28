import React from "react";
import ReactPlayer from "react-player";



export const VideoPlayer = () => {

  // Only loads the YouTube player
  return (
    <div>
      <ReactPlayer
        width={250}
        height={250}
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
      />
    </div>
  );
};

export default VideoPlayer;
