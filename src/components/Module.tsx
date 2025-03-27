import { ChevronDown } from "lucide-react";
import Lesson from "./Lesson";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}
export default function Module({
  title,
  amountOfLessons,
  moduleIndex,
}: ModuleProps) {
  return (
    <div className="">
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons}</span>
        </div>

        <ChevronDown className="w-4 h-4 ml-auto text-zinc-400" />
      </button>

      <nav className="relative flex flex-col gap-4 p-6">
        <Lesson duration="09:03" title="Fundamentos redux" />
        <Lesson duration="09:03" title="Fundamentos redux" />
        <Lesson duration="09:03" title="Fundamentos redux" />
      </nav>
    </div>
  );
}
