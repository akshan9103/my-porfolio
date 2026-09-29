export function ProjectCards() {
  const projects = [
    {
      title: "Dynamic Restaurant OS",
      subtitle: "A Full-Stack Management Platform",
      details: [
        "A centralized digital command center for restaurant staff to manage daily operations. Built a RESTful API with Django REST Framework and PostgreSQL, secured with Simple JWT authentication. Developed a role-based React frontend with Tailwind CSS for dynamically managing menus, media assets, and customer reservations.",
      ],
      techChips: [
        "React", "Vite", "Tailwind CSS", "Django REST", "PostgreSQL", "JWT", "REST API"
      ],
      linkText: "View Code →",
      linkUrl: "#",
    },
    {
      title: "Predictive Data Models & Analytics",
      subtitle: "Turning Raw Data into Foresight",
      details: [
        "A collection of machine learning projects focused on extracting patterns from data and predicting real-world outcomes. Performed exploratory data analysis and feature engineering with Pandas, then trained machine learning models using Scikit-Learn and XGBoost.",
      ],
      techChips: [
        "Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "EDA", "Feature Engineering"
      ],
      linkText: "View Code →",
      linkUrl: "#",
    },
    {
      title: "The Local-RAG Engine",
      subtitle: "Your Private AI Assistant",
      details: [
        "A privacy-focused AI system for querying sensitive documents without sending data to external AI APIs. Built a context-aware retrieval pipeline using LangChain and ChromaDB, powered by a locally running LLM through Ollama. Wrapped the AI backend with FastAPI and connected it to a Next.js frontend for an interactive document-querying experience."
      ],
      techChips: [
        "Next.js", "FastAPI", "LangChain", "ChromaDB", "Ollama", "RAG", "LLM"
      ],
      linkText: "View Code →",
      linkUrl: "#",
    },
  ];

  return (
    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col p-8 border border-gray-200 bg-white hover:border-black hover:shadow-sm transition-all duration-300"
        >
          {/* Header */}
          <div className="mb-6 font-iosevka">
            <h4 className="text-2xl font-bold text-black mb-2">
              {project.title}
            </h4>
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              {project.subtitle}
            </span>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-3 mb-8 flex-grow">
            {project.details.map((detail, idx) => (
              <p key={idx} className="text-sm text-gray-600 font-light leading-relaxed">
                {detail}
              </p>
            ))}
          </div>

          {/* Footer (Tech & Links) */}
          <div className="mt-auto flex flex-col gap-6 border-t border-gray-100 pt-6">
            <div className="flex flex-wrap gap-2 font-mono">
              {project.techChips.map((chip, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200"
                >
                  {chip}
                </span>
              ))}
            </div>
            {/* Link Button 
                        <a
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex font-iosevka items-center text-sm font-bold text-black hover:text-gray-600 transition-colors uppercase tracking-wider"
            >
              {project.linkText}
            </a>
            
            */}
          </div>
        </div>
      ))}
    </div>
  );
}