function Skills() {
    const skills = [
      "HTML 5",
      "CSS",
      "Advanced JavaScript",
      "React",
      "REST API",
      "Responsive Design",
      "Git & GitHub",
      "Core Java",
      "SQL"

    ];
  
    return (
      <section id="skills" className="section">
        <h2>Skills</h2>
  
        <div className="skills">
          {skills.map((skill) => (
            <div className="card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Skills;