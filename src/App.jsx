import { useState } from "react";
import "./App.css";

// React Icons
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,

  FaTimes,

  FaEnvelope,
} from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

// Lucide React
import { AlignJustify, ArrowLeft, ArrowRight, Heart, HeartIcon, Link, Mail } from "lucide-react";

// Assets
import MyImage from "./assets/3.png";
import Project2 from "./assets/2.png";
import Project1 from "./assets/1.png";
import { BiHeart } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(0);

  const articles = [
    {
      id: 1,
      title: "Optimising Performance in a Full-Stack App",
      subtitle:
        "When I first built my full-stack app, I was proud that it worked. The frontend displayed data, the backend served it,",
        img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
    {
      id: 2,
      title: "State Management in React: useState vs useReducer vs Redux",
      subtitle:
        "When working with React, one of the biggest challenges developers face is managing state effectively. As applications grow, handling state transitions becomes increasingly complex. Should you stick with useState, switch to useReducer, or go for a global state management library like Redux? Let’s break it down in simple terms.",
        img: "https://images.unsplash.com/photo-1623870606070-c41ac6c46a4d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
    {
      id: 3,
      title: "Building My First CRUD App with React and Node.js",
      subtitle:
        "When I started learning full-stack development, one of the first challenges I gave myself was to build a CRUD application. CRUD stands for Create, Read, Update, Delet",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const socials = [
    {
      href: "https://github.com/shwetabairwa",
      icon: <FaGithub size={20} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/shwetabairwa027/",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/the_code_journey/",
      icon: <FaInstagram size={20} />,
      label: "Instagram",
    },
    {
      href: "https://hashnode.com/@the-code-journey",
      icon: <FaHashnode size={20} />,
      label: "HashNode",
    },
    // {
    //   href: "https://www.twitter.com",
    //   icon: <FaTwitter size={20} />,
    //   label: "Twitter",
    // },
  ];
  const contactOnlySocials = [
    {
      href: "mailto:shwetabairwa027@gmail.com?subject=Hello%20Shweta&body=I%20would%20like%20to%20connect%20with%20you!",
      icon: <FaEnvelope size={20} />,
      label: "Email",
    },
  ];
  const workData = [
    {
      time: "2025 – Present",
      duration: "1 year 1 months",
      company: "Tach Matpatra Pvt Lmd",
      role: "React App Developer | React Native",
    },
    {
      time: "2024 – 2025",
      duration: "4 months",
      company: "Tach Matpatra Pvt Lmd",
      role: "Frontend Developer | React js",
    },
    {
      time: "2024 – 2024",
      duration: "3 months",
      company: "MingleLoans.",
      role: "Frontend Developer | React JS & Javascript",
    },
    {
      time: "2020 – 2021",
      duration: "9 months",
      company: "Blue Hawk",
      role: "Frontend Developer | Flutter & Dart",
    },
  ];

  const projects = [
    {
      title: "Material Dukaan – E-Commerce Website",
      img: Project2,
      tech: [
        "React.js",
        "Redux Toolkit",
        "Firebase",
        "JavaScript",
        "Responsive Design",
      ],
      description: (
        <>
          Built a{" "}
          <span className="highlight">responsive e-commerce website</span> for
          selling
          <span className="highlight">
            {" "}
            raw materials and building materials
          </span>
          . Integrated
          <span className="highlight">
            {" "}
            Firebase Authentication & Firestore
          </span>{" "}
          for secure user login, product management, and order storage. <br />
          <br />✅ Designed a{" "}
          <span className="highlight">modern, mobile-friendly UI</span> with
          React.js, ensuring smooth navigation across devices. <br />✅
          Implemented <span className="highlight">Redux Toolkit</span> for state
          management, enabling seamless cart updates, filters, and order
          tracking. <br />✅ Added{" "}
          <span className="highlight">real-time database integration</span> with
          Firebase for efficient product listing and order management. <br />✅
          Focused on{" "}
          <span className="highlight">scalable and clean code structure</span>{" "}
          to support future feature expansion.
        </>
      ),
      links: [{ url: "https://materialdukaan.com/" }],
    },
    {
      title: "TM Parlour – Salon & Beauty Service App | iOS | Android",
      img: Project1,
      tech: ["React Native", "Firebase", "Redux Toolkit", "Google Maps API"],
      description: (
        <>
          Built and published a{" "}
          <span className="highlight">cross-platform mobile app</span>{" "}
          (Android/iOS) for salon bookings, supporting real-time scheduling and
          customer profiles. Integrated Firebase Authentication, Google Maps
          API, and push notifications, improving booking efficiency. Designed a
          responsive UI with Redux Toolkit state management, achieving smooth
          navigation and reduced booking drop-offs. <br />
          <br />✅ App published on{" "}
          <span className="highlight">App Store & Play Store</span>, achieving
          <span className="highlight"> 1K+ downloads</span> in the first month
          with positive user feedback on usability. <br />✅ Improved booking
          efficiency by enabling{" "}
          <span className="highlight">
            real-time scheduling & notifications
          </span>
          .
        </>
      ),
      links: [
        { url: "https://apps.apple.com/app/tm-parlour" },
        { url: "https://play.google.com/store/apps/details?id=com.tmparlour" },
      ],
    },
  ];

  const handlePrev = () =>
    setCurrentArticle((prev) => (prev === 0 ? articles.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentArticle((prev) => (prev === articles.length - 1 ? 0 : prev + 1));

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <h2 className="logo">SB Portfolio.</h2>

        {/* Web Nav */}
        <nav className="nav-links">
          <ul>
            {["Home", "Projects", "About", "Article", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <AlignJustify size={24} />
        </button>
      </header>


      {/* SIDE DRAWER */}
      <nav className={`side-drawer ${isOpen ? "open" : ""}`}>
        <FaTimes
          className="arrow-icon"
          onClick={() => setIsOpen(false)}
          size={20}
        />
        <ul>
          {["Home", "Projects", "About", "Article", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-row">
            <h1>Full-stack</h1>
            <h1 className="right">Developer</h1>
          </div>
          <p className="custom-para">
            My goal is to <span className="highlight">write</span>
            <span className="highlight"> maintainable</span>,
            <span className="highlight"> clean</span>, and
            <span className="highlight"> understandable</span>
            <span className="highlight"> code</span> that makes the development
            process enjoyable.
          </p>
          <div className="btnRow">
            <button
              className="btn"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
            </button>
            <a className="btn1" href="#projects">
              <ArrowRight className="arrow-icon" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="social">
        {socials.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            {icon} <span>{label}</span>
          </a>
        ))}
      </section>

      {/* ARTICLES */}
      <section className="articles" >
        <div
          className="article-card"
          style={{ backgroundImage: `url(${articles[currentArticle].img})` }}
        >
          <div className="overlay">
            <h3>{articles[currentArticle].title}</h3>
            <p>{articles[currentArticle].subtitle}</p>
            <div className="btnRow">
              <button className="btn small-btn">Read more</button>
              <button className="btn1">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="article-nav">
          <button onClick={handlePrev}>
            <ArrowLeft size={22} />
          </button>
          <div className="dots">
            {articles.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentArticle ? "active" : ""}`}
              />
            ))}
          </div>
          <button onClick={handleNext}>
            <ArrowRight size={22} />
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div>
          <p className="title">../About me...</p>
          <p className="custom-para about-para">
            Hello, I'm Shweta, a{" "}
            <span className="highlight">full stack developer</span> with more than
            <span className="highlight"> 1 year</span> of experience.
          </p>
        </div>
        <img src={MyImage} alt="Profile" />
      </section>

      {/* SKILLS */}
      <section className="skills">
        <div className="skill-card white-card">
          <h3>Frontend & Mobile</h3>
          <p>
            React.js / React Native / Flutter / Next.js / JavaScript (ES6+) /
            TypeScript / Dart / React Router / Redux Toolkit / Context API / API
            integration / Firebase / Google Maps API
          </p>
        </div>

        <div className="skill-row">
          <div className="skill-card black-card">
            <h3>Styles</h3>
            <p>
              CSS3 / Tailwind CSS / Bootstrap / Material UI / Sass / Responsive
              Design
            </p>
          </div>
          <div className="skill-box">
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn circle"
            >
              <FaGithub size={34} />
            </a>
            <button className="btn1">
              <ArrowLeft className="arrow-icon rotate" size={24} />
            </button>
          </div>
        </div>

        <div className="skill-card black-card">
          <h3>Backend</h3>
          <p>
            Node.js / Express.js / RESTful APIs / MongoDB / PostgreSQL / SQL /
            JWT Authentication / Firebase / Basic GraphQL
          </p>
        </div>

        <div className="skill-card black-card">
          <h3>DevOps & Deployment</h3>
          <p>
            Git / GitHub / CI/CD / Cloud Hosting (AWS / Render / Hostinger) /
            Play Store / App Store Deployment
          </p>
        </div>
      </section>

      {/* WORK */}
      <section className="work" id="work">
        <h1 className="work-title">Work</h1>
        {workData.map(({ time, duration, company, role }, i) => (
          <div key={i} className={`work-row ${i === 1 ? "white-row" : ""}`}>
            <div className="work-left">
              <p>{time}</p>
              <p>{duration}</p>
            </div>
            <div className="work-right">
              <p className="company">{company}</p>
              <p className="role">{role}</p>
            </div>
          </div>
        ))}
        <div className="work-total">
          <p className="custom-para work-box">
            Work experience <span className="highlight">2 years 1 months</span>
          </p>
        </div>
      </section>

      {/* PROJECT */}
      <p className="title pro-title">../Projects...</p>
      <h1 className="work-title article-title  project-title2">Project</h1>
      <section className="project" id="projects">


        {projects.map(({ title, img, tech, description, links }, idx) => (
          <div key={idx}>
            <div
              className="article-card project-card"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="project-overley"></div>
            </div>
            <p className="title project-title">{title}</p>
            <div className="project-skill">
              {tech.map((t) => (
                <p key={t} className="social-btn skill-btn">
                  <span>{t}</span>
                </p>
              ))}
            </div>
            <p className="custom-para project-para">{description}</p>
            <div className="skill-box project-box">
              {links.map(({ url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn circle"
                >
                  <Link size={24} />
                </a>
              ))}
              <button className="btn1">
                <ArrowLeft className="arrow-icon rotate" size={24} />
              </button>
            </div>
          </div>
        ))}
      </section>
      <h1 className="work-title article-title ">Article</h1>
      <section className="articles2" id="article">

        {articles.map(({ id, title, subtitle }) => (
          <div key={id} className="article2-card">
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <div className="btnRow">
              <button className="btn small-btn">Read more</button>
              <button className="btn1">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </section>


      <section className="contact" id="contact">
        <p className="title contact-title">../Contact..</p>
        <div>
          <ul>
            {["Home", "Projects", "About", "Article"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-row contact-row">
          <h1>Shweta</h1>
          <h1 className="right">Bairwa</h1>
        </div>
        <div className="contact-btn">
          {[...socials,
            // ...contactOnlySocials
          ].map(({ href, icon, label }) => {
            const isMail = href.startsWith("mailto:");
            return (
              <a
                key={label}
                href={href}
                {...(!isMail && { target: "_blank", rel: "noopener noreferrer" })}
                className="social-btn"
              >
                {icon} <span>{label}</span>
              </a>
            );
          })}
        </div>

      </section>
      <section className="work-total contact-detail">
        <p className="custom-para work-box">
          {/* <span className="highlight">Made By  <FiHeart size={16}/>  shwetabairwa</span> */}
          shwetabairwa027@gmail.com <span className="highlight">+91-9871617208</span>
        </p>
      </section>
    </>
  );
}
