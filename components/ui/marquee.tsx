import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number; // Default repeat count for large screens
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const [repeatCount, setRepeatCount] = useState(repeat);

  // Dynamically reduce repeats on smaller screens
  useEffect(() => {
    const updateRepeat = () => {
      const width = window.innerWidth;
      if (width < 640) setRepeatCount(2); // mobile
      else if (width < 1024) setRepeatCount(3); // tablet
      else setRepeatCount(repeat); // desktop
    };
    updateRepeat();
    window.addEventListener("resize", updateRepeat);
    return () => window.removeEventListener("resize", updateRepeat);
  }, [repeat]);

  return (
    <div
      {...props}
      className={cn(
        "group flex w-full overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeatCount)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex justify-around [gap:var(--gap)] min-w-0 flex-shrink-0",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
