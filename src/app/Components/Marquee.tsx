"use client";

import { useEffect, useRef } from "react";

export function MarqueeText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cloneContent = () => {
      const items = Array.from(container.children);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const totalWidth = items.reduce((acc, item) => acc + item.clientWidth, 0);

      while (container.scrollWidth < window.innerWidth * 2) {
        items.forEach((item) => {
          const clone = item.cloneNode(true) as HTMLDivElement;
          container.appendChild(clone);
        });
      }
    };

    cloneContent();

    let position = 0;
    const speed = 1;

    const animate = () => {
      position -= speed;
      container.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= container.scrollWidth / 2) {
        position = 0;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div ref={containerRef} className="flex whitespace-nowrap">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span className="text-white font-bold">Techotsav 2.0</span>
            <span className="mx-2 text-gray-500">&lt;/&gt;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
