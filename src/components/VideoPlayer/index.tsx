import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const VideoPlayer = (props: VideoProps) => {
  const { className, width, height, videoUrl } = props;

  // Only loads the YouTube player
  return (
    <div className={className}>
      <ReactPlayer
       width="100%"
       height="100%"
        url={videoUrl || "https://www.youtube.com/watch?v=LXb3EKWsInQ"}
      />
    </div>
  );
};

export default VideoPlayer;
