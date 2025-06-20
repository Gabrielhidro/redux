import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { next, useCurrentLesson } from "../store/slices/player";

export default function Video() {
  const dispatch = useDispatch();
  const { currentLesson } = useCurrentLesson();

  function handlePlayMext() {
    dispatch(next());
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        onEnded={handlePlayMext}
        url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
      />
    </div>
  );
}
