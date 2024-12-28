import { certificates } from "../../../../data/about-data";
import "./CertificatesSection.css";

export default function CertificatesSection() {
  return (
    <section className="certificates">
      <h1>Certificates</h1>
      <div>
        {certificates.map((certificate, index) => (
          <div className="certificates-card" key={index}>
            <a href={`${certificate.pdf}.pdf`} target="_blank">
              <img
                src={certificate.image}
                alt={`${certificate.issuer} ${certificate.title} Certificate`}
              />
            </a>
            <h2>{certificate.title}</h2>
            <h3>{certificate.issuer}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
