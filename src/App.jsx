import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
     
    </>
  );
}

export default App;





// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import emailjs from "emailjs-com";

// import profile from "./assets/profile.jpg";
// import project1 from "./assets/project1.png";
// import project2 from "./assets/project2.png";
// import project3 from "./assets/project3.png";

// function App() {

// const sendEmail = (e) => {
// e.preventDefault();

// emailjs.sendForm(
// "service_0koki0h",
// "template_cm6oa8u",
// e.target,
// "V5CmhjgEsBRvz6J6L"
// ).then(()=>{
// alert("Message Sent Successfully");
// });

// e.target.reset();
// };

// return (

// <div style={container}>

// {/* NAVBAR */}

// <nav style={nav}>

// <h2>Kiran Kumari</h2>

// <div>

// <a href="#about" style={link}>About</a>
// <a href="#education" style={link}>Education</a>
// <a href="#skills" style={link}>Skills</a>
// <a href="#projects" style={link}>Projects</a>
// <a href="#contact" style={link}>Contact</a>

// </div>

// </nav>


// {/* HERO */}

// <section style={hero}>

// <div>

// <h1 style={title}>Kiran Kumari</h1>

// <TypeAnimation
// sequence={[
// "Frontend Developer",
// 2000,
// "React Developer",
// 2000,
// "Web Developer",
// 2000
// ]}
// speed={50}
// repeat={Infinity}
// style={typing}
// />

// <p style={heroText}>
// Frontend Developer skilled in React, JavaScript, HTML and CSS.
// Passionate about building responsive and modern web applications.
// </p>

// <a href="/resume.pdf" download>
// <button style={btn}>Download Resume</button>
// </a>

// </div>

// <img src={profile} style={profileStyle}/>

// </section>


// {/* ABOUT / SUMMARY */}

// <section id="about" style={section}>

// <h2>Executive Summary</h2>

// <p style={aboutText}>

// Results-driven Frontend Developer with strong knowledge of HTML, CSS,
// JavaScript and React.js. Skilled in building responsive and user-friendly
// web applications with focus on performance and clean UI design.
// Passionate about learning modern technologies and contributing to
// innovative development teams.

// </p>

// </section>


// {/* EDUCATION */}

// <section id="education" style={section}>

// <h2>Education</h2>

// <div style={educationBox}>

// <div style={eduCard}>
// <h3>B.Tech (CSE)</h3>
// <p>Arka Jain University</p>
// <p>2023</p>
// <p>83.09%</p>
// </div>

// <div style={eduCard}>
// <h3>Diploma</h3>
// <p>Govt. Women's Polytechnic</p>
// <p>2019</p>
// <p>63.49%</p>
// </div>

// <div style={eduCard}>
// <h3>10th</h3>
// <p>S.V.B.P.S High School</p>
// <p>2016</p>
// <p>78.22%</p>
// </div>

// </div>

// </section>


// {/* SKILLS */}

// <section id="skills" style={section}>

// <h2>Technical Skills</h2>

// <div style={skillsContainer}>

// <div style={card}>HTML5</div>
// <div style={card}>CSS3</div>
// <div style={card}>JavaScript (ES6+)</div>
// <div style={card}>React.js</div>
// <div style={card}>Responsive Design</div>
// <div style={card}>REST API</div>
// <div style={card}>Git & GitHub</div>
// <div style={card}>Core Java</div>
// <div style={card}>Node.js (Basic)</div>
// <div style={card}>SQL (Basic)</div>

// </div>

// </section>


// {/* PROJECTS */}

// <section id="projects" style={section}>

// <h2>Projects</h2>

// <div style={projects}>

// <div style={projectCard}>

// <img src={project1} style={projectImg}/>

// <h3>Portfolio Website</h3>

// <p>
// Responsive portfolio built using React.js to showcase
// projects and developer skills.
// </p>

// <button style={demoBtn}>Live Demo</button>
// <button style={githubBtn}>GitHub</button>

// </div>


// <div style={projectCard}>

// <img src={project2} style={projectImg}/>

// <h3>Weather Forecast App</h3>

// <p>
// Displays real-time weather using OpenWeatherMap API.
// </p>

// <button style={demoBtn}>Live Demo</button>
// <button style={githubBtn}>GitHub</button>

// </div>


// <div style={projectCard}>

// <img src={project3} style={projectImg}/>

// <h3>E-Commerce Website</h3>

// <p>
// Online shopping interface built using HTML CSS and JavaScript.
// </p>

// <button style={demoBtn}>Live Demo</button>
// <button style={githubBtn}>GitHub</button>

// </div>

// </div>

// </section>


// {/* TRAINING */}

// <section style={section}>

// <h2>Training</h2>

// <p>
// Java Full Stack Development Training – JSpiders, Bengaluru
// </p>

// </section>


// {/* SOFT SKILLS */}

// <section style={section}>

// <h2>Soft Skills</h2>

// <ul style={list}>

// <li>Time Management</li>
// <li>Task completion within deadlines</li>
// <li>Team collaboration</li>
// <li>Adaptability to new environments</li>

// </ul>

// </section>


// {/* HOBBIES */}

// <section style={section}>

// <h2>Hobbies</h2>

// <p>Crafting | Reading</p>

// </section>


// {/* CONTACT */}

// <section id="contact" style={section}>

// <h2>Contact Me</h2>

// <form style={form} onSubmit={sendEmail}>

// <input type="text" name="name" placeholder="Your Name" style={input} required/>

// <input type="email" name="email" placeholder="Your Email" style={input} required/>

// <textarea name="message" placeholder="Your Message" style={textarea} required/>

// <button style={btn}>Send Message</button>

// </form>

// <p>📍 Jamshedpur, India</p>
// <p>📞 +91 8092723900</p>
// <p>📧 Kirankumari20850@gmail.com</p>

// </section>


// <footer style={footer}>

// <p>© 2026 Kiran Kumari | Frontend Developer</p>

// </footer>

// </div>

// );
// }

// export default App;



// const container={
// fontFamily:"Arial",
// background:"linear-gradient(to right,#020617,#0f172a)",
// color:"white",
// scrollBehavior:"smooth"
// }

// const nav={
// display:"flex",
// justifyContent:"space-between",
// padding:"20px 50px"
// }

// const link={
// margin:"15px",
// color:"white",
// textDecoration:"none"
// }

// const hero={
// display:"flex",
// alignItems:"center",
// justifyContent:"center",
// gap:"80px",
// height:"90vh",
// flexWrap:"wrap"
// }

// const title={fontSize:"55px"}

// const typing={
// fontSize:"28px",
// color:"#38bdf8"
// }

// const heroText={
// maxWidth:"500px",
// marginTop:"15px"
// }

// const profileStyle={
// width:"250px",
// height:"250px",
// borderRadius:"50%",
// border:"4px solid #38bdf8"
// }

// const btn={
// padding:"10px 20px",
// background:"#38bdf8",
// border:"none",
// marginTop:"20px",
// borderRadius:"6px",
// cursor:"pointer"
// }

// const section={
// padding:"80px 50px",
// textAlign:"center"
// }

// const aboutText={
// maxWidth:"700px",
// margin:"auto"
// }

// const educationBox={
// display:"flex",
// justifyContent:"center",
// gap:"30px",
// flexWrap:"wrap",
// marginTop:"40px"
// }

// const eduCard={
// background:"#1e293b",
// padding:"20px",
// borderRadius:"10px",
// width:"220px"
// }

// const skillsContainer={
// display:"flex",
// justifyContent:"center",
// flexWrap:"wrap",
// gap:"20px",
// marginTop:"30px"
// }

// const card={
// background:"#1e293b",
// padding:"20px 40px",
// borderRadius:"10px"
// }

// const projects={
// display:"flex",
// flexWrap:"wrap",
// justifyContent:"center",
// gap:"30px",
// marginTop:"40px"
// }

// const projectCard={
// background:"#1e293b",
// padding:"20px",
// borderRadius:"10px",
// width:"250px"
// }

// const projectImg={
// width:"100%",
// borderRadius:"8px"
// }

// const demoBtn={
// background:"#38bdf8",
// border:"none",
// padding:"8px 15px",
// margin:"5px",
// cursor:"pointer"
// }

// const githubBtn={
// background:"#334155",
// color:"white",
// border:"none",
// padding:"8px 15px",
// margin:"5px",
// cursor:"pointer"
// }

// const list={listStyle:"none"}

// const form={
// display:"flex",
// flexDirection:"column",
// alignItems:"center",
// gap:"15px",
// marginTop:"30px"
// }

// const input={padding:"10px",width:"300px"}

// const textarea={
// padding:"10px",
// width:"300px",
// height:"100px"
// }

// const footer={
// textAlign:"center",
// padding:"30px",
// background:"#020617"
// }