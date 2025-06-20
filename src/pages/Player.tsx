import { MessageCircle } from "lucide-react";
import Header from "../components/Header";
import Video from "../components/Video";
import Module from "../components/Module";
import { useAppSelector } from "../store";
import { useCurrentLesson } from "../store/slices/player";
import { useEffect } from "react";

export default function Player() {
  const modules = useAppSelector((state) => state.player.course?.modules);

  const { currentLesson } = useCurrentLesson();

  useEffect(() => {
    document.title = `Ignite Lab | ${currentLesson?.title}`;
  }, [currentLesson]);

  return (
    <div
      className="
        h-screen
        flex
        items-center
        justify-center
        bg-zinc-950
        text-zinc-50
      "
    >
      <h1 className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-4 py-2 text-sm hover:bg-violet-600">
            <MessageCircle className="h-4 w-4" />
            Feedback
          </button>
        </div>
        <main className="pr-80 relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="divide-y-2 divide-zinc-900 w-80 border-l border-zinc-800 bg-zinc-900 absolute top-0 bottom-0 right-0 overflow-y-auto">
            {modules &&
              modules.map((module, index) => {
                return (
                  <Module
                    key={module.id}
                    moduleIndex={index}
                    title={module.title}
                    amountOfLessons={module.lessons.length}
                  />
                );
              })}
          </aside>
        </main>
      </h1>
    </div>
  );
}
