import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Kiran Kumari</h1>
       
        <TypeAnimation  className="typing"
          sequence={[
            "Frontend Developer",
            2000,
            "React Developer",
            2000,
            "Web Developer",
            2000,
            "Building Responsive & Scalable Web Apps",
            2000,
          
          ]}
          speed={50}
          repeat={Infinity}
        />

        <p>
          Frontend Developer skilled in React, JavaScript, HTML and CSS.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a href="https://github.com/kiku5858" target="_blank">
            <button>GitHub</button>
          </a>

          <a href="https://www.linkedin.com/in/kiran-kumari-b81b941bb/" target="_blank">
            <button>LinkedIn</button>
          </a>
          <a href="/resume1.pdf" download>
            <button>Download Resume</button>
          </a>
        </div>
      </div>

      <img src={profile} alt="profile" className="profile" />
    </section>
  );
}

export default Hero;