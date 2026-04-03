
import project1 from "../assets/project1.jpg";
import project2 from "../assets/portfolio.jpg"
function Projects() {
  return (
    <section className="section" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        {/* Project Card */}
        <div className="project-card">
          <img src={project1} alt="project" />

          <h3>Jewellery E-commerce Website </h3>

          <p>
            KIVON LUXE is a modern and responsive jewellery e-commerce web application built using React.
          </p>

          <p className="tech">
          HTML| CSS | JavaScript | React 
          </p>

          <div className="project-buttons">
            <a href="https://tubular-sorbet-89fea1.netlify.app/" target="_blank">
              <button>Live</button>
            </a>

            <a href="https://github.com/kiku5858/kivon-luxe" target="_blank">
              <button>GitHub</button>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={project2} alt="project" />

          <h3>Personal Portfolio</h3>

          <p>
          Personal portfolio with React.
          </p>

          <p className="tech">
            React | CSS | JavaScript
          </p>

          <div className="project-buttons">
            <a href="#" target="_blank">
              <button>Live</button>
            </a>

            <a href="#" target="_blank">
              <button>GitHub</button>
            </a>
          </div>
        </div>

        

        {/* 👉 aur projects add kar sakti ho isi format me */}

      </div>
    </section>
  );
}

export default Projects;