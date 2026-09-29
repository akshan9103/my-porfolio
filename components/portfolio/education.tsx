// EducationSection.jsx
export function EducationSection() {
  const education = [
    {
      degree: "M.Sc. Information Technology",
      institution: "Government Arts College (Autonomous), Coimbatore",
      year: "2024 – 2026",
      description: "Where I refined my focus on AI, Machine Learning, and Systems Architecture.",
    },
    {
      degree: "B.Sc. Information Technology",
      institution: "Government Arts College (Autonomous), Coimbatore",
      year: "2021 – 2024",
      description: "Where I built my core programming foundation.",
    }
  ];

  return (
    <section 
      id="Education" 
      className="flex flex-col gap-8 px-6 md:px-12 py-16 w-full max-w-5xl mx-auto justify-center items-center"
    >
      <div className="w-full h-auto flex flex-col gap-3 justify-center items-center text-center mb-6">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          &lt; ACADEMIC FOUNDATION /&gt;
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-black">
          Formal
        </h3>
        <h3 className="text-4xl md:text-5xl font-light text-black">
          Education.
        </h3>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="flex flex-col p-8 border border-gray-200 bg-white hover:border-black hover:shadow-sm transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {edu.year}
              </span>
            </div>
            <h4 className="text-2xl font-bold text-black mb-1">
              {edu.degree}
            </h4>
            <span className="text-sm font-semibold text-black mb-4">
              {edu.institution}
            </span>
            <p className="text-gray-500 font-light text-sm border-t border-gray-100 pt-4 mt-auto">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}