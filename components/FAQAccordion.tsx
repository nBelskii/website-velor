const faqs = [
  ['What timeline should we expect?', 'Most projects ship an initial release in 6 to 14 weeks depending on integrations and workflow complexity.'],
  ['How does pricing work?', 'We scope by outcome and complexity, then provide phased options with clear deliverables.'],
  ['Can you build fully custom apps?', 'Yes. We design and build tailored systems around your operations, team workflows, and data needs.'],
  ['Do you provide post-launch support?', 'Yes. We offer maintenance, iteration sprints, monitoring, and roadmap support.'],
  ['Who handles hosting and deployment?', 'Velora can manage deployment or collaborate with your existing infrastructure team on Vercel/cloud setup.'],
  ['Who owns the code and product IP?', 'You own your product code and intellectual property under the service agreement.']
];

export function FAQAccordion() {
  return <div className="space-y-3">{faqs.map(([q,a]) => <details key={q} className="card"><summary className="cursor-pointer font-medium">{q}</summary><p className="mt-3 text-slate-600 dark:text-slate-300">{a}</p></details>)}</div>;
}
