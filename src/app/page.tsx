import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <Tooltip delayDuration={200}>
        <TooltipTrigger>
          <h1 className="text-2xl font-bold">⏳</h1>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">Coming Soon!</p>
        </TooltipContent>
      </Tooltip>
    </main>
  );
}
