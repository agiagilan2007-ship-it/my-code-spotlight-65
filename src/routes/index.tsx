import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import nptelPdf from "@/assets/NPTEL-Data_Analytics_with_Python_Certificate_AGILAN_V_MU.pdf.asset.json";
import pythonFoundationPdf from "@/assets/Python_Foundation_Certification_-_AGILAN_V_MU.pdf.asset.json";
import gcpMlPdf from "@/assets/Google_Cloud_Machine_Learning_Engineer_Certification_Prep_-_Agilan_V_MU.pdf.asset.json";
import genaiPdf from "@/assets/Generative_AI_Foundations_-_IT_Integration_with_Generative_AI_-_Agilan_V_MU.pdf.asset.json";
import canvaPdf from "@/assets/Coursera_-_Build_your_buisness_brand_using_Canva-_Agilan_V_MU.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agilan V MU — Data Analytics & Python Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Agilan V MU — data analytics, Python, ML projects (spam filter, stock prediction, fake news detection), certifications and skills.",
      },
      { property: "og:title", content: "Agilan V MU — Data Analytics & Python Portfolio" },
      {
        property: "og:description",
        content:
          "Data analytics and Python portfolio with real GitHub ML projects and LinkedIn certifications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const LINKEDIN_URL =
  "https://www.linkedin.com/in/agilan-v-mu-b0a367328";
const GITHUB_URL = "https://github.com/agiagilan2007-ship-it";

const PROJECTS = [
  {
    title: "Spam Filter ML",
    description:
      "Machine Learning project for spam email and message filtering. Uses classical NLP preprocessing and supervised classification to distinguish spam from legitimate messages.",
    tags: ["Python", "Scikit-learn", "NLP", "Pandas"],
    github: "https://github.com/agiagilan2007-ship-it/spam-filter-ml",
  },
  {
    title: "Stock Price Prediction",
    description:
      "Stock price prediction using TensorFlow and Long Short-Term Memory (LSTM) recurrent neural networks — applied to time-series financial data for forecasting.",
    tags: ["Python", "TensorFlow", "LSTM", "RNN"],
    github: "https://github.com/agiagilan2007-ship-it/stock-price-prediction",
  },
  {
    title: "Fake News Detection",
    description:
      "A project for detecting and classifying fake news using machine learning — combines text vectorization and classification models to flag misleading articles.",
    tags: ["Python", "NLP", "ML", "Scikit-learn"],
    github: "https://github.com/agiagilan2007-ship-it/fake-news-detection",
  },
];

const CERTIFICATES = [
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL · IIT Roorkee",
    accent: "#F2B807",
    pdf: nptelPdf.url,
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    accent: "#2DD4BF",
    pdf: pythonFoundationPdf.url,
  },
  {
    title: "Google Cloud ML Engineer Certification Prep",
    issuer: "Google Cloud",
    accent: "#F2B807",
    pdf: gcpMlPdf.url,
  },
  {
    title: "Generative AI Foundations — IT Integration with GenAI",
    issuer: "Infosys Springboard",
    accent: "#2DD4BF",
    pdf: genaiPdf.url,
  },
  {
    title: "Build Your Business Brand Using Canva",
    issuer: "Coursera",
    accent: "#F2B807",
    pdf: canvaPdf.url,
  },
];

const SKILL_GROUPS = [
  { label: "Languages", skills: ["Python", "HTML", "CSS", "Scratch"] },
  {
    label: "Libraries & Frameworks",
    skills: ["NumPy", "Pandas", "Matplotlib", "NLTK", "TensorFlow", "Scikit-learn"],
  },
  {
    label: "Tools",
    skills: ["VS Code", "Jupyter Notebook", "Google Colab", "Git", "GitHub"],
  },
  {
    label: "Concepts",
    skills: [
      "Data Analytics",
      "Exploratory Data Analysis",
      "Machine Learning",
      "NLP",
      "Algorithm Design",
      "OOP",
    ],
  },
];

const ACHIEVEMENTS = [
  "Coordinated a machine learning event, XENZO Pattern Break, at Jeppiaar Engineering College (CSE Block)",
  "Scored 29/25 on the NPTEL proctored exam assignment (IIT Roorkee) and 63% consolidated overall",
  "Earned 5 certifications from Infosys Springboard and NPTEL within 12 months",
  "Presented at 2+ school-level science and technology exhibitions",
  "Maintaining a CGPA of 8.5/10",
];

const TERMINAL_LINES = [
  ">>> import pandas as pd",
  ">>> df = pd.read_csv('projects.csv')",
  ">>> df.shape",
  "(3, 4)",
  ">>> df['stack'].unique()",
  "['Python', 'TensorFlow', 'NLP']",
  ">>> print('let\\'s build.')",
  "let's build.",
];

function Portfolio() {
  const [typed, setTyped] = useState<string[]>([]);
  const [lightbox, setLightbox] = useState<null | (typeof CERTIFICATES)[number]>(null);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped((prev) => {
        if (i >= TERMINAL_LINES.length) {
          clearInterval(id);
          return prev;
        }
        const next = [...prev, TERMINAL_LINES[i]];
        i++;
        return next;
      });
    }, 550);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="portfolio">
      <style>{CSS}</style>
      <div className="grid-bg" aria-hidden />

      <header className="site-header">
        <nav className="nav container">
          <a className="nav-brand" href="#top">
            <span className="mono accent">&gt;_</span> Agilan
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div>
            <p className="eyebrow mono">// portfolio.init()</p>
            <h1>
              Hi, I'm <span className="accent">Agilan</span>
            </h1>
            <p className="hero-role mono">Data Analytics &amp; Python</p>
            <p className="hero-tagline">
              School student building data analytics and ML skills through certifications
              and hands-on projects — NumPy, Pandas, Matplotlib, TensorFlow.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">View Projects</a>
              <a className="btn btn-ghost" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>
          <div className="hero-terminal" aria-hidden>
            <div className="terminal-bar">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="terminal-title mono">analysis.py</span>
            </div>
            <pre className="terminal-body mono">
              {typed.join("\n")}
              <span className="cursor" />
            </pre>
          </div>
        </section>

        <section className="section container" id="about">
          <h2 className="section-title">About</h2>
          <p className="about-bio">
            I'm a school student with 5 completed certifications in Python and data analytics,
            including a 12-week NPTEL program from IIT Roorkee (63% consolidated, 29/25 on the
            proctored assignment). I build ML projects in Python — spam filtering, stock price
            prediction with LSTM, and fake news detection — and I'm currently maintaining a
            CGPA of 8.5/10 at Sree Iyappa Matriculation Higher Secondary School, Tamil Nadu.
          </p>
        </section>

        <section className="section container" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skill-groups">
            {SKILL_GROUPS.map((g) => (
              <div key={g.label}>
                <div className="skill-group-label">{g.label}</div>
                <div className="skill-chips">
                  {g.skills.map((s) => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section container" id="projects">
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">Live GitHub repositories · github.com/agiagilan2007-ship-it</p>
          <div className="project-grid">
            {PROJECTS.map((p) => (
              <article key={p.title} className="project-card">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="certificates">
          <div className="container">
            <h2 className="section-title">Certificates</h2>
            <p className="section-sub">
              Course completion certificates from my{" "}
              <a className="link-accent" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                LinkedIn profile
              </a>{" "}· click a card to view details
            </p>
          </div>
          <div className="carousel-wrap">
            <div className="carousel-track">
              {[...CERTIFICATES, ...CERTIFICATES].map((c, i) => (
                <button
                  key={i}
                  className="cert-card"
                  onClick={() => setLightbox(c)}
                  aria-label={`View ${c.title}`}
                >
                  <CertPlate title={c.title} issuer={c.issuer} accent={c.accent} />
                  <div className="cert-card-body">
                    <p className="cert-card-title">{c.title}</p>
                    <p className="cert-card-issuer">{c.issuer}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="achievements">
          <h2 className="section-title">Achievements</h2>
          <ul className="achievement-list">
            {ACHIEVEMENTS.map((a) => (
              <li key={a} className="achievement-item">
                <span className="achievement-marker mono">▹</span>
                <span className="achievement-text">{a}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section container" id="contact">
          <h2 className="section-title"><span className="mono index">06</span> Contact</h2>
          <p className="section-sub">Open to internships, collaborations, and learning opportunities.</p>
          <div className="contact-row">
            <a className="btn btn-primary" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="mono">© {new Date().getFullYear()} Agilan V MU · Built with React &amp; TanStack</p>
      </footer>

      {lightbox && (
        <div className="lightbox open" role="dialog" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" aria-label="Close">×</button>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <CertPlate title={lightbox.title} issuer={lightbox.issuer} accent={lightbox.accent} large />
            <p className="lightbox-note mono">
              View original credential on{" "}
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="link-accent">
                LinkedIn ↗
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function CertPlate({
  title,
  issuer,
  accent,
  large,
}: {
  title: string;
  issuer: string;
  accent: string;
  large?: boolean;
}) {
  const w = large ? 640 : 480;
  const h = large ? 440 : 340;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={large ? 440 : 160} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`bg-${accent}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#131826" />
          <stop offset="100%" stopColor="#0B0F19" />
        </linearGradient>
      </defs>
      <rect width={w} height={h} rx="14" fill={`url(#bg-${accent})`} stroke="#232B3D" strokeWidth="2" />
      <rect x="16" y="16" width={w - 32} height={h - 32} rx="8" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
      <text x={w / 2} y={h * 0.2} textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="13" fill={accent} letterSpacing="3">
        CERTIFICATE OF COMPLETION
      </text>
      <line x1={w / 2 - 70} y1={h * 0.24} x2={w / 2 + 70} y2={h * 0.24} stroke={accent} strokeWidth="2" />
      <foreignObject x="40" y={h * 0.32} width={w - 80} height={h * 0.3}>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: large ? "30px" : "22px",
            fontWeight: 700,
            color: "#E7E9EE",
            textAlign: "center",
            lineHeight: 1.25,
          }}
        >
          {title}
        </div>
      </foreignObject>
      <text x={w / 2} y={h * 0.68} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="15" fill="#8B93A7">
        {issuer}
      </text>
      <circle cx={w / 2} cy={h * 0.82} r="24" fill="none" stroke={accent} strokeWidth="2" />
      <path d={`M${w / 2 - 11} ${h * 0.82} l7 7 l15 -16`} fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CSS = `
.portfolio {
  --bg:#0B0F19; --surface:#131826; --surface-2:#171E2E; --border:#232B3D;
  --text:#E7E9EE; --muted:#8B93A7; --muted-2:#5A6376;
  --amber:#F2B807; --teal:#2DD4BF;
  --font-display:'Space Grotesk',ui-sans-serif,sans-serif;
  --font-body:'Inter',ui-sans-serif,sans-serif;
  --font-mono:'JetBrains Mono',ui-monospace,monospace;
  background:var(--bg); color:var(--text); font-family:var(--font-body);
  min-height:100vh; line-height:1.6; position:relative;
}
.portfolio * { box-sizing:border-box; }
.portfolio a { color:inherit; text-decoration:none; }
.portfolio ul { list-style:none; margin:0; padding:0; }
.portfolio .container { max-width:1080px; margin:0 auto; padding:0 24px; }
.portfolio .mono { font-family:var(--font-mono); }
.portfolio .accent { color:var(--amber); }
.portfolio .link-accent { color:var(--teal); border-bottom:1px solid var(--teal); }
.portfolio .grid-bg {
  position:fixed; inset:0; z-index:0; pointer-events:none;
  background-image:linear-gradient(#232B3D 1px,transparent 1px),linear-gradient(90deg,#232B3D 1px,transparent 1px);
  background-size:40px 40px; opacity:0.25;
  mask-image:radial-gradient(ellipse at top,black 0%,transparent 70%);
}
.portfolio > *:not(.grid-bg) { position:relative; z-index:1; }
.portfolio .site-header {
  position:sticky; top:0; z-index:50;
  background:rgba(11,15,25,0.85); backdrop-filter:blur(8px);
  border-bottom:1px solid var(--border);
}
.portfolio .nav { display:flex; align-items:center; gap:24px; padding:16px 24px; }
.portfolio .nav-brand { font-family:var(--font-display); font-weight:700; font-size:1.1rem; margin-right:auto; }
.portfolio .nav-links { display:flex; gap:28px; font-size:0.92rem; color:var(--muted); }
.portfolio .nav-links a:hover { color:var(--text); }
.portfolio .btn {
  display:inline-flex; align-items:center; justify-content:center;
  padding:12px 22px; border-radius:6px; font-family:var(--font-mono);
  font-size:0.9rem; font-weight:500; border:1px solid transparent;
  transition:transform 0.15s ease,background 0.2s,border-color 0.2s; cursor:pointer;
}
.portfolio .btn:hover { transform:translateY(-1px); }
.portfolio .btn-primary { background:var(--amber); color:#0B0F19; }
.portfolio .btn-primary:hover { background:#ffc72e; }
.portfolio .btn-ghost { background:transparent; color:var(--text); border-color:var(--border); }
.portfolio .btn-ghost:hover { border-color:var(--teal); color:var(--teal); }
.portfolio .hero {
  display:grid; grid-template-columns:1.1fr 1fr; gap:48px; align-items:center;
  padding:88px 24px 96px; min-height:78vh;
}
.portfolio .eyebrow { color:var(--teal); font-size:0.85rem; letter-spacing:0.08em; margin-bottom:14px; }
.portfolio .hero h1 { font-family:var(--font-display); font-size:clamp(2.4rem,5vw,3.6rem); font-weight:700; line-height:1.1; margin:0 0 10px; }
.portfolio .hero-role { color:var(--muted); font-size:1.05rem; margin:0 0 20px; }
.portfolio .hero-tagline { color:var(--muted); font-size:1.05rem; max-width:46ch; margin:0 0 32px; }
.portfolio .hero-actions { display:flex; gap:14px; flex-wrap:wrap; }
.portfolio .hero-terminal {
  background:var(--surface); border:1px solid var(--border); border-radius:10px; overflow:hidden;
  box-shadow:0 20px 60px -20px rgba(0,0,0,0.6);
}
.portfolio .terminal-bar { display:flex; align-items:center; gap:8px; padding:10px 14px; background:var(--surface-2); border-bottom:1px solid var(--border); }
.portfolio .dot { width:10px; height:10px; border-radius:50%; }
.portfolio .dot.red { background:#FF5F56; } .portfolio .dot.yellow { background:#FFBD2E; } .portfolio .dot.green { background:#27C93F; }
.portfolio .terminal-title { margin-left:8px; color:var(--muted); font-size:0.78rem; }
.portfolio .terminal-body { margin:0; padding:20px; min-height:260px; font-size:0.86rem; color:var(--teal); white-space:pre-wrap; word-break:break-word; }
.portfolio .cursor { display:inline-block; width:8px; height:1em; background:var(--amber); vertical-align:text-bottom; animation:blink 1s steps(1) infinite; margin-left:2px; }
@keyframes blink { 50% { opacity:0; } }
.portfolio .section { padding:80px 0; border-top:1px solid var(--border); }
.portfolio .section-title { font-family:var(--font-display); font-size:1.9rem; font-weight:700; display:flex; align-items:baseline; gap:14px; margin:0 0 8px; }
.portfolio .section-title .index { color:var(--muted-2); font-size:1rem; }
.portfolio .section-sub { color:var(--muted); margin:0 0 36px; font-size:0.95rem; }
.portfolio .about-bio { max-width:70ch; color:var(--muted); font-size:1.05rem; margin-top:24px; }
.portfolio .skill-groups { margin-top:28px; display:grid; gap:28px; }
.portfolio .skill-group-label { font-family:var(--font-mono); font-size:0.8rem; color:var(--muted-2); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:12px; }
.portfolio .skill-chips { display:flex; flex-wrap:wrap; gap:10px; }
.portfolio .skill-chip { padding:8px 14px; border:1px solid var(--border); border-radius:999px; background:var(--surface); font-size:0.86rem; font-family:var(--font-mono); transition:border-color 0.2s,color 0.2s; }
.portfolio .skill-chip:hover { border-color:var(--amber); color:var(--amber); }
.portfolio .project-grid { margin-top:28px; display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:24px; }
.portfolio .project-card { background:var(--surface); border:1px solid var(--border); border-radius:10px; padding:24px; display:flex; flex-direction:column; transition:border-color 0.2s,transform 0.2s; }
.portfolio .project-card:hover { border-color:var(--teal); transform:translateY(-3px); }
.portfolio .project-title { font-family:var(--font-display); font-weight:600; font-size:1.15rem; margin:0 0 10px; }
.portfolio .project-desc { color:var(--muted); font-size:0.92rem; flex-grow:1; margin-bottom:18px; }
.portfolio .project-tags { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:18px; }
.portfolio .project-tag { font-family:var(--font-mono); font-size:0.72rem; color:var(--teal); background:rgba(45,212,191,0.08); border:1px solid rgba(45,212,191,0.3); padding:3px 9px; border-radius:4px; }
.portfolio .project-links a { font-family:var(--font-mono); font-size:0.82rem; color:var(--amber); border-bottom:1px solid transparent; }
.portfolio .project-links a:hover { border-color:var(--amber); }
.portfolio .carousel-wrap { overflow:hidden; position:relative; padding:8px 0; -webkit-mask-image:linear-gradient(to right,transparent,black 6%,black 94%,transparent); mask-image:linear-gradient(to right,transparent,black 6%,black 94%,transparent); }
.portfolio .carousel-track { display:flex; gap:24px; width:max-content; animation:marquee 40s linear infinite; padding:0 24px; }
.portfolio .carousel-wrap:hover .carousel-track { animation-play-state:paused; }
@keyframes marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
.portfolio .cert-card { flex:0 0 auto; width:260px; background:var(--surface); border:1px solid var(--border); border-radius:10px; overflow:hidden; cursor:pointer; transition:border-color 0.2s,transform 0.2s; padding:0; text-align:left; color:inherit; font:inherit; }
.portfolio .cert-card:hover { border-color:var(--amber); transform:translateY(-3px); }
.portfolio .cert-card-body { padding:14px 16px; }
.portfolio .cert-card-title { font-family:var(--font-display); font-weight:600; font-size:0.95rem; margin:0 0 4px; }
.portfolio .cert-card-issuer { color:var(--muted); font-size:0.8rem; margin:0; }
.portfolio .achievement-list { margin-top:28px; display:flex; flex-direction:column; }
.portfolio .achievement-item { display:flex; gap:14px; align-items:flex-start; padding:16px 0; border-bottom:1px solid var(--border); }
.portfolio .achievement-item:last-child { border-bottom:none; }
.portfolio .achievement-marker { color:var(--amber); flex-shrink:0; }
.portfolio .contact-row { display:flex; gap:14px; flex-wrap:wrap; margin-top:24px; }
.portfolio .site-footer { border-top:1px solid var(--border); padding:28px 0; text-align:center; color:var(--muted-2); font-size:0.8rem; }
.portfolio .lightbox { position:fixed; inset:0; background:rgba(11,15,25,0.92); display:flex; align-items:center; justify-content:center; z-index:100; padding:40px; }
.portfolio .lightbox-inner { max-width:min(90vw,720px); }
.portfolio .lightbox-close { position:absolute; top:24px; right:32px; background:none; border:none; color:var(--text); font-size:2rem; cursor:pointer; line-height:1; }
.portfolio .lightbox-note { text-align:center; color:var(--muted); margin-top:16px; font-size:0.85rem; }
@media (max-width:860px) {
  .portfolio .hero { grid-template-columns:1fr; padding-top:48px; }
  .portfolio .nav-links { display:none; }
}
`;
