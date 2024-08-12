import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const TailwindIndicator = () => {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="fixed bottom-5 right-5 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white hover:cursor-pointer">
            <div className="block sm:hidden">xs</div>
            <div className="hidden sm:block md:hidden">sm</div>
            <div className="hidden md:block lg:hidden">md</div>
            <div className="hidden lg:block xl:hidden">lg</div>
            <div className="hidden xl:block 2xl:hidden">xl</div>
            <div className="hidden 2xl:block">2xl</div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>TailwindCSS MediaQuery indicator</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
