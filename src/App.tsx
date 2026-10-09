import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { useEffect } from "react";

const projects = [
  {
    number: "01",
    type: "PRODUTO FULL-STACK · EM PRODUÇÃO",
    title: "Caio & Luana",
    subtitle: "Uma plataforma de casamento feita como produto real.",
    description:
      "Experiência pública, confirmação de presença, lista de presentes, pagamentos e administração — do código à infraestrutura.",
    stack: ["React", "TypeScript", "Node.js", "Docker", "AWS", "Nginx"],
    href: "https://caioeluana.com.br",
    cta: "VISITAR PROJETO",
  },
  {
    number: "02",
    type: "PLATAFORMA · POC FULL-STACK",
    title: "Igreja VEM",
    subtitle: "Gestão, comunidade e planejamento em uma única plataforma.",
    description:
      "POC de uma plataforma para membros, grupos, departamentos, eventos, conteúdo e voluntariado, com áreas pública e autenticada e controle de acesso por papéis e escopos.",
    stack: ["React", "TypeScript", "Django", "PostgreSQL", "Docker", "AWS"],
    status: "POC · HOMOLOGAÇÃO",
  },
  {
    number: "03",
    type: "PLATAFORMA · MOBILE · WEB · API",
    title: "RetailOps",
    subtitle: "Operação de varejo do coletor ao painel de gestão.",
    description:
      "Ecossistema em três aplicações: coletor Android com leitura de códigos e operação offline, painel web para gestão e API em Go que centraliza catálogo, registros, autenticação de dispositivos e integrações, com PostgreSQL e deploy containerizado na AWS.",
    stack: ["Go", "PostgreSQL", "React", "TypeScript", "React Native", "Expo", "SQLite", "Docker", "AWS", "Nginx"],
    links: [
      { label: "MOBILE", href: "https://github.com/devprimacy/DevPrimacy-RetailOps-Mobile" },
      { label: "WEB", href: "https://github.com/devprimacy/DevPrimacy-RetailOps-Web" },
      { label: "BACKEND", href: "https://github.com/devprimacy/DevPrimacy-RetailOps" },
    ],
    credit: "Projeto desenvolvido com Andrew Benvenuto",
  },
];

const technologies = [
  { number: "01", title: "Backend", items: "Python · Go · Flask · Django · APIs REST · SQL" },
  { number: "02", title: "Automação", items: "RPA · Selenium · Requests · Integrações" },
  { number: "03", title: "Frontend", items: "React · TypeScript · JavaScript · HTML · CSS" },
  { number: "04", title: "Entrega", items: "Docker · AWS · Nginx · Git · CI/CD" },
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
        <a className="wordmark" href="#inicio" aria-label="Caio Ygor — início">CY<span>.</span></a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">SOBRE</a><a href="#projetos">PROJETOS</a><a href="#experiencia">TRAJETÓRIA</a><a href="#contato">CONTATO</a>
        </nav>
        <span className="header-place">RECIFE · BR</span>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow-row">
            <span className="eyebrow">CAIO YGOR · DESENVOLVEDOR DE SOFTWARE</span>
            <span className="status-dot">EM ATIVIDADE</span>
          </div>
          <h1>EU CRIO<br />SISTEMAS,<br />AUTOMAÇÕES E<br /><span>PRODUTOS.</span></h1>
          <div className="hero-bottom">
            <p>Transformando processos manuais em software confiável — do backend à experiência final.</p>
            <a href="#sobre" className="explore-link">EXPLORAR <ArrowDown aria-hidden="true" size={17} /></a>
          </div>
        </div>
      </section>

      <section className="about section-light" id="sobre">
        <div className="section-kicker" data-reveal><span>01</span><p>SOBRE</p></div>
        <div className="about-statement" data-reveal>
          <p className="statement-main">DESENVOLVO SOFTWARE PARA CONECTAR SISTEMAS, ELIMINAR TRABALHO MANUAL E FAZER OPERAÇÕES <span>FUNCIONAREM MELHOR.</span></p>
          <div className="about-detail">
            <p>Sou desenvolvedor de software com experiência em backend, automações e integrações. Trabalho principalmente com Python, construindo APIs, RPAs e aplicações que resolvem problemas reais.</p>
            <p>Também atuo no ciclo completo: interface, infraestrutura, deploy, observabilidade e evolução do produto em produção.</p>
          </div>
        </div>
        <dl className="facts" data-reveal>
          <div><dt>BASE</dt><dd>Recife, Pernambuco</dd></div>
          <div><dt>ATUAÇÃO</dt><dd>Desenvolvimento de software</dd></div>
          <div><dt>FOCO</dt><dd>Automação · Backend · Sistemas</dd></div>
        </dl>
      </section>

      <section className="projects section-dark" id="projetos">
        <div className="section-kicker dark" data-reveal><span>02</span><p>TRABALHOS SELECIONADOS</p><span className="side-note">PROJETOS REAIS · 2026</span></div>
        <div className="projects-heading" data-reveal>
          <h2>PROJETOS QUE<br />SAÍRAM DO PAPEL.</h2>
          <p>Produto, automação e engenharia apresentados pelo problema, pelas decisões e pelo resultado — não apenas pela tela.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number} data-reveal>
              <div className="project-number">{project.number}</div>
              <div className="project-content">
                <p className="project-type">{project.type}</p><h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p>
                {project.credit ? <p className="project-credit">{project.credit}</p> : null}
                <ul aria-label={`Tecnologias de ${project.title}`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="project-action">
                {project.links ? (
                  <div className="project-links" aria-label={`Repositórios de ${project.title}`}>
                    {project.links.map((link) => (
                      <ExternalLink href={link.href} key={link.href}>{link.label}</ExternalLink>
                    ))}
                  </div>
                ) : project.href ? (
                  <ExternalLink href={project.href}>{project.cta}</ExternalLink>
                ) : (
                  <span>{project.status}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section-blue" id="experiencia">
        <div className="section-kicker dark" data-reveal><span>03</span><p>TRAJETÓRIA</p></div>
        <div className="experience-grid">
          <div className="experience-title" data-reveal>
            <h2>DE PROCESSOS<br />PARA PRODUTOS.</h2>
            <p>Uma trajetória construída entendendo pessoas e operações antes de transformá-las em código.</p>
          </div>
          <div className="timeline">
            <article data-reveal><p className="timeline-date">2026 — ATUAL</p><h3>AUTO PARVI</h3><p className="role">Assistente de Desenvolvimento de Sistemas</p><p>Python · APIs · Integrações · RPA · Qualidade · Code review</p></article>
            <article data-reveal><p className="timeline-date">2025</p><h3>AUTO PARVI</h3><p className="role">Estagiário em Desenvolvimento de Sistemas</p><p>Python · Flask · Django · SQL · Docker · CI/CD</p></article>
            <article className="muted-history" data-reveal><p className="timeline-date">2018 — 2022</p><h3>SOLAR BR</h3><p className="role">Vendas e relacionamento com clientes</p><p>A experiência que fortaleceu comunicação, escuta e visão de negócio.</p></article>
          </div>
        </div>
      </section>

      <section className="technology section-light" id="tecnologias">
        <div className="section-kicker" data-reveal><span>04</span><p>SOB O CAPÔ</p></div>
        <div className="technology-heading" data-reveal>
          <h2>O QUE SUSTENTA<br />CADA ENTREGA.</h2>
          <p>Ferramentas são meios. A prioridade é construir algo claro, seguro e sustentável.</p>
        </div>
        <div className="technology-list">
          {technologies.map((group) => <div className="technology-row" key={group.number} data-reveal><span>{group.number}</span><h3>{group.title}</h3><p>{group.items}</p></div>)}
        </div>
      </section>

      <section className="education section-ink" id="formacao">
        <div className="section-kicker dark" data-reveal><span>05</span><p>FORMAÇÃO</p></div>
        <div className="education-main" data-reveal>
          <p className="education-period">2024 — 2026</p><h2>ANÁLISE E<br />DESENVOLVIMENTO<br />DE SISTEMAS</h2>
          <div className="education-meta"><p>Universidade Tiradentes</p><p>Recife, PE</p></div>
          <div className="grade"><span>MÉDIA GLOBAL</span><strong>8</strong><small>/ 10</small></div>
        </div>
        <div className="certificates" data-reveal>
          <p>FORMAÇÃO COMPLEMENTAR</p>
          <ul>
            <li><span>Python</span><small>Fundação Bradesco</small></li><li><span>Desenvolvimento Full Stack</span><small>DIO</small></li>
            <li><span>Machine Learning</span><small>Codecademy</small></li><li><span>Engenharia de Qualidade de Software</span><small>CESAR School</small></li>
          </ul>
        </div>
      </section>

      <footer className="contact" id="contato">
        <div className="contact-top" data-reveal><p>06 · CONTATO</p><span>VOCÊ CHEGOU ATÉ A LUZ.</span></div>
        <div className="contact-main" data-reveal>
          <h2>VAMOS CONSTRUIR<br />ALGO QUE <span>FUNCIONE.</span></h2>
          <a className="email-link" href="mailto:CaioYgor28@outlook.com">CaioYgor28@outlook.com <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="contact-bottom">
          <p>CAIO YGOR · 2026</p>
          <div className="socials">
            <ExternalLink href="https://github.com/CaioYgor28">GITHUB</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/caio-silva-4078b3201/">LINKEDIN</ExternalLink>
            <a className="external-link" href="mailto:CaioYgor28@outlook.com"><Mail aria-hidden="true" size={16} /> E-MAIL</a>
          </div>
          <a className="back-top" href="#inicio" aria-label="Voltar ao início">VOLTAR AO TOPO <ArrowUpRight aria-hidden="true" size={15} /></a>
        </div>
      </footer>
    </main>
  );
}
