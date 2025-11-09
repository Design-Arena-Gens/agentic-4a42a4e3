export default function HomePage() {
  const capabilities = [
    { title: 'Code Generation', desc: 'Create features, components, and services end-to-end with tests.' },
    { title: 'Refactoring', desc: 'Improve readability, modularity, and performance without changing behavior.' },
    { title: 'Bug Diagnosis', desc: 'Trace issues to root causes with targeted, minimal fixes.' },
    { title: 'API Design', desc: 'Define REST/GraphQL contracts with schemas and validation.' },
    { title: 'Data & SQL', desc: 'Design schemas, optimize queries, and write safe migrations.' },
    { title: 'DevOps', desc: 'CI, containerization, infra-as-code, and observability basics.' },
    { title: 'Docs', desc: 'Concise READMEs, ADRs, and code comments that matter.' },
    { title: 'UX Polish', desc: 'Accessible UI, microcopy, and micro-interactions that delight.' }
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="logo">Agentic Assistant</div>
        <div className="badge">Powered by Next.js</div>
      </header>

      <section className="hero">
        <h1 className="title">I build, fix, and ship software with you.</h1>
        <p className="subtitle">
          From blank repo to production, I plan tasks, write high-quality code, run builds, and deploy.
          Ask for a feature, and I will deliver a working implementation.
        </p>
      </section>

      <section>
        <div className="grid">
          {capabilities.map((c) => (
            <article key={c.title} className="card">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>

        <div className="actions">
          <a className="button" href="/api/ping">Try API: /api/ping</a>
          <a className="button secondary" href="https://vercel.com" target="_blank" rel="noreferrer">Deploy-Ready</a>
        </div>
      </section>

      <footer className="footer">? {new Date().getFullYear()} Agentic Assistant</footer>
    </div>
  );
}
