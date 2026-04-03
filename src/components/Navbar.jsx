import { useState } from "react";


function Navbar() {
  const [active, setActive] = useState("");

  return (
    <nav className="nav">
      <h2>Kiran Kumari</h2>

      <div>
        {["about", "education", "skills", "projects","certificates","contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
            
          >
            {item.toUpperCase()}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
