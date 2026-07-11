import { useEffect, useRef, useState } from "react";

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
const lerp = (from: number, to: number, factor: number) => from + (to - from) * factor;

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const hoveringRef = useRef(false);
  const [visible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: fine)").matches;
  });

  useEffect(() => {
    hoveringRef.current = hovering;
  }, [hovering]);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dotPos = { ...pos };
    const ringPos = { ...pos };
    const prevRingPos = { ...pos };
    let dotScale = 1;
    let ringHoverScale = 1;

    const handleMouseMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-magnetic]"));
    };

    let raf: number;
    const animate = () => {
      dotPos.x = lerp(dotPos.x, pos.x, 0.35);
      dotPos.y = lerp(dotPos.y, pos.y, 0.35);

      prevRingPos.x = ringPos.x;
      prevRingPos.y = ringPos.y;
      ringPos.x = lerp(ringPos.x, pos.x, 0.12);
      ringPos.y = lerp(ringPos.y, pos.y, 0.12);

      const vx = ringPos.x - prevRingPos.x;
      const vy = ringPos.y - prevRingPos.y;
      const speed = clamp(Math.hypot(vx, vy), 0, 40);
      const angle = speed > 0.5 ? (Math.atan2(vy, vx) * 180) / Math.PI : 0;
      const stretch = 1 + (speed / 40) * 0.35;
      const squeeze = 1 - (speed / 40) * 0.2;

      dotScale = lerp(dotScale, hoveringRef.current ? 0 : 1, 0.25);
      ringHoverScale = lerp(ringHoverScale, hoveringRef.current ? 1.6 : 1, 0.2);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.x - 4}px, ${dotPos.y - 4}px) scale(${dotScale})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.x - 20}px, ${ringPos.y - 20}px) rotate(${angle}deg) scale(${stretch * ringHoverScale}, ${squeeze * ringHoverScale})`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-primary"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9998] h-10 w-10 rounded-full border-2 transition-[background-color,border-color,box-shadow] duration-300 ${
          hovering
            ? "border-primary bg-primary/20 shadow-[0_0_25px_6px_hsl(var(--primary)/0.5)]"
            : "border-primary/40 shadow-[0_0_15px_2px_hsl(var(--primary)/0.25)]"
        }`}
        style={{ willChange: "transform" }}
        aria-hidden="true"
      />
    </>
  );
}
