import React from "react";

function Schemes() {
  const schemes = [
    {
      id: 1,
      title: "प्रधान मंत्री किसान सम्मान निधि (PM-KISAN)",
      desc: "દર વર્ષે 6000 રૂપિયા નાની નાની હપ્તામાં ખેડૂતોને સહાયરૂપ.",
      link: "https://pmkisan.gov.in/"
    },
    {
      id: 2,
      title: "સોઇલ હેલ્થ કાર્ડ યોજના",
      desc: "ખેડૂતોને જમીનના ગુણવત્તા વિશે માહિતી માટે માટી કાર્ડ મળે છે.",
      link: "https://soilhealth.dac.gov.in/"
    },
    {
      id: 3,
      title: "પ્રધાનમંત્રી ફસલ વીમા યોજના",
      desc: "ફસલની નુકશાનની ભરપાઇ માટે સરકાર દ્વારા વીમા સુવિધા.",
      link: "https://pmfby.gov.in/"
    }
  ];

  return (
    <section className="card card-pad">
      <h3 style={{ marginBottom: 10 }}>🌿 સરકારની યોજનાઓ (Government Schemes)</h3>
      <div className="scheme-list">
        {schemes.map((s) => (
          <div key={s.id} className="scheme-card">
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
            <a
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
            >
              Apply / વધુ માહિતી
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Schemes;
