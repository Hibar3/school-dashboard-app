import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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
