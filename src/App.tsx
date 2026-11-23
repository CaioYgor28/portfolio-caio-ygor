import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { useEffect } from "react";

const projects = [
  {
    number: "01",
    type: "FULL-STACK PLATFORM · ARCHIVED CASE STUDY",
    title: "Caio & Luana",
    subtitle: "A wedding platform built for a real event.",
    description:
      "Designed and delivered an end-to-end experience for guests, including RSVP management, a gift registry, payments, and an administrative dashboard. The public website was decommissioned after the event.",
    insights:
      "Engineering focus: third-party API integrations, secure administrative access, operational auditing, and balancing free service tiers with paid hosting and domain costs. No personal guest or payment data is publicly shared.",
    stack: ["React", "TypeScript", "Hono", "Supabase", "Mercado Pago", "Resend", "Tailscale", "AWS"],
    status: "ARCHIVED AFTER THE EVENT",
  },
  {
    number: "02",
    type: "FULL-STACK PROOF OF CONCEPT",
    title: "Igreja VEM",
    subtitle: "A platform for community and organizational management.",
    description:
      "Built a proof of concept covering members, groups, departments, events, content, and volunteer coordination, with public and authenticated areas and role-based access control.",
    stack: ["React", "TypeScript", "Django", "PostgreSQL", "Docker", "AWS"],
    status: "PROOF OF CONCEPT",
  },
  {
    number: "03",
    type: "RETAIL PLATFORM · MOBILE · WEB · API",
    title: "RetailOps",
    subtitle: "Connecting field operations to management systems.",
    description:
      "Co-developed a three-part retail platform: an Android app with barcode scanning and offline operation, a React management interface, and a Go API for catalog data, authentication, device pairing, and integrations.",
    stack: ["Go", "PostgreSQL", "React", "TypeScript", "React Native", "Expo", "SQLite", "Docker", "AWS"],
    credit: "Co-developed with Andrew Benvenuto. Repository links are omitted until public access is confirmed.",
    status: "PROJECT OVERVIEW",
  },
];

const technologies = [
  { number: "01", title: "Backend", items: "Python · Go · Django · REST APIs · SQL" },
  { number: "02", title: "Automation", items: "RPA · Selenium · Requests · System integrations" },
  { number: "03", title: "Frontend", items: "React · TypeScript · JavaScript · HTML · CSS" },
  { number: "04", title: "Delivery", items: "Docker · AWS · Nginx · Git · CI/CD" },
];

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a className={`external-link ${className}`} href={href} target="_blank" rel="noreferrer">
      {children}<ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.7} />
    </a>
  );
}

export default function Home() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Caio Ygor — home">CY<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">ABOUT</a><a href="#projects">PROJECTS</a><a href="#experience">EXPERIENCE</a><a href="#contact">CONTACT</a>
        </nav>
        <span className="header-place">RECIFE · BR</span>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow-row">
            <span className="eyebrow">CAIO YGOR · SOFTWARE DEVELOPER</span>
            <span className="status-dot">OPEN TO INTERNATIONAL OPPORTUNITIES</span>
          </div>
          <h1>I BUILD<br />SOFTWARE,<br />SYSTEMS &<br /><span>PRODUCTS.</span></h1>
          <div className="hero-bottom">
            <p>Turning manual processes into dependable software, from backend services to the user experience.</p>
            <a href="#about" className="explore-link">EXPLORE <ArrowDown aria-hidden="true" size={17} /></a>
          </div>
        </div>
      </section>

      <section className="about section-light" id="about">
        <div className="section-kicker" data-reveal><span>01</span><p>ABOUT</p></div>
        <div className="about-statement" data-reveal>
          <p className="statement-main">I BUILD SOFTWARE THAT CONNECTS SYSTEMS, REDUCES MANUAL WORK, AND MAKES OPERATIONS <span>MORE RELIABLE.</span></p>
          <div className="about-detail">
            <p>I'm a Brazil-based software developer focused on backend engineering, automation, and systems integration. I primarily use Python to solve real operational problems with APIs, data workflows, and reliable automation.</p>
            <p>I also work across the delivery lifecycle, from interfaces and infrastructure to deployment, troubleshooting, and continuous improvement.</p>
          </div>
        </div>
        <dl className="facts" data-reveal>
          <div><dt>BASED IN</dt><dd>Recife, Brazil</dd></div>
          <div><dt>ROLE</dt><dd>Software Developer</dd></div>
          <div><dt>FOCUS</dt><dd>Backend · Integrations · Automation</dd></div>
        </dl>
      </section>

      <section className="projects section-dark" id="projects">
        <div className="section-kicker dark" data-reveal><span>02</span><p>SELECTED WORK</p><span className="side-note">SELECTED PROJECTS · 2026</span></div>
        <div className="projects-heading" data-reveal>
          <h2>FROM IDEAS<br />TO WORKING SYSTEMS.</h2>
          <p>Projects explained through real problems, engineering decisions, and outcomes — not just screenshots.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number} data-reveal>
              <div className="project-number">{project.number}</div>
              <div className="project-content">
                <p className="project-type">{project.type}</p><h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p>
                {project.insights ? <p className="project-description">{project.insights}</p> : null}
                {project.credit ? <p className="project-credit">{project.credit}</p> : null}
                <ul aria-label={`Technologies used in ${project.title}`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="project-action">
                <span>{project.status}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section-blue" id="experience">
        <div className="section-kicker dark" data-reveal><span>03</span><p>EXPERIENCE</p></div>
        <div className="experience-grid">
          <div className="experience-title" data-reveal>
            <h2>FROM PROCESS<br />TO PRODUCT.</h2>
            <p>A career built on understanding business processes before turning them into software.</p>
          </div>
          <div className="timeline">
            <article data-reveal><p className="timeline-date">2026 — PRESENT</p><h3>AUTO PARVI</h3><p className="role">RPA Developer / Software Developer</p><p>Python · REST APIs · Systems Integration · RPA · Troubleshooting</p></article>
            <article data-reveal><p className="timeline-date">2025</p><h3>AUTO PARVI</h3><p className="role">RPA Development Intern</p><p>Python · Flask · Django · SQL · Docker · CI/CD</p></article>
            <article className="muted-history" data-reveal><p className="timeline-date">2018 — 2022</p><h3>SOLAR BR</h3><p className="role">Sales and Customer Relations</p><p>Developed communication, customer empathy, and business problem-solving skills.</p></article>
          </div>
        </div>
      </section>

      <section className="technology section-light" id="technologies">
        <div className="section-kicker" data-reveal><span>04</span><p>TECH STACK</p></div>
        <div className="technology-heading" data-reveal>
          <h2>TOOLS BEHIND<br />THE WORK.</h2>
          <p>Tools serve the goal: building software that is clear, secure, and maintainable.</p>
        </div>
        <div className="technology-list">
          {technologies.map((group) => <div className="technology-row" key={group.number} data-reveal><span>{group.number}</span><h3>{group.title}</h3><p>{group.items}</p></div>)}
        </div>
      </section>

      <section className="education section-ink" id="education">
        <div className="section-kicker dark" data-reveal><span>05</span><p>EDUCATION</p></div>
        <div className="education-main" data-reveal>
          <p className="education-period">2024 — PRESENT · EXPECTED COMPLETION 2027</p><h2>SYSTEMS<br />ANALYSIS &<br />DEVELOPMENT</h2>
          <div className="education-meta"><p>Tiradentes University (UNIT)</p><p>Brazil · Degree in progress</p></div>
          <div className="grade"><span>CURRENT AVERAGE</span><strong>8</strong><small>/ 10</small></div>
        </div>
        <div className="certificates" data-reveal>
          <p>ADDITIONAL LEARNING</p>
          <ul>
            <li><span>Python</span><small>Bradesco Foundation</small></li><li><span>Full-Stack Development</span><small>DIO</small></li>
            <li><span>Machine Learning</span><small>Codecademy</small></li><li><span>Software Quality Engineering</span><small>CESAR School</small></li>
          </ul>
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-top" data-reveal><p>06 · CONTACT</p><span>THANKS FOR STOPPING BY.</span></div>
        <div className="contact-main" data-reveal>
          <h2>LET'S BUILD<br />SOMETHING <span>USEFUL.</span></h2>
          <a className="email-link" href="mailto:CaioYgor28@outlook.com">CaioYgor28@outlook.com <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="contact-bottom">
          <p>CAIO YGOR · 2026</p>
          <div className="socials">
            <ExternalLink href="https://github.com/CaioYgor28">GITHUB</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/caio-silva-4078b3201/">LINKEDIN</ExternalLink>
            <a className="external-link" href="mailto:CaioYgor28@outlook.com"><Mail aria-hidden="true" size={16} /> E-MAIL</a>
          </div>
          <a className="back-top" href="#home" aria-label="Back to top">BACK TO TOP <ArrowUpRight aria-hidden="true" size={15} /></a>
        </div>
      </footer>
    </main>
  );
}
