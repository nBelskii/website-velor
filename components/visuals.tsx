export function AnimatedBackground() {
  return <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,.16),transparent_30%)]"/><div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.15)_1px,transparent_1px)] [background-size:42px_42px]"/><div className="noise absolute inset-0 opacity-20"/></div>;
}

export function AbstractOrbit() {
  return <div aria-hidden className="relative h-52 w-52"><div className="absolute inset-0 rounded-full border border-emerald-500/30 orbit"/><div className="absolute inset-8 rounded-full border border-cyan-400/30 orbit-reverse"/><svg className="absolute -left-3 top-12 h-6 w-6 fill-emerald-400" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg><svg className="absolute bottom-2 right-0 h-6 w-6 fill-cyan-400" viewBox="0 0 24 24"><rect width="24" height="24" rx="6"/></svg></div>;
}

export function HeroMockup() {
  return <div className="gradient-border rounded-2xl p-[1px]"><div className="rounded-2xl bg-brand-darkCard p-5"><div className="mb-4 flex items-center justify-between"><div className="h-3 w-20 rounded bg-slate-700"/><div className="h-3 w-12 rounded bg-emerald-500/60"/></div><div className="grid gap-4 sm:grid-cols-2"><div className="space-y-3 rounded-xl border border-slate-800 p-4"><div className="h-2 w-14 rounded bg-slate-700"/><div className="h-8 rounded bg-emerald-500/20"/><div className="h-2 w-10 rounded bg-slate-700"/></div><div className="space-y-3 rounded-xl border border-slate-800 p-4"><div className="h-2 w-14 rounded bg-slate-700"/><div className="h-8 rounded bg-cyan-400/20"/><div className="h-2 w-10 rounded bg-slate-700"/></div></div><div className="mt-4 h-20 rounded-xl border border-slate-800 p-3"><div className="h-full rounded bg-[linear-gradient(90deg,rgba(16,185,129,.35),rgba(56,189,248,.35))]"/></div></div></div>;
}

export function MetricCards(){const m=[['98%','Workflow visibility'],['3.4x','Faster operations'],['42%','Less manual admin']];return <div className="grid gap-4 sm:grid-cols-3">{m.map(([v,l])=><article key={l} className="gradient-border rounded-xl p-[1px] reveal"><div className="rounded-xl bg-white/80 p-4 text-center dark:bg-brand-darkCard"><p className="text-2xl font-bold text-emerald-500 counter">{v}</p><p className="mt-1 text-xs uppercase tracking-wider text-slate-500">{l}</p></div></article>)}</div>}

export function ProductVisual({ type }: { type: 'hydro'|'crm'|'dropship' }) {
  const color = type === 'hydro' ? 'from-emerald-500/35 to-cyan-400/35' : type === 'crm' ? 'from-teal-500/35 to-emerald-400/35' : 'from-cyan-500/35 to-indigo-400/35';
  return <div className="h-36 rounded-xl border border-slate-200/70 p-3 dark:border-slate-800"><div className={`h-full rounded-lg bg-gradient-to-br ${color}`}/></div>;
}

export function ServiceIcon({ kind }: { kind: string }) { return <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-500">{kind.slice(0,1)}</span>; }
