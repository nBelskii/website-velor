export function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl float-anim" />
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl float-anim" />
      <div className="absolute left-0 top-1/2 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl float-anim" />
      <svg className="absolute inset-0 h-full w-full opacity-25 dark:opacity-20" viewBox="0 0 1200 800" fill="none" role="img" aria-label="Abstract curved gradient graphic">
        <path d="M-30 300C200 100 400 580 680 380C920 210 1070 260 1240 180" stroke="url(#grad1)" strokeWidth="2"/>
        <path d="M-20 520C220 420 370 760 650 640C940 530 1010 620 1230 520" stroke="url(#grad2)" strokeWidth="2"/>
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1200" y2="0"><stop stopColor="#10B981"/><stop offset="1" stopColor="#14B8A6"/></linearGradient>
          <linearGradient id="grad2" x1="0" y1="0" x2="1200" y2="0"><stop stopColor="#14B8A6"/><stop offset="1" stopColor="#10B981"/></linearGradient>
        </defs>
      </svg>
    </div>
  );
}
