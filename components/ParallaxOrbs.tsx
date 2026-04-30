'use client';

import { useEffect, useState } from 'react';

export function ParallaxOrbs() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[8%] top-28 h-44 w-44 rounded-full bg-emerald-400/15 blur-3xl" style={{ transform: `translateY(${y * 0.12}px)` }} />
      <div className="absolute right-[10%] top-[38rem] h-56 w-56 rounded-full bg-teal-400/15 blur-3xl" style={{ transform: `translateY(${y * -0.08}px)` }} />
    </div>
  );
}
