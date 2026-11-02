"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  end,
  decimals = 0,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState<string>(
    decimals > 0 ? (0).toFixed(decimals) : "0"
  );
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const startTime = performance.now();
          const startValue = 0;

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic for smooth luxury deceleration
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const current = startValue + (end - startValue) * easeOutProgress;

            if (decimals > 0) {
              setDisplayValue(current.toFixed(decimals));
            } else {
              setDisplayValue(Math.floor(current).toLocaleString("en-IN"));
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              if (decimals > 0) {
                setDisplayValue(end.toFixed(decimals));
              } else {
                setDisplayValue(end.toLocaleString("en-IN"));
              }
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [end, decimals, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

