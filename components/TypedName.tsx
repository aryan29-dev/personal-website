"use client";
import { useEffect, useState, useRef } from "react";

export default function TypedName({ text = "Aryan Singh" }: { text?: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let interval: ReturnType<typeof setInterval>;

    const startTyping = () => {
      setDisplayed("");
      setDone(false);
      let i = 0;
      interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, 80);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTyping();
          } else {
            clearInterval(interval);
            setDisplayed("");
            setDone(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [text]);

  return (
    <span ref={ref}>
      {displayed}
      {!done && (
        <span className="inline-block w-0.75 h-[0.85em] bg-stone-900 dark:bg-white ml-1 align-middle animate-pulse" />
      )}
    </span>
  );
}
