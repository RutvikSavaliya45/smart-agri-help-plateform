import React, { useState } from "react";

function ExpertHelp() {
  const [question, setQuestion] = useState("");
  const [qaList, setQaList] = useState([
    {
      q: "મારી ઘઉંની પાકમાં પીળાશ કેમ આવે છે?",
      a: "એ જમીનમાં નાઈટ્રોજનની કમીને કારણે હોઈ શકે છે. યુરિયા યોગ્ય માત્રામાં આપો."
    },
    {
      q: "કપાસમાં વધુ ઝાડિયાં થાય છે તો શું કરવું?",
      a: "તમે ટોપિંગ ટેકનિક અપનાવો અને ખાતરનું પ્રમાણ નિયંત્રિત કરો."
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() === "") return;

    // किसान का सवाल add होगा (expert का जवाब बाद में backend से आएगा)
    setQaList([...qaList, { q: question, a: "❓ Expert will reply soon..." }]);
    setQuestion("");
  };

  return (
    <section className="card card-pad">
      <h3 style={{ marginBottom: 10 }}>👨‍🌾 Expert Help</h3>

      {/* सवाल पूछने का form */}
      <form onSubmit={handleSubmit} className="mb-3">
        <textarea
          className="form-control mb-2"
          rows="3"
          placeholder="તમારો સવાલ અહીં લખો..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit" className="btn btn-green w-100">
          Ask Expert
        </button>
      </form>

      {/* सवाल जवाब लिस्ट */}
      <div className="qa-list">
        {qaList.map((item, index) => (
          <div key={index} className="qa-card">
            <p><strong>❓ Farmer:</strong> {item.q}</p>
            <p><strong>✅ Expert:</strong> {item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpertHelp;
