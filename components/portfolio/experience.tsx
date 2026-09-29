// ExperienceSection.jsx
export function ExperienceSection() {
  const experiences = [
    {
      role: "Data Science & Machine Learning Analyst",
      organization: "DataMites Capstones",
      date: "Aug 2025 – Expected 2026",
      description: "Executing an intensive, hands-on data science track. Delivering a portfolio of predictive models covering regression, classification, and complex data lifecycle management to solve business and analytical challenges.",
    },
    {
      role: "Smart Waste Management IoT System",
      organization: "ICT Academy & TANII Initiative",
      date: "Jan 2026",
      description: "Collaborated on a government and academy-backed initiative to develop an IoT-integrated smart waste management system, bridging the gap between hardware sensors and software analytics.",
    },
    {
      role: "Independent Software Development",
      organization: "Continuous",
      date: "Present",
      description: "Actively developing full-stack web applications and AI tools. Consistently testing new frameworks, managing digital business profiles (including mapping and operations for commercial venues), and integrating modern database solutions.",
    }
  ];

  return (
    <section 
      id="Experience" 
      className="flex flex-col gap-8 px-6 md:px-12 py-16 w-full max-w-5xl mx-auto justify-center items-center"
    >
      <div className="w-full h-auto flex flex-col gap-3 justify-center items-center text-center mb-6">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          &lt; THE BUILDER&apos;S JOURNEY /&gt;
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-black">
          Experience &
        </h3>
        <h3 className="text-4xl md:text-5xl font-light text-black">
          Initiatives.
        </h3>
      </div>

      <div className="w-full flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 border border-gray-200 bg-white hover:border-black hover:shadow-sm transition-all duration-300 gap-6"
          >
            <div className="flex flex-col gap-2 md:w-2/3">
              <h4 className="text-xl font-bold text-black">
                {exp.role}
              </h4>
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                {exp.organization}
              </span>
              <p className="text-gray-600 font-light text-sm leading-relaxed mt-2">
                {exp.description}
              </p>
            </div>
            <div className="md:w-1/3 flex md:justify-end">
              <span className="px-4 py-2 text-xs font-bold uppercase tracking-widest border border-black text-black">
                {exp.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}