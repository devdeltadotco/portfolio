import { cn } from "@/lib/cn";

type EmojiSwapProps = {
  className?: string;
  from: string;
  to?: string;
};

export function EmojiSwap({ className, from, to = from }: EmojiSwapProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-grid h-[1.25em] min-w-[1.25em] shrink-0 place-items-center overflow-hidden align-middle leading-none",
        className,
      )}
    >
      <span className="col-start-1 row-start-1 translate-y-0 scale-100 opacity-100 transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover/button:-translate-y-[115%] group-hover/button:scale-90 group-hover/button:opacity-0 group-focus-visible/button:-translate-y-[115%] group-focus-visible/button:scale-90 group-focus-visible/button:opacity-0">
        {from}
      </span>
      <span className="col-start-1 row-start-1 translate-y-[115%] scale-90 opacity-0 transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover/button:translate-y-0 group-hover/button:scale-100 group-hover/button:opacity-100 group-focus-visible/button:translate-y-0 group-focus-visible/button:scale-100 group-focus-visible/button:opacity-100">
        {to}
      </span>
    </span>
  );
}
