import { useState } from 'react';
import './index.css';

const skills = [
  ['Programming', 'Python', 'SQL'],
  ['Databases', 'PostgreSQL'],
  ['Data Processing', 'Pandas', 'SQLAlchemy'],
  ['Data Engineering', 'ETL Pipelines', 'API-based Data Extraction', 'Web Scraping', 'Beautiful Soup', 'Requests'],
  ['Data Analytics', 'Data Cleaning', 'Data Validation', 'Exploratory Data Analysis (EDA)', 'KPI Reporting'],
  ['Machine Learning', 'Scikit-learn', 'Feature Engineering', 'Predictive Analytics', 'Anomaly Detection'],
  ['Process Mining', 'PM4Py'],
  ['Visualization & BI', 'Power BI', 'Streamlit', 'Plotly', 'Excel'],
  ['Tools', 'Git', 'GitHub', 'VS Code', 'Jupyter'],
];

const projects = [
  { no:'01', kind:'SALES INTELLIGENCE', title:'End-to-End Sales Analytics Platform', summary:'A data pipeline and reporting workflow for turning large sales datasets into clear performance insights.', problem:'Sales data can be difficult to analyze consistently when it is spread across raw files and operational tables.', built:'Python ETL workflows using SQLAlchemy and PostgreSQL, with SQL-based analysis and Power BI reporting.', features:['Processes 1M+ records, as stated in the resume','SQL-based KPI analysis','Power BI sales reporting'], stack:['Python','PostgreSQL','SQL','SQLAlchemy','Power BI'], visual:'sales' },
  { no:'02', kind:'PROCESS INTELLIGENCE', title:'ATLAS Ω — AI Business Process Intelligence', summary:'A process-mining concept for exploring event logs, workflow bottlenecks, delays, and rework.', problem:'Teams need a clearer view of how work actually moves through a process and where friction may occur.', built:'A Python and PM4Py-based process analysis workflow with interactive Streamlit and Plotly visualizations.', features:['Event-log workflow discovery','Bottleneck and delay exploration','Root-cause comparison and improvement simulation'], stack:['Python','SQL','PostgreSQL','PM4Py','Streamlit','Plotly'], visual:'process' },
  { no:'03', kind:'ANALYTICS WORKSPACE', title:'Nexus Analytics Studio', summary:'A modular analytics workspace that transforms raw datasets into structured exploration and decision-ready insights.', problem:'Raw business data often needs repeatable cleaning, validation, analysis, and KPI reporting before it is useful.', built:'A Streamlit analytics application using Pandas and Scikit-learn for data processing and analytical workflows.', features:['Data validation and KPI tracking','Exploratory data analysis','Anomaly detection and predictive analytics'], stack:['Python','Pandas','Scikit-learn','SQL','Streamlit'], visual:'nexus' },
  { no:'04', kind:'REVENUE & OPERATIONS', title:'EROI — Enterprise Revenue & Operations Intelligence Platform', summary:'An enterprise analytics experience for tracking revenue performance and operational KPIs from transaction data.', problem:'Business teams need a consistent way to understand revenue, profit, margins, order volumes, and operational trends.', built:'Automated data-processing and KPI workflows with interactive dashboard reporting.', features:['Revenue and profit analysis','Margin and order-volume tracking','Operational KPI dashboards'], stack:['Python','Pandas','SQL','Streamlit','Power BI'], visual:'eroi' },
  { no:'05', kind:'ENTERPRISE ANALYTICS', title:'NEXUS AI — Enterprise Intelligence Platform', summary:'An analytics platform concept combining data-quality workflows with KPI reporting and applied machine learning.', problem:'Unvalidated data and disconnected reporting can make it harder to identify unusual patterns and useful signals.', built:'Python analytics workflows for validation, KPI reporting, anomaly detection, and predictive analysis.', features:['Data validation workflows','Anomaly summaries','Predictive analytics and dashboard views'], stack:['Python','Pandas','Scikit-learn','SQL','Streamlit','Power BI'], visual:'nexusai' },
];

const workflow = [
  ['01','Extract','Requests · Beautiful Soup · APIs'],
  ['02','Clean & validate','Python · Pandas · SQL'],
  ['03','Transform & store','ETL · SQLAlchemy · PostgreSQL'],
  ['04','Explore & model','EDA · Scikit-learn · PM4Py'],
  ['05','Report & explain','Power BI · Streamlit · Plotly'],
];

function MiniDashboard({ type }) {
  const titles = { sales:'SALES PERFORMANCE', process:'PROCESS FLOW MAP', nexus:'ANALYTICS WORKSPACE', eroi:'OPERATIONS OVERVIEW', nexusai:'INTELLIGENCE MONITOR' };
  return <div className={`mini-dashboard ${type}`} aria-label={`${titles[type]} illustrative preview`}>
    <div className="mock-top"><span className="mock-dot"/><span className="mock-dot"/><span className="mock-dot"/><b>{titles[type]}</b><span className="mock-period">OVERVIEW ↗</span></div>
    <div className="mock-kpis"><div><small>{type==='process'?'CASES':'TOTAL RECORDS'}</small><strong>{type==='process'?'2.4k':'128.6k'}</strong><span>Illustrative preview</span></div><div><small>{type==='eroi'?'OPERATING MARGIN':'DATA QUALITY'}</small><strong>{type==='eroi'?'24.8%':'96.2%'}</strong><span>Sample UI value</span></div></div>
    {type==='process' ? <div className="process-graph"><span>Start</span><i>→</i><span>Review</span><i>→</i><span className="hot-node">Approval</span><i>→</i><span>Complete</span></div> : <div className="chart-area"><div className="chart-label"><span>PERIODIC TREND</span><span>•••</span></div><svg viewBox="0 0 420 104" role="img" aria-label="Illustrative trend chart"><path className="chart-grid" d="M0 20H420 M0 48H420 M0 76H420"/><path className="chart-fill" d="M0 83 C28 76 36 54 65 62 S103 73 130 44 S174 50 202 37 S248 50 277 29 S325 42 348 20 S393 31 420 8 V104 H0Z"/><path className="chart-line" d="M0 83 C28 76 36 54 65 62 S103 73 130 44 S174 50 202 37 S248 50 277 29 S325 42 348 20 S393 31 420 8"/></svg></div>}
    <div className="mock-bottom"><span>DATA PIPELINE <b>● READY</b></span><span>PREVIEW · NOT LIVE DATA</span></div>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell" id="top">
    <header className="site-header"><nav className="nav wrap" aria-label="Main navigation">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Karthik Polasi home"><span className="brand-mark">K<span>.</span></span><span className="brand-name">KARTHIK POLASI<small>DATA ANALYTICS</small></span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#workflow" onClick={closeMenu}>Workflow</a><a href="#projects" onClick={closeMenu}>Projects</a><a className="nav-contact" href="#contact" onClick={closeMenu}>Let's connect <span>↗</span></a>
      </div>
    </nav></header>

    <main>
      <section className="hero wrap">
        <div className="hero-copy"><div className="eyebrow"><span className="status-pulse"/> DATA ANALYST <i>·</i> PYTHON <i>·</i> SQL <i>·</i> BI</div>
          <h1>Turning raw data<br/>into <em>clear decisions.</em></h1>
          <p className="hero-intro">I'm <strong>Karthik Polasi</strong>, a data analyst focused on Python, SQL, ETL pipelines, PostgreSQL, business intelligence, and applied machine learning. I build analytical workflows that turn complex data into actionable insights.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#projects">Explore my projects <span>↘</span></a><a className="btn btn-quiet" href="https://www.linkedin.com/in/karthik-polasi-70b40a333/" target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a></div>
          <div className="hero-socials"><a href="https://github.com/karthikpolasi1818-cmyk" target="_blank" rel="noreferrer">GitHub ↗</a><a href="mailto:karthikpolasi1818@gmail.com">Email ↗</a><span>Remote internship experience</span></div>
        </div>
        <div className="hero-visual"><div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/><div className="visual-caption"><span>FIG. 01</span><span>DATA → INSIGHT</span></div><div className="hero-visual-inner"><div className="visual-header"><span>ANALYTICS ENGINE</span><span className="live-tag"><i/> WORKFLOW</span></div><div className="visual-big-number">01<span>/05</span></div><div className="visual-title">From raw records<br/>to useful signals.</div><div className="visual-bars"><i style={{height:'32%'}}/><i style={{height:'48%'}}/><i style={{height:'40%'}}/><i style={{height:'69%'}}/><i style={{height:'55%'}}/><i style={{height:'84%'}}/><i style={{height:'70%'}}/><i style={{height:'96%'}}/><i style={{height:'78%'}}/><i style={{height:'100%'}}/><i style={{height:'87%'}}/><i style={{height:'92%'}}/></div><div className="visual-footer"><span>EXTRACT</span><b>→</b><span>TRANSFORM</span><b>→</b><span>EXPLAIN</span></div></div></div>
        <a className="scroll-note" href="#about"><span/> SCROLL TO EXPLORE</a>
      </section>

      <section id="about" className="section wrap"><div className="section-kicker">01 / ABOUT</div><div className="section-intro-grid"><h2>Curious by nature.<br/><em>Structured by data.</em></h2><div className="about-text"><p>My work sits at the intersection of data analytics, automation, and business intelligence. I enjoy building repeatable workflows that make raw datasets cleaner, analysis more consistent, and findings easier to communicate.</p><p>Through project work and my Data Analyst internship at Venture Launcher, I've worked with data extraction, validation, exploratory analysis, KPI reporting, and dashboard development using Python, SQL, and analytics tools.</p></div></div>
        <div className="principles"><div><span>01</span><b>Reliable data</b><p>Clean, validate, and prepare data before drawing conclusions.</p></div><div><span>02</span><b>Useful analysis</b><p>Explore patterns, track KPIs, and make findings easier to interpret.</p></div><div><span>03</span><b>Clear communication</b><p>Turn analytical output into dashboards and business-facing insights.</p></div></div>
      </section>

      <section id="experience" className="section wrap"><div className="section-kicker">02 / EXPERIENCE</div><div className="section-heading-row"><h2>Practical work.<br/><em>Real data workflows.</em></h2><p>Experience focused on extraction, data quality, analysis, and reporting.</p></div>
        <article className="experience-card"><div className="experience-side"><span className="experience-date">JUN 2026 — AUG 2026</span><span className="experience-location">REMOTE</span><div className="experience-line"/></div><div className="experience-main"><div className="role-heading"><div><h3>Data Analyst Intern</h3><p>Venture Launcher</p></div><span className="role-symbol">↗</span></div><ul><li>Built Python-based data extraction, web scraping, and processing workflows.</li><li>Cleaned and validated datasets using Python and SQL with data-quality checks.</li><li>Performed exploratory data analysis to identify patterns and trends.</li><li>Prepared KPI reports and developed Power BI dashboards for business analysis.</li></ul><div className="chips">{['Python','SQL','Data Cleaning','EDA','Power BI','Web Scraping'].map(x=><span key={x}>{x}</span>)}</div></div></article>
      </section>

      <section id="skills" className="section wrap"><div className="section-kicker">03 / TECHNICAL SKILLS</div><div className="section-heading-row"><h2>A practical toolkit<br/>for <em>working with data.</em></h2><p>Grouped by how the tools support data extraction, analysis, modeling, and reporting.</p></div><div className="skills-grid">{skills.map(([group,...items],i)=><article className="skill-card" key={group}><div className="skill-card-top"><span>{String(i+1).padStart(2,'0')}</span><span>SKILLSET</span></div><h3>{group}</h3><div className="chips">{items.map(s=><span key={s}>{s}</span>)}</div></article>)}</div></section>

      <section id="workflow" className="section workflow-section"><div className="wrap"><div className="section-kicker">04 / HOW I WORK</div><div className="section-heading-row"><h2>From source data<br/>to <em>business insight.</em></h2><p>A repeatable analytical workflow keeps data understandable, traceable, and useful.</p></div><div className="workflow-grid">{workflow.map(([num,title,detail],i)=><article className="workflow-step" key={num}><div className="workflow-step-top"><span>{num}</span>{i<workflow.length-1&&<span className="step-arrow">→</span>}</div><h3>{title}</h3><p>{detail}</p></article>)}</div><div className="workflow-foot"><span className="status-pulse"/> The exact steps vary by dataset and business question.</div></div></section>

      <section id="projects" className="section wrap"><div className="section-kicker">05 / SELECTED PROJECTS</div><div className="section-heading-row project-heading"><h2>Built to explore.<br/><em>Designed to explain.</em></h2><p>Five projects across sales analytics, process intelligence, business KPIs, and applied analytics. Visuals below are illustrative previews, not screenshots of deployed applications.</p></div><div className="projects-list">{projects.map((project,i)=><article className={`project-card ${i===0?'featured':''}`} key={project.title}><div className="project-content"><div className="project-label"><span>{project.no}</span><span>{project.kind}</span></div><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><div className="project-details"><div><h4>PROBLEM</h4><p>{project.problem}</p></div><div><h4>WHAT I BUILT</h4><p>{project.built}</p></div></div><div className="feature-list">{project.features.map(f=><span key={f}><i>↗</i>{f}</span>)}</div><div className="chips">{project.stack.map(s=><span key={s}>{s}</span>)}</div></div><div className="project-preview"><MiniDashboard type={project.visual}/><span className="preview-caption">ILLUSTRATIVE UI PREVIEW · NOT LIVE DATA</span></div></article>)}</div></section>

      <section id="certifications" className="section wrap"><div className="section-kicker">06 / CONTINUOUS LEARNING</div><div className="section-heading-row"><h2>Learning with<br/><em>purpose.</em></h2><p>Selected training credentials listed in my profile.</p></div><div className="cert-grid"><article className="cert-card"><span className="cert-date">JUNE — JULY 2025</span><div className="cert-icon">G</div><div><h3>Generative AI</h3><p>Infosys</p></div><span className="cert-arrow">↗</span></article><article className="cert-card"><span className="cert-date">SEPTEMBER 2025</span><div className="cert-icon">JS</div><div><h3>JavaScript for Beginners</h3><p>Udemy</p></div><span className="cert-arrow">↗</span></article></div></section>

      <section id="contact" className="contact-section wrap"><div className="contact-glow"/><div className="section-kicker">07 / CONTACT</div><div className="contact-grid"><div><h2>Let's turn data into<br/><em>something meaningful.</em></h2><p>Interested in data analytics, business intelligence, or entry-level data opportunities? Let's connect.</p></div><div className="contact-links"><a href="mailto:karthikpolasi1818@gmail.com?subject=Portfolio%20Opportunity"><span>EMAIL</span><b>karthikpolasi1818@gmail.com</b><i>↗</i></a><a href="https://www.linkedin.com/in/karthik-polasi-70b40a333/" target="_blank" rel="noreferrer"><span>LINKEDIN</span><b>Connect professionally</b><i>↗</i></a><a href="https://github.com/karthikpolasi1818-cmyk" target="_blank" rel="noreferrer"><span>GITHUB</span><b>Explore my code</b><i>↗</i></a></div></div></section>
    </main>
    <footer className="footer wrap"><a className="brand footer-brand" href="#top"><span className="brand-mark">K<span>.</span></span><span className="brand-name">KARTHIK POLASI<small>DATA ANALYTICS</small></span></a><span>© {new Date().getFullYear()} Karthik Polasi</span><a href="#top">BACK TO TOP ↑</a></footer>
  </div>;
}
export default App;
