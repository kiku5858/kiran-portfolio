import { useState } from "react";
import cert1 from "../assets/cert1.jpeg";
import cert2 from "../assets/cert2.jpeg";
import cert3 from "../assets/cert3.jpeg";
function Certificates() {
  const [selected, setSelected] = useState(null);

  const certs = [
    { img: cert1, title: "PYTHON" },
    { img: cert2, title: "CLOUD COMPUTING WITH AWS" },
    { img: cert3, title: "JAVA FULL STACK DEVELOPMENT" }
  ];

  return (
    <section className="section" id="certificates">
      <h2>Certificates</h2>

      <div className="cert-container">
        {certs.map((c, i) => (
          <div className="cert-card" key={i}>
            <img
              src={c.img}
              alt="certificate"
              onClick={() => setSelected(c.img)}  // 👈 click pe open
            />
            <p>{c.title}</p>
          </div>
        ))}
      </div>

      {/* 🔥 Modal */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <img src={selected} className="modal-img" />
        </div>
      )}
    </section>
  );
}

export default Certificates;