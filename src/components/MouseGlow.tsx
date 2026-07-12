import { useEffect } from "react";

export function MouseGlow() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const root = document.documentElement;
    let raf = 0;
    let latest = { x: 0, y: 0 };

    const update = () => {
      root.style.setProperty("--mx", `${latest.x}px`);
      root.style.setProperty("--my", `${latest.y}px`);
      document.querySelectorAll<HTMLElement>(".glow-surface").forEach((el) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--lx", `${latest.x - rect.left}px`);
        el.style.setProperty("--ly", `${latest.y - rect.top}px`);
      });
      raf = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      latest = { x: e.clientX, y: e.clientY };
      root.classList.add("mouse-glow-active");
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0" aria-hidden="true">
      <div className="dot-grid-base" />
      <div className="dot-grid-accent" />
    </div>
  );
}
